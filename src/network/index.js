import { request, request1 } from "./request";

// export const getDate = () => {
//   return request.get("./home/getDate");
// };

// 请求首页数据
export function getDate() {
  return request({ url: "/home/getDate" });
}

// export const getUser = (params) => {
//   return request("/user/getUser", params);
// };

export function getUser(params) {
  return request({
    url: "/user/getUser",
    params,
  });
}
export function addUser(data) {
  return request({
    url: "/user/add",
    method: "post",
    data,
  });
}
export function editUser(data) {
  return request({
    url: "/user/edit",
    method: "post",
    data,
  });
}
export function delUser(data) {
  return request({
    url: "/user/del",
    method: "post",
    data,
  });
}

export function Login(data) {
  console.log(data);
  return request1({
    url: "/login",
    method: "post",
    data,
  });
}
/* 
  文章列表
 */
// 添加文章
export function createArticle(data) {
  return request1({
    url: "articles",
    method: "post",
    data,
  });
}
// 文章列表
export function listArticle(data) {
  return request1({
    url: "articles",
    method: "get",
    data,
  });
}
// 删除文章
export function removeArticle(id) {
  return request1({
    url: `articles/${id}`,
    method: "delete",
  });
}
// 文章详情
export function itemList(id) {
  return request1({
    url: `articles/${id}`,
    method: "get",
  });
}
// 修改文章
export function updateList(id, data) {
  return request1({
    url: `articles/${id}`,
    method: "put",
    data,
  });
}
