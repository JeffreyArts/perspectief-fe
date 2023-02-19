<template>
    <div class="fade-text-container" ref="container">
        <div class="fade-text" v-if="data">
            <span class="word" v-for="word, ii in words" :key="ii">
                <span class="character" v-for="c, i in word" :key="i">
                    <span v-if="c !== ' '">{{ c }}</span>
                </span>
                <span>&nbsp;</span>
            </span>
        </div>
        <perspective-button  @click="moveOn">Ga verder</perspective-button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import perspectiveButton from "./perspective-button.vue"
import _ from "lodash"


export default defineComponent({
    name: "fade-text",
    components: { perspectiveButton },
    props: {
        data: {
            type: String,
            required: true,
        }
    },
    data: () => {
        return {
            state: 0,
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
        words() {
            return this.data.split(" ")
        }
    },
    mounted() {
        
    },
    methods: {
        startAnimation() {
            const words = this.$el.querySelectorAll(".word")
            const rows = {} as Array<Array<HTMLElement>>
            
            words.forEach((w, i) => {
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
            this.startAnimation()
            gsap.to(".perspective-button", {
                duration: .24,
                ease: "power4.out",
                opacity: 0,
                blur: 16,
                scale: 2.4,
                onComplete: () => {
                    setTimeout(() => {
                        this.$emit("animation-complete")
                    }, 2048)
                }
            })
        },
        animateWord(index: number, array = [], duration = 16) {
            // check instance of htmlElement
            if (array && !array[index] instanceof HTMLElement) {
                return
            }
            const characters = array[index].querySelectorAll(".character")
            
            characters.forEach((c, i) => {
                setTimeout(() => {
                    this.animateCharacter(c as HTMLElement)
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
        animateCharacter(el:HTMLElement) {
            const containerHeight = this.$el.parentElement.clientHeight
            const startPosition = el.parentElement.parentElement.offsetTop + el.offsetTop
            let offset = 160
            const margin = 24
            gsap.to(el, {
                duration: .64 + Math.random()*1,
                ease: "power1.out",
                y: containerHeight - offset - startPosition + Math.random()*margin*2 - margin + el.offsetTop,
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

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.fade-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    .perspective-button {
        margin-top: 128px;
    }
}

.fade-text {
    text-align: center;
    max-width: 800px;
    perspective: 128px;
    .word {
        display: inline-block;
    }
}
// rotateX(45deg) rotateY(16deg) rotateZ(0deg)


.fade-text .character {
    display: inline-block;
}


</style>
