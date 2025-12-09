import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ContactPage from "@/components/ContactPage.vue";
import CharactersPage from '@/components/CharactersPage.vue';
import CharacterDetail from "@/components/CharactersDetail.vue";
import PlotPage from '@/components/PlotPage.vue';
import PlotDetail from '@/components/PlotDetail.vue';
import GameplayPage from '@/components/GameplayPage.vue';
import AboutPage from '@/components/AboutPage.vue'

const routes = [
    {
        path: "/",
        name:  "HomePage",
        component: HomePage,
    },
    {
        path: "/contact",
        name:  "ContactPage",
        component: ContactPage,
    },
    {
        path: '/characters',
        name: 'CharactersPage',
        component: CharactersPage,
    },
    {
        path: "/characters/:id",     // <-- param dinamis
        name: "CharacterDetail",
        component: CharacterDetail,
        props: true,
    },
    {
        path: '/plots',
        name: 'PlotPage',
        component: PlotPage,
    },
    {
        path: '/plots/:id',
        name: 'PlotDetail',
        component: PlotDetail,
        props: true,
    },
    {
        path: '/gameplay',
        name: 'GameplayPage',
        component: GameplayPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }

        return {
            left: 0,
            top: 0,
            behavior: "auto",
        };
    },
});

export default router;