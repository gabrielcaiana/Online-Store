<template>
  <div>
    <section class=" wrapper">
      <h2>Itens em destaque</h2>
      <ul class="itens-destaque">
        <li v-for="produto in produtos" :key="produto.id" class="itens-destaque__item">
          <router-link :to="{ name: 'produto', params: { id: produto.id }}">
            <img class="produto-imagem" :src="criarCaminhoImagem(produto)" alt="">
            <p class="produto-titulo"> {{produto.nome}} </p>
            <p><em> ${{ produto.preco }} </em></p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {caminhoImagem} from "@/mixins/caminhoImagem.js"

export default {
  name: "home",
  mixins: [caminhoImagem],
  computed: {
    produtos() {
      //retornando os produtos do vuex 
      return this.$store.state.produtos
    },
  }
};
</script>

<style lang="scss">
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    @media only screen and (max-width: 832px) {
      max-width: 100%;
      padding: 1rem;
      text-align: center;
    }
  }
  .itens-destaque {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 832px) {
      flex-direction: column;
    }
  }
  .itens-destaque__item {
    width: 33%;
    text-align: center;
     @media only screen and (max-width: 832px) {
      width: 100%;
    }
  }
  .produto-imagem {
    max-height: 200px;
  }
  .produto-titulo {
    font-weight: bold;
  }

</style>
