//定义基本路由路径 后续可以改为动态路由
export default [
    {
        path: "/",
        name: "main",
        component: () => import("../view/main.vue"),
    }
    , {
        path: "/login",
        name: "login",
        component: () => import("../view/login.vue"),
    },
    {
        path: "/merchant",
        name: "merchant",
        component: () => import("../view/baseInfo/merchant.vue"),
    },
    {
        path: "/brand",
        name: "brand",
        component: () => import("../view/baseInfo/brand.vue"),
    },
    {
        path: "/good",
        name: "good",
        component: () => import("../view/baseInfo/good.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../view/404/404.vue"),
    },
    // 所有未定义路由，全部重定向到404页，必须放在最后
    , {
        path: '/:pathMatch(.*)',//最新版本需要用正则表达式才可以
        redirect: '/404'
    }
];