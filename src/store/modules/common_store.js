import commonApi from '@/api'
import router from '../../router'

const state = {
  loginDetails: null,
  signupMessage: ''
}

const mutations = {
  SIGNUP_MESSAGE: (state, value) => {
    state.signupMethod = value
  },
  LOGIN_DETAILS: (state, value) => {
    state.loginDetails = value
    if (state.loginDetails == null) {
      router.push({name: 'Signin'})
    }
    else {
      router.push({name: 'Home'})
    }
  }
}

const actions = {
  signupMethod ({commit}, data) {
    commonApi.postDataViaApi('/customer/add', data,
      (response) => {
        commit('SIGNUP_MESSAGE', response.body)
      },
      (error) => {
        console.log(error)
        commit('SIGNUP_MESSAGE', 'Failed')
      })
  },
  loginMethod ({commit}, data) {
    commonApi.postDataViaApi('/users/login', data,
      (response) => {
        commit('LOGIN_DETAILS', response.body)
      },
      (error) => {
        console.log(error)
        commit('LOGIN_DETAILS', null)
      }
    )
  }
}

const getters = {
  signupMethod: (state) => {
    return state.signupMessage
  },
  loginMethod: (state) => {
    return state.loginDetails
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
