interface state {
  bread: bread[]
  menu: menuData[]
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
  ],
  menu: [
    {
      id: 1,
      pid: 0,
      icon: 'iconfont icon-yibiao',
      index: '/dashboard',
      title: '仪表盘'
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
          title: 'leven1'
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
              title: 'leven3'
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
  checkBread(state: state, payload: bread[]) {
    state.bread = [state.bread[0], ...payload]
    console.log(state.bread)
  },
  coverBread(state: state, payload: bread[]) {
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
