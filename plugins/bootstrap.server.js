function defineCollapseDirective(nuxtApp) {
  nuxtApp.vueApp.directive('bs-collapse', {
      getSSRProps() {
          return {}
      },
  })
}

export default defineNuxtPlugin((nuxtApp)=>{
  defineCollapseDirective(nuxtApp)
})
