<template>
  <div class="block"></div>
</template>

<script>
export default {
  name: "UserPage",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.block {
  float: right;
  margin-top: 25px;
}
</style>
