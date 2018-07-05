import Vue from "vue";
import App from "./App.vue";
import store from "./store";

require("./assets/sass/main.scss");

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");