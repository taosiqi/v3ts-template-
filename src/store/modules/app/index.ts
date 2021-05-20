interface state {
  bread: string[]
  menu: menuData[]
}
const state: state = {
  bread: [],
  menu: [
    {
      id: 1,
      pid: 0,
      icon: 'iconfont icon-yibiao',
      index: '/dashboard',
      title: '仪表盘',
      sub: []
    },
    {
      id: 2,
      pid: 0,
      icon: 'iconfont icon-moban',
      index: 'template',
      title: '模板',
      sub: [
        {
          id: 3,
          pid: 2,
          index: '/template/leven1',
          title: 'leven1',
          sub: []
        },
        {
          id: 4,
          pid: 2,
          index: '',
          title: '三级菜单',
          sub: [
            {
              id: 5,
              pid: 4,
              index: '/template/leven1/leven3',
              title: 'leven3',
              sub: []
            },
            {
              id: 6,
              pid: 4,
              index: '/template/leven1/leven4',
              title: 'leven6',
              sub: []
            }
          ]
        }
      ]
    }
  ]
}
const getters = {}
const actions = {}
const mutations = {
  coverBread(state: state, payload: string[]) {
    state.bread = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
