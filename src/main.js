import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import Rack from "./components/Rack.vue";

require("./assets/sass/main.scss");

Vue.use(VueRouter);

export const router = new VueRouter({    // exports router so it can be access in other files
    mode: 'history',
    routes: [
        { path: '/rack/:num', component: Rack, props: true }, 
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");