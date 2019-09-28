import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        carrinho: [],
        produtos: [{
                nome: "Tênis Nike React Presto Masculino",
                id: 1,
                preco: 499.99,
                cor: "Vermelho",
                tamanho: "42",
                genero: "Masculino",
                quantidade: "20",
                adicionadoEm: "27/09/2019 23:00",
                categoria: "Basque e Jordan",
                detalhes: {
                    material: "Plastico",
                    descricao: "Inspirado no original do início de 2000, o Nike Presto React traz um toque inesperado a um ícone sempre não convencional. A entressola de espuma inovadora React proporciona um visual futurista e uma sensação elástica e leve para conforto o dia todo com muita personalidade.",
                    style: "AV2605-600",
                    opcional: ""
                },
                imagens: [
                    "1-1.png",
                    "1-2.png",
                    "1-3.png"
                ]
            },
            {
                nome: "Tênis Nike SB Zoom Janoski RM Unissex",
                id: 2,
                preco: 399.99,
                cor: "preto",
                tamanho: "39",
                genero: "Unissex",
                quantidade: "10",
                adicionadoEm: "19/08/2019 17:00",
                categoria: "Casual",
                detalhes: {
                    material: "tecido",
                    descricao: "O Nike SB Zoom Janoski RM combina um visual minimalista com ajuste moderno. Ele foi atualizado com uma nova palmilha macia e solado flexível para uma melhor sensibilidade ao skate, direto da caixa.",
                    style: "AQ7475-003",
                    opcional: "1200 vendidos"
                },
                imagens: [
                    "2-1.png",
                    "2-2.png",
                    "2-3.png"
                ]
            },
            {
                nome: "Tênis Nike SB Zoom Janoski Mid RM Unissex",
                id: 3,
                preco: 399.99,
                cor: "preto",
                tamanho: "44",
                genero: "Unissex",
                quantidade: "2",
                adicionadoEm: "10/10/2019 07:00",
                categoria: "Casual",
                detalhes: {
                    material: "Camurça",
                    descricao: "O Nike SB Zoom Janoski RM combina um visual minimalista com ajuste moderno. Ele foi atualizado com uma nova palmilha macia e entressola flexível para uma melhor sensibilidade ao skate, direto da caixa.",
                    style: "AT7324-001",
                    opcional: ""
                },
                imagens: [
                    "3-1.png",
                    "3-2.png",
                    "3-3.png"
                ]
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        produto: (state) => (id) => {
            return state.produtos.filter(p => p.id === Number(id))[0]
        }
    }
});