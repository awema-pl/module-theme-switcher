import themeSwitcher from '../vue/theme-switcher.vue'

export function install(Vue) {

    if ( this.installed ) return
    this.installed = true

    Vue.component('theme-switcher', themeSwitcher)
}

export default {
    installed: false,
    install
}
