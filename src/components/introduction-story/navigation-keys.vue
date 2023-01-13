<template>
    <footer class="navigation-keys" ref="">
        <div class="navigation-key left" @click="click('prev')">
            <i class="icon" v-html="navKey"/>
            <i class="icon shadow" v-html="navKey"/>
        </div>    
        <div class="navigation-key right" @click="click('next')">
            <i class="icon" v-html="navKey"/>
            <i class="icon shadow" v-html="navKey"/>
        </div>    
    </footer>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import navKey from "./../../assets/svg/navigation-key.svg?raw"


export default defineComponent({
    name: "navigation-keys",
    props: {
        character: {
            type: String,
            required: false,
            default: "-"
        },
    },
    data: () => {
        return {
            navKey: navKey
        }
    },
    computed: {
        line() {
            return this.character.repeat(512)
        }
    },
    mounted() {
        if (this.$refs["line"] instanceof HTMLElement) {
            const fontSize = window.getComputedStyle(this.$refs["line"]).fontSize.replace("px", "")
            this.$refs["line"].style.height = `${fontSize}px`
        }
    },
    methods: {
        click(type: "next" | "prev") {
            this.$emit(type)
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/variables.scss";
.navigation-keys {
    position: fixed;
    bottom: 0;
    left: 48px;
    right: 48px;
    z-index: 2023;
    display: flex;
    justify-content: space-between;
    
    @media (min-width: 768px) {
        left: 64px;
        right: 64px;
    }
}

.navigation-key {
    display: inline-block;
    padding-bottom: 64px;
    position: relative;
    
    .icon {
        display: block;
        transition: $transitionDefault;
        fill: $grey;
        
        &:hover {
            fill: $black;
            translate: 0 -8px;
            cursor: pointer;
            opacity: 1;
            + .shadow {
                opacity: 0.48;
                scale: 1.2;
            }
        }
        &.shadow {
            fill: $black;
            opacity: 0.64;
            position: absolute;
            translate: 0 -32px;
            transform: rotateX(70deg);
            filter: blur(16px);
        }
    }

    
    &.left {
        .icon {
            transform: rotateY(180deg);
            &.shadow {
                transform: rotateY(180deg) rotateX(70deg);
            }
        }
    }
}
</style>
