// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";


// 这里是动态导入！！！
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    // 这里是缺省的
    path: '',
    // redirect 重定向：重新定义一个方向
    redirect: '/home'
  },
  {
    // 协议头://host/query
    path: '/home',
    component: Home,
    // 原数据
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'  // 这里的意思是，默认跳转到news
      // },
      {
        // 子路由里，news不需要写成/news,会自动拼接成/home/news
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to,from,next) => {
      // console.log('about beforeEnter');
      // 这里需要调next(),才能真正进行下一步
      next()
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 这里传入options，即选项
  // 配置路由和组件之间的应用关系
  // 这里是ES6的增强语法
  routes,
  // 这里会使得路径变成html5的history模式
  mode: 'history',
  linkActiveClass : 'active'
})

// 前置守卫（guard、hock、回调）
router.beforeEach((to, from, next) => {
  // 从from 跳转到 to, 下面要永远取第一个？
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('++++');
  // 内部实现有个next().自己实现会把next()覆盖掉，所以必须跳转一个next
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('----');
})

// 3.将router对象传入到Vue实例中
export default router  // 这里是导出
