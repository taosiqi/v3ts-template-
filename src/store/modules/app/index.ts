interface state {
  bread: bread[]
}
interface bread {
  index: string
  title: string
}

const state: state = {
  bread: [
    {
      index: '/dashboard',
      title: '首页'
    },
    {
      index: '/dashboard',
      title: '仪表盘'
    }
  ]
}
const getters = {}
const actions = {}
const mutations = {
  increment(state: state, payload: bread[]) {
    state.bread = [state.bread[0], ...payload]
    console.log(state.bread)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
