import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-143819848-1',
    autoTracking: {
        screenview: true,
        page: true
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})
