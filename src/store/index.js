import Vue from 'vue'
import Vuex from 'vuex'

import { SOME_MUTATION, EVERY_MUTATION } from '@/utils/mutation-type'

Vue.use(Vuex)

/**
 * 模块方式
 * const moduleA = {
 *  state: () => ({ ... }),
 *  mutations: { ... },
 *  actions: { ... },
 *  getters: { ... }
 * }
 * const moduleB = {
 *  state: () => ({ ... }),
 *  mutations: { ... },
 *  actions: {... },
 *  getters: { ... }
 * }
 */
const moduleA = {
  state: () => ({
    countA: 1
  }),
  mutations: {
    incrementA (state, payload) {
      state.countA += payload.count
    }
  }
}

const moduleB = {
  state: () => ({
    countB: 2
  }),
  mutations: {
    incrementB (state, payload) {
      state.countB += payload.count
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    count: 1,
    dollar: 2
  },
  mutations: {
    [SOME_MUTATION] (state) {
      state.count += 1
    },
    [EVERY_MUTATION] (state, payload) {
      state.dollar += payload.dollar
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
  // modules: {
  // }
})
