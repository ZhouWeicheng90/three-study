
const routesArr = [
    {
        path: '/Three00-Global',
        component: () => import('./Three00-Global.vue')
    },
    {
        path: '/Three01-Geometry',
        component: () => import('./Three01-Geometry.vue')
    },
    {
        path: '/Three02-Shadow',
        component: () => import('./Three02-Shadow.vue')
    },
    {
        path: '/Three03-model3d',
        component: () => import('./Three03-model3d.vue')
    },
    {
        path: '/Three04-Texture',
        component: () => import('./Three04-Texture.vue')
    },
    {
        path: '/Three05-Texture-notImage',
        component: () => import('./Three05-Texture-notImage.vue')
    },
    {
        path: '/Three06-bubbles',
        component: () => import('./Three06-bubbles.vue')
    },
    {
        path: '/Three07-animation',
        component: () => import('./Three07-animation.vue')
    },
    {
        path: '/Three08-examples',
        component: () => import('./Three08-examples.vue')
    }
]
const defaultRoute = {
    path: '',
    redirect: '/Three06-bubbles'
}
export default {
    
    /**
     * 
     * @param {import('vue').App} app 
     * @param {{routes:[],setDefault:boolean}} param1 
     */
    install(app, { routes, setDefault }) {
        if (!Array.isArray(routes)) {
            throw new Error(`You must provide a routes array when install !`)
        }
        if(process.env.NODE_ENV =='development') {
            console.warn("=====[note:] this plugin must install before use router=====")
        }
        routes.unshift(...routesArr)

        if (setDefault) {
            routes.unshift(defaultRoute)
        }
    }
}