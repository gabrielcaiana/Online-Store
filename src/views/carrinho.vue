<template>
    <div class="wrapper">
        <h1>Carrinho</h1>
        <ul class="lista-carrinho">
            <li class="flex-col lista-carrinho__item" v-for="item in carrinhoItens" :key="item.id">
                <img :src="criarCaminhoImagem(item)" class="thumbnail" alt="">
                <div class="flex-col lista-carrinho__item__detalhes">
                    <div>
                       <p>{{ item.nome }}</p>
                       <p>{{ item.tamanho}}</p>
                       <p>{{ item.cor }}</p> 
                    </div>
                    <p>${{ item.preco}}</p>
                    <button @click="removerItemCarrinho(item.id)" class="btn lista-carrinho__btn-remover">
                        Remover
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { caminhoImagem } from "@/mixins/caminhoImagem.js";
export default {
    nome: "carrinho",
    mixins: [caminhoImagem],
    computed: {
        carrinhoItens() {
            return this.$store.getters.addCarrinho
        }
    },
    methods: {
        removerItemCarrinho(itemId) {
            this.$store.dispatch("removerItemCarrinho", itemId)
        }
    }
}
</script>

<style lang="scss">
    .lista-carrinho {
        width: 70%;
        @media only screen and (max-width: 832px) {
            width: 100%;
        }
    }
    .lista-carrinho__item {
        width: 100%;
        border-bottom: 1px solid #2c3e50;
    }
    .lista-carrinho__item__detalhes {
        flex: 2;
        justify-content: space-between;
        margin-left: 2rem;
    }
    .lista-carrinho__btn-remover {
        margin-top: .5rem;
        &:hover {
            color: red;
        }
    }
    .thumbnail {
        max-width:50px;
        margin-top: .5rem;
    }
</style>