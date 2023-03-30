<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <el-card class="box-card">
          <div class="user">
            <img src="~assets/images/user.png" />
            <div class="userInfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>
              上次登录时间:
              <span>2023-2-23</span>
            </p>
            <p>
              上次登录地点:
              <span>淄博</span>
            </p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(value, key) in tableLabel"
              :label="value"
              :prop="key"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">¥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <!-- 折线图 -->
          <div ref="echarts1" style="height: 280px; width: 100%"></div>
        </el-card>
        <div class="graph">
          <el-card>
            <!-- 柱状图 -->
            <div ref="echarts2" style="height: 280px; width: 100%"></div>
          </el-card>
          <el-card>
            <div ref="echarts3" style="height: 240px; width: 100%"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDate } from "network/index.js";
import * as echarts from "echarts";

export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      orderData: [],
      userData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getDate().then((data) => {
      const { tableData, orderData, userData, videoData } = data.data;
      this.tableData = tableData;
      this.orderData = orderData;
      this.userData = userData;
      this.videoData = videoData;

      this.brokenChart();
      this.barChart();
      this.pieChart();
    });
  },
  methods: {
    brokenChart() {
      // 初始化容器
      const echarts1 = echarts.init(this.$refs.echarts1);

      // 配置数据
      const xAxisDate = Object.keys(this.orderData.data[0]);
      let option = {
        legend: {
          data: xAxisDate,
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          data: xAxisDate,
        },
        yAxis: {
          type: "value",
        },
        series: [],
      };
      xAxisDate.forEach((key) => {
        option.series.push({
          name: key,
          data: this.orderData.data.map((item) => item[key]),
          type: "line",
        });
      });

      // 生成图表
      echarts1.setOption(option);
    },
    barChart() {
      const echarts2 = echarts.init(this.$refs.echarts2);

      let option = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: this.userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
        ],
        series: [
          {
            name: "新增用户",
            data: this.userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: this.userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(option);
    },
    pieChart() {
      const echarts3 = echarts.init(this.$refs.echarts3);

      let option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: this.videoData,
            type: "pie",
          },
        ],
      };
      echarts3.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;

  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userInfo {
    .name {
      font-size: 32px;
      margin-bottom: 4px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .el-card {
    width: 48%;
    height: 260px;
  }
}
</style>
