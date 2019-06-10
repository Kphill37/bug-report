import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/KellyP/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bug: [],
    bugs: [],
    bugStatus: false,
    comments: [],
    bugComments: [],
  },
  mutations: {
    postBug(state, bugs = {}) {
      state.bugs = bugs
    },
    getBugs(state, payload = []) {
      state.bugs = payload
    },
    getBug(state, payload = []) {
      state.bug = payload
    },
    postComments(state, payload = []) {
      state.comments = payload
    },
    setComments(state, payload = []) {
      state.bugComments = payload
    },
    setBugStatus(state, payload) {
      state.bugStatus = payload
    }
  },
  actions: {
    submitBug({ commit, dispatch, state }, bug) {
      try {
        _api.post("", bug)
        dispatch("getBugs")
      } catch (error) {
        console.error(error)
      }
    },
    async getBugs({ commit }) {
      try {
        let res = await _api.get('')
        commit("getBugs", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async getBugbyID({ commit }, id) {
      try {
        let res = await _api.get(id)
        commit("getBug", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async clearBug({ commit }) { commit("getBug", {}) },

    async submitComment({ commit, dispatch }, comment) {
      try {
        let res = await _api.post("/" + comment.bug + "/notes", comment)
        dispatch('getComments', comment.bug)
      } catch (error) {
        console.error(error)
      }
    },
    async getComments({ commit, dispatch }, payload) {
      try {
        let res = await _api.get("/" + payload + "/notes")
        commit("setComments", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async bugCompleted({ commit, dispatch }, bug) {
      let res = await _api.delete(bug._id)
      commit("setBugStatus", bug.closed)
      dispatch('getBugs')
    },
    async deleteCommentByID({ commit, dispatch }, bugComment, bug) {
      let res = await _api.delete("/" + bugComment.bug + "/notes" + "/" + bugComment._id)
      dispatch('getComments', bugComment.bug)
    }, catch(error) {
      console.error(error)
    }
  },
})