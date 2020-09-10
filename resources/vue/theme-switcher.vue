<template>
    <div :class="['theme-switcher', {'is-active': isDark}]">
        <div class="theme-switcher__switcher">
            <input class="theme-switcher__input"
                   v-bind="$attrs"
                   type="range"
                   v-model.number="isDark"
                   min="0"
                   max="1"
                   @mousedown="oldValue = isDark"
                   @click="inputClick">
        </div>
        <div class="theme-switcher__label" @click.self="toggleTheme">
            <slot :isDark="isDark">
                {{ $lang.THEME_SWITCHER_DEFAULT }}
            </slot>
        </div>
    </div>
</template>

<script>
export default {

    name: 'theme-switcher',

    inheritAttrs: false,

    data() {
        return {
            oldValue: null,
            isDark: this.AWEMA._themeDark
        }
    },


    watch: {

        isDark(isDark) {
            AWEMA._themeDark = isDark
            this.$emit('input', isDark)
            this.oldValue = null
        }
    },


    methods: {

        inputClick() {
            if ( this.oldValue === this.isDark ) this.toggleTheme()
        },

        toggleTheme() {
            this.isDark = this.isDark ? 0 : 1
        },

        checkTheme() {
            if ( this.isDark !== this.AWEMA._themeDark) this.isDark = this.AWEMA._themeDark
        }
    },


    mounted() {
        AWEMA.on('theme.change', this.checkTheme)
    },


    beforeDestroy() {
        AWEMA.off('theme.change', this.checkTheme)
    }
}
</script>
