import api from '../../api/wp'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  posts: []
}

const getters = {
  [getterNames.helloWorld]: (state, getters) => (
    state.hello
  )
}

const actions = {
  async [actionTypes.GET_POSTS] ({ commit, getters, state }) {
    commit(mutationTypes.SET_POSTS, await api.getPosts())
  }
}

const mutations = {
  [mutationTypes.SET_POSTS] (state, data) {
    state.posts = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
