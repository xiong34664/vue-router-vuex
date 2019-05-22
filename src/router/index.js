import Vue from "vue";
import VueRouter from "vue-router";
import login from "../pages/login";
import home from "../pages/home";
import about from "../pages/about";
import my from "../pages/my";
import my1 from "../pages/my/my1";
import my2 from "../pages/my/my2";
import message from "../pages/message";

Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [{
    path: "/login",
    component: login,
    name: 'login'
  }, {
    path: "/home",
    component: home,
    name: 'home'
  },
  {
    path: "/about",
    component: about,
    name: 'about'
  },
  {
    path: "/msg",
    component: message,
    name: 'message'
  },
  {
    path: "/my",
    name: 'my',
    component: my,
    children: [{
      path: "my1",
      component: my1,
      name: 'my1'
    }, {
      path: "my2",
      component: my2,
      name: 'my2'
    }]
  }
];
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes
});
export default router;