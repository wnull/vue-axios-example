import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Filters
Vue.filter("currency", value => {
    return value.toLocaleString("en-gb", {
        style: "currency",
        currency: "GBP"
    });
});

new Vue({ render: h => h(App) }).$mount("#app");
