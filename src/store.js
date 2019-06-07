import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Kelly/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
  },
  mutations: {
    postBug(state, bugs = []) {
      state.bugs = bugs
    }
  },
  actions: {
    submitBug({ commit, dispatch, state }, bug) {
      debugger
      console.log(bug)
      try {
        _api.post("", bug)
        dispatch("postBug")
      } catch (error) {
        console.error(error)
      }
    }
  }
})
