import dashboard from "@/views/dashboard/index.vue";


export const constantRoutes = [
    {
        path: '/',
        component: dashboard
    }

    // {
    //     path: '/',
    //     redirect: '/',
    //     children: [{
    //         path: 'dashboard',
    //         name: 'Dashboard',
    //         meta: {title: 'Dashboard', icon: 'dashboard'}
    //     }]
    // },
]

const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
const router = createRouter()

export default router
