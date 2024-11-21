import { defineStore } from 'pinia'


export const useUserStore = defineStore({
    id: "userStore",
    state: () => {
        return {

            token: '',

            user: {},

        };
    },
    // 开启数据缓存 若 需要state 中的变量页面刷新数据缓存 需要调用 actions 中的方法
    actions: {
        setToken(token) {
            this.token = token
        }
    },
    persist: {
        enabled: true, // 开启数据缓存
    }

})