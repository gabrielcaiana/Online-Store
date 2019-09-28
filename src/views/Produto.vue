<template>
    <div>
        <section class="wrapper">
            <div class="flex-col">
                <img class="flex-col--2" :src="caminhoImagem(produto)" alt="">
                <div class="flex-col--2">
                    <h2> {{ produto.nome }} </h2>
                    <p class="preco">R${{ produto.preco }}</p>
                    <p><b>Tamanho:</b> {{ produto.tamanho }}</p>
                    <p><b>Genero:</b> {{ produto.genero }}</p>
                    <p><b>Cor:</b> {{ produto.cor }}</p>
                    <p><em>{{produto.quantidade}} em estoque</em></p>
                    <h3>Detalhes</h3>
                    <ul>
                        <li><b>Material:</b> {{ produto.detalhes.material}}</li>
                        <li><i>{{ produto.detalhes.descricao }}</i></li>
                        <li><b>Estilo:</b> {{ produto.detalhes.style }}</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    nome: 'produto',
    data() {
        return {
            produto: this.$store.getters.produto(this.$route.params.id)
        }
    },
    methods: {
        caminhoImagem(produto) {
            return require(`../assets/produtos/${produto.imagens[0]}`)
        }
    }
}
</script>

<style lang="scss">
    .flex-col {
        display: flex;
        align-items: flex-start;
    }
    .flex-col--2 {
        width: 50%;
    }
    .preco {
        font-size: 1.3em;
        color: red;
        font-weight: bold;
    }
    .bold {
        font-weight: bold;
    }
    .flex-col--2 h3 {
        text-align: left;
        margin: 20px 0;
    }
    .flex-col--2 ul {
        margin: 0;padding: 0;
    }
    .flex-col--2 p, li {
        text-align: left;
        list-style: none;
    }

    .flex-col--2 li {
        margin: 20px 0 ;
    }
</style>