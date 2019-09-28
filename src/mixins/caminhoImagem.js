export const caminhoImagem = {
    methods: {
        criarCaminhoImagem(produto) {
            return require(`../assets/produtos/${produto.imagens[0]}`)
        }
    }
}