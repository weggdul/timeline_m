import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
    id: 'UA-143819848-1',
    autoTracking: {
        screenview: true,
        page: isProd
    },
    debug: {
        enabled: !isProd,
        sendHitTask: isProd
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})
