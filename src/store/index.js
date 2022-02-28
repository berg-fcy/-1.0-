import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        lists:[]
    },
    mutations:{
        initNovel(state,data){
            state.lists = data;
        }
    },
    actions:{}
})
