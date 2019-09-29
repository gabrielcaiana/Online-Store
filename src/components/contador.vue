<template>
  <span v-if="contador > 0" class="contador">{{ contador }}</span>
</template>
<script>
export default {
  nome: "contador-carrinho",
  props: ["contador"]
};
</script>

<style lang="scss">
.contador {
  position: absolute;
  top: -0.5rem;
  right: -1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}
</style>