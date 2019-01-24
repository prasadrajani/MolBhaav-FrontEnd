import commonApi from '@/api'
import router from '../../router'

const state = {
  loginDetails: null,
  signupMessage: '',
  query: '',
  loginMessage: ''
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
  },
  QUERY: (state, value) => {
    state.query = value
  },
  LOGIN_MESSAGE: (state, value) => {
    state.loginMessage = value
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
        sessionStorage.setItem('UserId', response.body.userId)
      },
      (error) => {
        console.log(error)
        commit('LOGIN_DETAILS', null)
        commit('LOGIN_MESSAGE', error.body.message)
      }
    )
  },
  performSearch ({commit}, data) {
    commit('QUERY', data)
  }
}

const getters = {
  signupMethodMessage: (state) => {
    return state.signupMessage
  },
  loginMethod: (state) => {
    return state.loginDetails
  },
  queryGetter: (state) => {
    return state.query
  },
  displayLoginError: (state) => {
    return state.loginMessage
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
