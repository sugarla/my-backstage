import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
// 我自己搭建的新接口
export function request1(config) {
  const instance1 = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000,
  });

  instance1.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance1.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance1(config);
}
