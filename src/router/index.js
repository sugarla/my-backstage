import VueRouter from "vue-router";
import Vue from "vue";

const Main = () => import("../views/main/Main");
const Home = () => import("../views/home/Home");
const User = () => import("../views/user/User");
const Article = () => import("../views/article/Article");
const CreateArticle = () => import("../views/article/CreateArticle");
const ListArticle = () => import("../views/article/ListArticle");
const EditArticle = () => import("../views/article/EditArticle");
const Login = () => import("../views/login/Login");

Vue.use(VueRouter);
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push;

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace;

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "user",
        component: User,
      },
      {
        path: "article",
        component: Article,
        children: [
          {
            path: "createArticle",
            component: CreateArticle,
          },
          {
            path: "listArticle",
            component: ListArticle,
          },
        ],
      },
      {
        path: "article/:id/edit",
        component: EditArticle,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
