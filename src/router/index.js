import { createRouter, createWebHistory } from "vue-router";
import baseRouter from "./basepath";

// 构建路由 函数
const _createRouter = () =>
    createRouter({
        history: createWebHistory(),
        routes: baseRouter,
        scrollBehavior() {
            return {
                el: "#app",
                top: 0,
                behavior: "smooth",
            };
        },
    });

// 重置路由 函数
export const resetRouter = () => {
    const newRouter = _createRouter();
    router.matcher = newRouter.matcher;
};

const router = _createRouter();


// 在Vue应用实例化之前添加路由守卫
router.afterEach((to, from) => {
    // 检查路由是否存在

    const doesRouteExist = router.hasRoute(to.path);
    console.log('路由是否存在：', doesRouteExist, to.path)
    // if (!doesRouteExist) {
    //     // 如果不存在，重定向到404页面
    //     router.replace('/404');
    // }
});

export default router;