import { createApp, reactive } from 'vue'

import myLoad from '@/components/common/loading.vue'

const msg = reactive({
    show: false,
})

const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'))
const load = {
    show() { // 控制显示loading的方法
        msg.show = true
        document.body.appendChild($loading.$el)
    },

    hide() { // 控制loading隐藏的方法
        msg.show = false
    }
}
export { load }
