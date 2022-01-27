import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let urlApi = 'https://api.multisearch.io/';

// https://api.multisearch.io/?id=11773&lang=ru&q=aaa&query=%D0%B1%D0%BE%D0%BA%D0%B0%D0%BB

let paramsApi = {
    id: 11773,
    lang: "ru",
    q: "dataresult",
    query: ""
}

let store = new Vuex.Store({
    state: {
        query: "",
        item_groups: [],
        categories: [],
        total: 0,
        t: null,
        p: null
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, data) => {
            state.query       = data.query;
            state.item_groups = data.results.item_groups;
            state.categories  = data.results.categories;
            state.total       = data.total;
        },
        SET_CATEGORY_TO_STATE: (state, t) => {
            state.t = t;
        },
        SET_PAGE_TO_STATE: (state, p) => {
            state.p = p;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}, objData){
            return axios(urlApi, {
                method: "GET",
                params: {...paramsApi, ...objData}
            }).then((res) => {
                commit('SET_PRODUCTS_TO_STATE', res.data);
                commit('SET_CATEGORY_TO_STATE', objData.t);
                commit('SET_PAGE_TO_STATE', objData.p);
                return res;
            }).catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    getters: {
        QUERY(state) {
            return state.query;
        },
        ITEM_GROUPS(state) {
            return state.item_groups;
        },
        CATEGORIES(state) {
            return state.categories;
        },
        TOTAL(state) {
            return state.total;
        },
        CATEGORY_ID(state){
            return state.t;
        },
        PAGE(state){
            return state.p;
        }
    }
});

export default store;

