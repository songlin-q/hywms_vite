import axios from 'axios'

import { ElMessage } from 'element-plus'

import { load } from '@/utils/loading.js'
import router from '../router';
//引入状态管理
import { useUserStore } from "@/store/store.js";
let userStoreMod = useUserStore();


const baseUrl = import.meta.env.VITE_BASE_URL
//创建实例
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
});

//显示加载
const showLoading = () => {

    load.show();
}
//隐藏加载
const hideLoading = () => {
    load.hide();
}

//请求拦截器
instance.interceptors.request.use((config) => {
    showLoading();
    if (config.method == 'POST') {
        config.data = JSON.stringify(config.data);
    }
    return config;
}, (error) => {
    hideLoading();
    //请求错误
    Promise.reject(error);
})

//响应拦截器
instance.interceptors.response.use((response) => {

    hideLoading();
    if (response.data.code == 404) {
        ElMessage.error(response.data.msg)
        router.push({
            path: "/404",
        });
    }
    if (response.data.code == 401) {
        ElMessage.error(response.data.msg)
        router.push({
            path: "/login",
        });
    }
    if (userStoreMod.token) config.headers['Authorization'] = `Bearer ${userStoreMod.token}`
    //响应成功
    else return response.data
}, (error) => {
    hideLoading();

    let message = ""
    if (error.response && error.response.status) {
        const status = error.response.status;
        switch (status) {
            case 400:
                message = "请求错误";
                break;
            case 401:
                message = "请求错误";
                break;
            case 404:
                message = "请求地址出错";
                break;
            case 408:
                message = "请求超时";
                break;
            case 500:
                message = "服务器内部错误!";
                break;
            case 501:
                message = "服务未实现!";
                break;
            case 502:
                message = "网关错误!";
                break;
            case 503:
                message = "服务不可用!";
                break;
            case 504:
                message = "网关超时!";
                break;
            case 505:
                message = "HTTP版本不受支持";
                break;
            default:
                message = "请求失败";
        }
        ElMessage.error(message);
        console.log('请求错误:', message);
        return Promise.reject(error)
    }
    return Promise.reject(error)
});

return instance