<template>
  <div id="app">
    <div id="nav" class="wrapper flex-col">
      <h1 class="flex-col--2 align--left">Nike Store</h1>
      <div class="flex-col--2 align-self--center">
      <router-link class="text--decoration" to="/">Inicio</router-link> |
      <router-link class="text--decoration nav-items__item" to="/carrinho">
        Carrinho
        <contador-carrinho :contador="contarCarrinho"></contador-carrinho>
      </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import contadorCarrinho from "@/components/contador";
export default {
  nome: 'app',
  components: {contadorCarrinho},
  computed: {
    contarCarrinho() {
       return this.$store.state.carrinho.length
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  text-align: right;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 5px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .align--left {
    text-align: left;
  }
  .align-self--center {
    align-self: center;
  }
  .text--decoration {
    text-decoration: none;
  }
}
.nav_items {
  justify-content: flex-end;
  display: flex;
}
.nav-items__item {
  margin-left: 1rem;
  position: relative;
}
</style>
