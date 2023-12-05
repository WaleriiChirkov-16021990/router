import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/pages/DashBoard.vue";
import AboutContent from "@/pages/AboutContent.vue";

Vue.use(Router);



export default new Router({
    routes:[
        {
            path: "/",
            redirect: "/dashboard",
            component: Dashboard,
        },
        {
            path: "/",
            redirect: "/about",
            component: AboutContent,
        }
    ]
});