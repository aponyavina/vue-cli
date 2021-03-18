// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import Home from '@/pages/Home'
import Example from '@/pages/Example'
import NotFound from '@/pages/404'

// routering
export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})