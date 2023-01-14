<template>
    <footer class="navigation-keys">
        <div class="navigation-key left" ref="left-key" @click="click('prev')">
            <span class="no-shadow-container">
                <i class="icon" v-html="navKey"/>
            </span>
            <span class="shadow-container">
                <i class="icon shadow" v-html="navKey"/>
            </span>
        </div>    
        <div class="navigation-key right" ref="right-key" @click="click('next')">
            <span class="no-shadow-container">
                <i class="icon" v-html="navKey"/>
            </span>
            <span class="shadow-container">
                <i class="icon shadow" v-html="navKey"/>
            </span>
        </div>    
    </footer>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import navKey from "./../../assets/svg/navigation-key.svg?raw"
import gsap from "gsap"


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
        gsap.from(this.$refs["left-key"].querySelector(".no-shadow-container"), {
            duration: 1.28, 
            translateY: 64, 
            opacity: 0, 
            ease: "power4.out"
        })
        gsap.from(this.$refs["left-key"].querySelector(".shadow-container"), {
            duration: 1.28, 
            translateY: 32, 
            opacity: 0, 
            ease: "power4.out"
        })
        gsap.from(this.$refs["right-key"], {
            duration: 1.28, 
            delay: 0.16,
            translateY: 64, 
            opacity: 0, 
            ease: "power4.out"
        })
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
    .no-shadow-container,
    .shadow-container {
        display: block;
    }

    .no-shadow-container:hover {
        .icon {
            fill: $black;
            translate: 0 -8px;
            cursor: pointer;
            opacity: 1;
        }
        + .shadow-container {
            .icon {
                opacity: 0.48;
                scale: 1.2;
                translate: 24px 0;
            }
        }
    }
    .icon {
        display: block;
        transition: $transitionDefault;
        fill: $dark-grey;
        
        
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

        .no-shadow-container:hover {
            + .shadow-container {
                .icon {
                    translate: -24px 0;
                }
            }
        }
    }
}
</style>
