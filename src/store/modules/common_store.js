import commonApi from '@/api'

const state = {
  login: false,
  loginDetails: null,
  signupDetails: null,
  product: {},
}
const mutations = {
    LOGIN_DETAILS: (state, value) => {
    state.loginDetails = value
  },

  SIGNUP_DETAILS: (state, value) => {
    state.signupDetails = value
    state.login = true
  },

  SELECT_PRODUCT: (state, product) => {
    state.product = product
  },

  LOGIN: (state, boolVal) => {
    state.login = boolVal
  }
}
const actions = {
  login ({commit}, data) {
    commonApi.postDataViaApi('/user/login', data,
      (response) => {
          debugger
        commit('LOGIN', true)
      },
      (error) => {
        debugger
      }
    )
  },

  signup ({commit}, data) {
    commonApi.postDataViaApi('/user/signup', data,
      (response) => {
        commit('SIGNUP_DETAILS', response.body)
      },
      (error) => {
        console.log(error)
        commit('SIGNUP_DETAILS',[])
      }
    )
  },

  selectProduct ({commit},product) {
    commit('SELECT_PRODUCT', product)
  }
}
const getters = {
  userdetails: (state) => {
    return state.loginDetails
  },

  signupdetails: (state) => {
    return state.signupDetails
  },

  getSelectedProduct: (state) => {
    debugger
    return state.product
  },
  getLoginStatus: (state) => {
    return state.login
  }
}

export default{
  state,
  mutations,
  actions,
  getters 
}
