<template>
    <div class="pov-page-container" :class="[page.step === 7 ? '__noScroll' : '']" ref="container">
        <div class="pov-page" ref="scrollContainer">
            <div class="pov-intro-block" ref="intro-block">
                <p>Wanneer kennis de verzameling van informatie is welk betrekking heeft tot een onderwerp. 
                    Dan bepaalt jouw standpunt het perspectief waar vanuit je deze informatie tot je neemt. 
                    Dat klinkt een beetje vaag misschien. 
                    Dus laten we als voorbeeld een  <glitch
                        @glitchChange="glitchUpdate" 
                        :duration="glitchDuration" 
                        :delay="glitchDelay" 
                        :repeat="repeat" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="displayTypes"
                        :glitch-jumps="6" 
                        :glitch-offset="8" /> als onderwerp nemen, 
                        en aan de hand van een praktisch voorbeeld kijken hoe jouw standpunt/perceptie van invloed is op jouw waarneming van informatie, 
                        oftewel jouw vorming van kennis.</p>
            </div>
            <h1 class="pov-title">
                <glitch
                :duration="glitchDuration" 
                :delay="glitchDelay" 
                :repeat="repeat" 
                :opacity-duration="144" 
                :position-jumps="4" 
                :inputs="displayTypes"
                :glitch-jumps="6" 
                :glitch-offset="8" />
            </h1>


            <div ref="content" v-if="page.step <= 7">
                <tomaat v-if="selected == 0" @completed="nextPage" />
                <pen v-if="selected == 1" @completed="nextPage" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import Page from "@/stores/page"
import Pen from "@/components/slides/pov/pen.vue"
import Tomaat from "@/components/slides/pov/tomaat.vue"
import Glitch from "@/components/glitch.vue"
import _ from "lodash"


export default defineComponent({
    name: "pov-page",
    components: {
        Glitch, Pen, Tomaat
    },

    setup() {
        const page = Page()

        return { page }
    },
    data: () => {
        return {
            completed: false,
            selected: 0,
            scrollIndex: 0,
            glitchDuration:480,
            glitchDelay:3200,
            selectedType: null as null | string,
            repeat: 777,
            typeIndex: 0,
            // interval: 0 as number,
            types: [ "pen", "tomaat"],
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
        displayTypes() {
            let className = "text-blue"
            return _.map(this.types, (type) => {
                if (type.toLowerCase() == "pen"){ 
                    className = "text-blue"
                } else {
                    className = "text-red"
                }
                return `<span class="${className}">${type}</span>`
            })
        },
    },
    mounted() {
        // Start at the top of the page
        if (this.page.step < 7) {
            const scrollContainer = this.$refs.scrollContainer
            if (scrollContainer instanceof Element) {
                scrollContainer.scrollTop = 0
                scrollContainer.addEventListener("scroll", this.handleScroll)
            }
        }

        // if (!this.$router.currentRoute.value.fullPath.includes("gedeelde-perceptie")) {
            
        // }
        // this.allowScrollBack()
    },
    unmounted() {
        const scrollContainer = this.$refs.scrollContainer
        if (scrollContainer instanceof Element) {
            scrollContainer.removeEventListener("scroll", this.handleScroll)
        }
    },
    methods: {
        // allowScrollBack() {                 
        //     gsap.to(".pov-page", {
        //         scrollTrigger: {
        //             trigger:".pov-page",
        //             start: "16px 0",
        //             end: "16px 0",
        //             id:"tv",
        //             markers: true,
        //             onEnterBack: () => {
        //                 console.log("enter back")
        //                 // Add code here to make it possible to scroll back up to the introduction page
        //             },
        //         },
        //     })
        // },
        glitchUpdate(string: string)  {
            let match = string.match(new RegExp("<span[^>]*>(.*)<\/span>"))
            if (match && match[1]) {
                if (this.page.step < 7) {
                    this.selected = match[1].toLocaleLowerCase().includes("tomaat") ? 0 : 1
                }
            }
        },
        handleScroll(event: Event) {
            if (!event.target) {
                return
            }
            const targetElement = event.target
            const contentElement = this.$refs.content
            
            if (contentElement instanceof HTMLElement && targetElement instanceof HTMLElement) {
                if (targetElement.scrollTop > contentElement.offsetTop - window.innerHeight) {
                    this.repeat = 0
                    // this.selected = true
                    // clearInterval(this.interval)
                }
            }
            
            const scrollContainer = this.$refs.scrollContainer
            if (!(scrollContainer instanceof HTMLElement) || !(targetElement instanceof HTMLElement)) {
                return
            }
            
            if (targetElement.scrollTop > targetElement.scrollHeight / 4) {
                this.$emit("next", "pov-page-half")
                scrollContainer.removeEventListener("scroll", this.handleScroll)
            }
        },
        nextPage() {
            this.$emit("next", "pov-page")
        }
    }

})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.pov-page-container {
    transition: $transitionDefault;
    opacity: 1;

    &.__isHidden {
        opacity: 0;
    }
    &.__noScroll {
        overflow: hidden;
        pointer-events: none;
        .pov-page {
            overflow: hidden;
            pointer-events: none;
        }
    }
}
.pov-page {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    text-align: center;
    font-size: 14px;
    line-height: 24px;

    .text-red {
        color: #FF2B22;
    }
    .text-blue {
        color: $blue;
    }
    .glitch {
        // font-size: 1.08em;
    }

    &.__disableScroll {
        overflow: hidden;
    }

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 32px;
    }
}

.pov-intro-block {
    margin: 100vh auto calc(50vh - 128px)  auto;
    background-color: #fff;
    border:1px solid $black;
    padding: 36px 48px;
    max-width: 1000px;
    
    p {
        margin: 0;
    }
}

.pov-title {
    font-size: 48px;
    margin-bottom: 48px;
    text-transform: capitalize;
    
}

.pov-content {
    text-align: start;
    padding-top: 64px;
    overflow-x: hidden;

    > .container {
        background-color: #fff;
        overflow: hidden;
    }
}

</style>
