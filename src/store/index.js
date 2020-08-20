import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    channels: []
  },
  mutations: {
    PUT_MOVIES_TO_STATE: (state, movies) => {
      state.movies = movies
    },
    PUT_CHANNELS_TO_STATE: (state, channels) => {
      state.channels = channels
    }
  },
  actions: {
    GET_MOVIES ({ commit }) {
      return axios('http://localhost:3000/movies', {
        method: 'GET'
      })
        .then((movies) => {
          commit('PUT_MOVIES_TO_STATE', movies.data)
          return movies
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    GET_CHANNELS ({ commit }) {
      return axios('http://localhost:3000/channels', {
        method: 'GET'
      })
        .then((channels) => {
          commit('PUT_CHANNELS_TO_STATE', channels.data)
          return channels
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    MOVIES (state) {
      return state.movies
    },
    CHANNELS (state) {
      return state.channels
    }
  }
})
