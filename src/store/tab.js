export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    //选择标签 选择面包屑
    selectMenu (state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
        // Cookie.set('tagList', JSON.stringify(state.tabsList))
      } else {
        state.currentMenu = null
      }
      // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    //关闭标签
    closeTab (state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
  },
  actions: {}
}
