import { Collapse} from 'bootstrap'

function defineCollapseDirective(nuxtApp) {
    nuxtApp.vueApp.directive('bs-collapse', {
        mounted(el) {
            const collapse = new Collapse(el)
            el.collapse = collapse
        },
        unmounted(el) {
            el.collapse.dispose()
        },
    })
}

export default defineNuxtPlugin((nuxtApp)=>{
    defineCollapseDirective(nuxtApp)
})
