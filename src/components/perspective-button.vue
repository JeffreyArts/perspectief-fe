<template>
    <div class="perspective-button" ref="button">
        <div class="perspective-button-top" ref="top" />
        <div class="perspective-button-bottom" ref="bottom" />
        <slot />
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"


export default defineComponent({
    name: "perspective-button",
    props: {
        character: {
            type: String,
            required: false,
            default: "-"
        },
    },
    data: () => {
        return {
        }
    },
    computed: {
        line() {
            return this.character.repeat(512)
        }
    },
    mounted() {
        document.addEventListener("mousemove", this.mouseMove)
    },
    unMounted() {
        document.removeEventListener("mousemove", this.mouseMove)
    },
    methods: {
        mouseMove(e: MouseEvent) {
            
            let x = e.clientX 
            let y = e.clientY
            let topDegrees = 90
            let bottomDegrees = 90
            
            if (this.$refs?.top && this.$refs.top instanceof HTMLElement && this.$refs.bottom instanceof HTMLElement && this.$refs.button instanceof HTMLElement ) {
                const breakpoint = this.$refs.button.offsetTop + this.$refs.button.offsetHeight/2
                if (y <= breakpoint) {
                    topDegrees = y/breakpoint
                    this.$refs.top.style.opacity = "1"
                    this.$refs.bottom.style.opacity = "0"
                } else {
                    this.$refs.top.style.opacity = "0"
                    this.$refs.bottom.style.opacity = "1"
                    bottomDegrees = 1-(y-breakpoint) / (window.innerHeight-breakpoint)
                }

                if (topDegrees < .32) {
                    topDegrees = .32
                }
                    
                if (bottomDegrees < .64) {
                    bottomDegrees = .64
                }

                this.$refs.top.style.setProperty("--topDegrees", `${topDegrees * 90}deg`)
                this.$refs.bottom.style.setProperty("--bottomDegrees", `-${bottomDegrees * 90}deg`)
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";
.perspective-button {
    color: $white;
    background-color: #222;
    display: inline-block;
    padding: 8px 32px;
    position: relative;
    perspective: 144px;
    transform-origin: center;
    transition: $transitionDefault;
    cursor: pointer;
    z-index: 1;
    &:hover {
        scale: 1.28;
    }
}

.perspective-button-top {
    z-index: -1;
    position: absolute;
    display: block;
    background-color: #777;
    content: "";
    left: 0;
    bottom: 0;
    top: 50%;
    right: 0;
    translate: 0 -200%;
    transform-origin: center bottom;
    transform: rotateX(var(--topDegrees));
    transform-style: preserve-3d;
}

.perspective-button-bottom {
    z-index: -1;
    position: absolute;
    display: block;
    background-color: #000;
    content: "";
    left: 0;
    bottom: 0;
    top: 50%;
    right: 0;
    translate: 0 100%;
    transform-origin: center top;
    transform: rotateX(var(--bottomDegrees));
    transform-style: preserve-3d;
}
</style>
