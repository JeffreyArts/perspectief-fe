<template>
    <div class="fade-text-container" ref="container">
        <div class="fade-text">
            <split-characters><slot /></split-characters>
        </div>
        <perspective-button  @click="moveOn">Ga verder</perspective-button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import perspectiveButton from "@/components/perspective-button.vue"
import SplitCharacters from "@/components/split-characters.vue"

import _ from "lodash"


export default defineComponent({
    name: "fade-text",
    components: { perspectiveButton, SplitCharacters },
    data: () => {
        return {
            state: 0,
            hasFallen: false,
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    methods: {
        startAnimation() {
            const words = this.$el.querySelectorAll(".word")
            const rows = {} as Array<Array<HTMLElement>>
            
            words.forEach((w:HTMLElement, i:number) => {
                if (!_.isArray(rows[w.offsetTop])) {
                    rows[w.offsetTop] = []
                }
                rows[w.offsetTop].push(w)
            })

            let duration = 16
            let index = 0
            _.each(rows, (row, i) => {
                this.animateWord(0, row, duration + 1*index)
                index++
            })
        },
        moveOn() {
            if (this.hasFallen) {
                return
            }

            this.hasFallen = true
            let delay = 2048
            
            const povPage = document.querySelector(".pov-page")
            if (povPage) {
                gsap.to(povPage, {
                    scrollTop: povPage.scrollHeight,
                    duration: 1.28,
                    onComplete: () => {
                        povPage.classList.add("__disableScroll")
                        this.startAnimation()
                    }
                })
                delay+= 1280
            } else {
                this.startAnimation()
            }
            gsap.to(".perspective-button", {
                duration: .24,
                ease: "power4.out",
                opacity: 0,
                blur: 16,
                scale: 2.4,
                onComplete: () => {
                    setTimeout(() => {
                        this.$emit("animation-complete")
                    }, delay)
                }
            })
        },
        animateWord(index: number, array = [] as Array<HTMLElement>, duration = 16) {
            // check instance of htmlElement
            if (array && !(array[index] instanceof HTMLElement)) {
                return
            }
            const characters = array[index].querySelectorAll(".character")
            
            characters.forEach((c, i) => {
                setTimeout(() => {
                    this.animateCharacter(c)
                    gsap.to(characters, {
                        duration: .64,
                        ease: "power1.out",
                        x: -32 - Math.random()*32
                    })
                }, i*duration)
            })

            setTimeout(() => {
                const nextWord = array[index + 1]
                if (nextWord) {
                    this.animateWord(index + 1, array, duration)
                }
            }, (characters.length - 1)*duration)
            // let index = 0
        },
        animateCharacter(el:HTMLElement | Element) {
            const containerHeight = this.$el.parentElement.clientHeight
            const startPosition = el.getBoundingClientRect().y
            let offset = 144
            const margin = 24
            gsap.to(el, {
                duration: .64 + Math.random()*1,
                ease: "power1.out",
                y: containerHeight - offset - startPosition + Math.random()*margin*2 - margin,
                // x: Math.random()*margin - margin,
                // rotate: Math.random()*225 - 135,
                rotateX: 120,
                // rotateY: 0,
                rotateY: Math.random()*30 - 30,
                translate: 0,
            })
        }
    }

})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.fade-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 0 20px;
    font-size: 16px;
    line-height: 32px;
    
    .perspective-button {
        margin-top: 128px;
    }
    
    @media (min-width: 768px) {
        font-size: 22px;
        line-height: 42px;
    }
}

.fade-text {
    text-align: center;
    max-width: 800px;
    perspective: 128px;
    .word {
        transform: translateZ(0px);
        display: inline-block;
    }
}
// rotateX(45deg) rotateY(16deg) rotateZ(0deg)


.fade-text .character {
    display: inline-block;
}


</style>
