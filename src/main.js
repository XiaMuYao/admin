import {createApp} from 'vue'

import App from './App.vue'
import VueRouter from "vue-router";
import router from "@/router";

// const app = createApp(App,router)
Vue.use(VueRouter)

new Vue({
    router : router,
    render:h =>h(App)
}).month('#app')
// app.use(Router)
// app.mount('#app')
