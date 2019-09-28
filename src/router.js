import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Produto from "./views/Produto.vue";
import Carrinho from "./views/carrinho.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/produtos/:id",
            name: "produto",
            component: Produto,
        },
        {
            path: "/carrinho/",
            name: "carrinho",
            component: Carrinho,
        }
    ]
});