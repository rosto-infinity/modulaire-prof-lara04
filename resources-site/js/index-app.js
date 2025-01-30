import '../css/site.css'
import 'remixicon/fonts/remixicon.css'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'

// global components
import { Link } from '@inertiajs/vue3'


import Translations from '@/Plugins/Translations'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue', { eager: true })
        )

       

        return page
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(createPinia())
            .use(plugin)
            .use(ZiggyVue)
            .use(Translations)
            .component('Link', Link)
            .mount(el)
    },
    progress: {
        color: '#3e63dd'
    }
})
