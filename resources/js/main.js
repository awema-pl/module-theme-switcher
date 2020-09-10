import vuePlugin from './plugin.js'
import { checkTheme, getTheme, setTheme, themeMediaQuery } from './modules/theme.js'
import lang from './modules/lang.js'

checkTheme()

const awemaPlugin = {

    install(AWEMA) {
        AWEMA.lang = lang
        AWEMA._themeMQL = themeMediaQuery
        AWEMA._themeMQL.addListener( function(e){
            AWEMA._themeDark = Number(e.matches)
        })
        Object.defineProperty(AWEMA, '_themeDark', {
            get() {
                return getTheme()
            },
            set(val) {
                val = Number(val)
                if ( val === getTheme() ||
                     ! [0, 1].includes( val ) ) return
                setTheme(val)
                AWEMA.emit('theme.change', val)
            }
        })
        Vue.use(vuePlugin)
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    window.__awema_plugins_stack__ = window.__awema_plugins_stack__ || []
    window.__awema_plugins_stack__.push(awemaPlugin)
}
