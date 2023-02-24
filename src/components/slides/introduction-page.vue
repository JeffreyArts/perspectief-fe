<template>
    <div class="introduction-page-container" ref="container">
        <div class="introduction-page">
            <div class="intro-blocks-bg" ref="intro-blocks-bg">
                <div class="intro-block-bg" 
                    ref="intro-block-bg"
                    v-for="(paragraph, index) in story"
                    :key="index"><p v-html="paragraph"></p></div>
            </div>
            <div class="intro-blocks" ref="intro-blocks" v-if="!completed">
                <div class="intro-block" 
                    ref="intro-block"
                    v-for="(paragraph, index) in story"
                    :key="index"
                    :class="{
                        '__isActive': scrollIndex-1 == index,
                    }"
                    v-html="paragraph" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"

import _ from "lodash"


export default defineComponent({
    name: "introduction-page",
    components: {
        
    },
    data: () => {
        return {
            story: [
                `In een wereld waarin er meer informatie wordt verspreid per minuut dan dat je in een leven tot je kunt nemen.
                Is het niet verwonderlijk dat niet alle informatie even waardevol is. 
                Ja, ik kan je vertellen dat wombats de enige dieren ter wereld zijn die vierkante drollen poepen.
                Of dat de afstand van onze planeet tot de maan minder dan 10x de omtrek van de aarde is.
                Maar de kans is groot dat geen van deze informatie voor jou van grote waarde is.`
                ,
                `Als mens ben ik geïnteresseerd geraakt in wat het is dat iets waardevol maakt.
                Binnen dit werk wil ik het daarbij hebben over een specifiek onderwerp: <strong>informatie</strong>.
                Informatie — dan wel kennis — is iets waar we sinds de opkomst van digitale technologie een overschot aan hebben.
                Het internet vormt daarbij de marktplaats voor het uitwisselen van deze (digitale) informatie.
                De vraag komt voort uit de wens om bepaalde dingen te willen weten, en het aanbod vormt de informatie die we via websites en andere digitale media tot ons nemen.`
                ,
                `Er zijn vele partijen die in deze markt opereren, 
                en er is een nog groter aanbod van individuen die bij deze partijen een rol vervullen. 
                Ieder bericht dat je op een sociaal medium deelt, draagt bij aan de databank van dit platform.
                Hoe groter de hoeveelheid informatie die deze partij bezit, hoe waardevoller deze partij wordt.`
                ,
                `De komende 15 minuten wil ik je graag meenemen op een ontdekkingsreis naar de waardebepaling van deze informatie. 
                Want het hebben van veel informatie staat niet gelijk aan het hebben van waardevolle informatie.
                Wat maakt informatie immers goed of slecht?
                Waarom vinden “we” het een belangrijker dan het ander?
                En hoe wordt deze informatie <s>gᷟeͥbᷤ</s>ruikt?`
            ],
            completed: false,
            scrollIndex: 0,
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
    },
    mounted() {
        if (this.$refs["intro-blocks"] instanceof Element) {
            this.$refs["intro-blocks"].addEventListener("scroll", this.handleScroll)
        }
        // this.addBGblock()
        gsap.to(".intro-block:first-child", {
            x: 0,
            opacity: 1,
            duration: .8,
            ease: "power2.out",
        })
    },
    unmounted() {
        if (this.$refs["intro-blocks"] instanceof Element) {
            this.$refs["intro-blocks"].removeEventListener("scroll", this.handleScroll)
        }
    },
    methods: {
        handleScroll() {
            const introBlocks = this.$refs["intro-blocks"] as HTMLElement
            let currentBlock, nextBlock = undefined as HTMLElement | undefined
            if (this.$refs["intro-block"] instanceof Array) {
                currentBlock = this.$refs["intro-block"][this.scrollIndex] as HTMLElement
                nextBlock = this.$refs["intro-block"][this.scrollIndex +1] as HTMLElement
            }

            if (this.scrollIndex >= this.story.length) {
                this.nextPage()
                this.completed = true
                introBlocks.removeEventListener("scroll", this.handleScroll)
                return
            }

            if (!currentBlock ) {
                return
            }
            
            const scrollOffset = currentBlock.offsetTop + currentBlock.scrollHeight
            const marginTop = parseInt((window.getComputedStyle( currentBlock) as CSSStyleDeclaration)["margin-top"].replace("px"),10)

            if (nextBlock) {
                if (nextBlock.offsetTop < introBlocks.scrollTop + scrollOffset + 144) {
                    nextBlock.classList.add("__isActive")
                } else {
                    nextBlock.classList.remove("__isActive")
                }
            }

            if (introBlocks.scrollTop >  scrollOffset) {
                this.scrollIndex++
                this.addBGblock()
            } else if (introBlocks.scrollTop < currentBlock.offsetTop - marginTop) {
                this.scrollIndex--
            }
        },
        addBGblock() {    
            let bottom = 0
            switch(this.scrollIndex) {
            case 1: bottom = 72; break
            case 2: bottom = 64; break
            case 3: bottom = 56; break
            case 4: bottom = 48; break
            }

            let currentBlock = undefined as HTMLElement | undefined
            if (this.$refs["intro-block-bg"] instanceof Array) {
                currentBlock = this.$refs["intro-block-bg"][this.scrollIndex - 1]
            }

            if (!currentBlock) {
                return
            }

            gsap.set(currentBlock,  {transformStyle:"preserve-3d"})
            gsap.timeline()
                .to(currentBlock, {
                    bottom: bottom,
                    scale: 0.5,
                    duration: 1.28,
                    ease: "bounce.out"
                })
                .to(currentBlock, {
                    duration: 1.28,
                    rotationX: 8,
                    delay: -0.08,
                    ease: "bounce.out"
                })
        },
        nextPage() {
            this.$emit("next", "introduction-page")
        }
    }

})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.introduction-page {
    height: 100vh;
}

.intro-blocks {
    height: 100%;
    overflow: auto;
    display: block;
    position: relative;
    z-index: 1;
}

.intro-block {
    opacity: 0;
    transition: .72s ease filter,.72s ease opacity;
    filter:blur(16px);
    
    &.__isActive {
        opacity: 1;
        filter:blur(0);
    }
    
    &:first-child {
        filter:blur(0);
        translate: -100% 0;
    }
}

.intro-block,
.intro-block-bg {
    background-color: #fff;
    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
    padding: 48px;
    font-size: 16px;
    line-height: 32px;
    margin: 160px 0;
    width: 100%;
    // transition: $transitionDefault;
    
    &:last-child {
        margin-bottom: calc(100vh + 16px);
    }
}

.intro-blocks-bg {
    perspective: 1000px;
    position: absolute;
    top: 0;
    bottom: 96px;
    left: 0;
    right: 0;
}

.intro-block-bg {
    background-color: #eee;
    border: 1px solid $grey;
    color: #444;
    position: absolute;
    transform: scale(0.8);
    bottom: 128px;
    margin: 0 !important;
    transform-origin: center bottom;
    background-image: linear-gradient(0deg, rgba(16,16,16,.08),  transparent);

    &:nth-child(1) {
        // transform:rotate3d(2.4,0.8,0, 16deg) scale(0.5);
        bottom: 100vh;
        // bottom: 72px;
        left: -128px;
    }
    &:nth-child(2) {
        // transform:rotate3d(2.4,0.8,0, 16deg) scale(0.5);
        // bottom: 48px;
        bottom: 100vh;
        left: 0px;
    }
    &:nth-child(3) {
        // transform:rotate3d(2.4,0.8,0, 16deg) scale(0.5);
        bottom: 100vh;
        // bottom: 72px;
        right: 64px;
    }
    &:nth-child(4) {
        bottom: 100vh;
        // transform:rotate3d(2.4,0.8,0, 16deg) scale(0.5);
        // bottom: 58px;
        right: -128px;
    }

    p {
        filter: blur(1px);
    }
}

@media (min-width: 768px) {
    .intro-block,
    .intro-block-bg {
        &:nth-child(1) {
            border-right: 1px solid $black;
            width: 75%;
        }
        &:nth-child(2) {
            border-left: 1px solid $black;
            width: 80%;
            margin-left: 20%;
        }
        &:nth-child(3) {
            border-right: 1px solid $black;
            width: 60%;
        }
        &:nth-child(4) {
            border-left: 1px solid $black;
            width: 66%;
            margin-left: 34%;
        }
    }
}
</style>
