import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Kelly/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bug: [],
    bugs: [],
  },
  mutations: {
    postBug(state, bugs = {}) {
      state.bugs = bugs
    },
    getBugs(state, payload = []) {
      state.bugs = payload
    },
    getBug(state, payload = []) {
      debugger
      state.bug = payload
    }
  },
  actions: {
    submitBug({
      commit,
      dispatch,
      state
    }, bug) {
      console.log(bug)
      try {
        _api.post("", bug)
        dispatch("getBugs")
      } catch (error) {
        console.error(error)
      }
    },
    async getBugs({
      commit
    }) {
      try {
        let res = await _api.get('')
        console.log(res.data.results)
        commit("getBugs", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async getBugbyID({
      commit
    }, id) {
      debugger
      try {
        let res = await _api.get(id)
        commit("getBug", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async clearBug({
      commit
    }) {
      commit("getBug", {})
    }
  }
})