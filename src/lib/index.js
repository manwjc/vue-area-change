import vueAreaChange from './vue-area-change'
const areaChange = {
  install (Vue) {
    Vue.component(vueAreaChange.name, vueAreaChange)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(areaChange)
}

export default areaChange
