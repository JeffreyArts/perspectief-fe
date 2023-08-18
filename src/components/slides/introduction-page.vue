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
                    :id="`intro-block-${index}`"
                    v-for="(paragraph, index) in story"
                    :key="index"
                    v-html="paragraph" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
                Ja, ik kan je vertellen dat het gewicht van een gemiddelde wolk zo'n 500.000 kg is.
                Of dat de afstand van onze planeet tot de maan minder dan 10 keer de omtrek van de aarde is.
                Maar de kans is groot dat geen van deze informatie van grote waarde is voor jou.`
                ,
                `Als persoon ben ik geïnteresseerd geraakt in wat het is dat iets waardevol maakt. 
                Daarbij wil ik het hebben over een specifiek onderwerp:  <strong>informatie</strong>.
                Informatie is iets waar we sinds de opkomst van digitale technologie een overschot aan lijken te hebben.
                Het internet vormt daarbij de marktplaats voor het uitwisselen van deze (digitale) informatie. 
                De vraag komt voort uit de wens om bepaalde dingen te willen weten,
                en het aanbod vormt de informatie die we via haar websites en andere digitale producten tot ons nemen`
                ,
                `Er zijn vele partijen die in deze markt opereren, en er is een nog groter aanbod van individuen die bij deze partijen een rol vervullen.
                Ieder bericht dat je deelt via een partij - zoals een social media platform - draagt bij aan de databank van dat platform.  
                Hoe groter de hoeveelheid informatie die deze partij bezit, hoe waardevoller deze partij wordt.`
                ,
                `De komende 20 minuten wil ik je graag meenemen op een ontdekkingsreis door de waardebepaling van deze informatie. 
                Want het hebben van veel informatie staat niet gelijk aan het hebben van waardevolle informatie. 
                Wat maakt informatie immers goed of slecht? Waarom vinden “we” het één belangrijker dan het ander? 
                En hoe wordt deze stroom van kennis <s><span class="__specialM">g</span><span class="__specialI">e</span><span class="__specialS">b</span></s>ruikt?`
            ],
            completed: false,
            scrollIndex: 0,
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            scroller: ".intro-blocks"
        })

        if (document.querySelector(".pov-page-container")) {
            gsap.set(".introduction-page-container", {opacity:0})
        }
        
        gsap.to(".intro-block", {
            opacity: 1,
            duration: .72,
            ease: "power2.out",
            stagger: .32,
            delay: .64
        })
        gsap.to(".intro-block", {
            blur: 0,
            duration: .96,
            ease: "power2.out",
            stagger: .32,
            delay: .64
        })
        this.handleScroll()
    },
    methods: {
        handleScroll() {

            _.each(this.story, (story, index) => {
                let el = null as null | HTMLElement
                if (this.$refs["intro-block"]) {
                    el = this.$refs["intro-block"][index] as HTMLElement
                }
                
                if (!el) {
                    return
                }
                

                const odd = (index + 1) %2
                let x = el.clientWidth + "px"
                if (odd) {
                    x = "-100%"
                } 

                gsap.set(`#intro-block-${index}`,  {
                    x: x
                })

                gsap.to(`#intro-block-${index}`,  {
                    ease: "Linear.easeNone",
                    scrollTrigger: {
                        trigger:`#intro-block-${index}`,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom+=128 bottom",
                        id:"block",
                        // markers: true,
                    },
                    x: odd ? -1 : 1,
                    blur: 0,
                    scale:1,
                    backgroundColor: "#fff",
                    color: "#111",
                })

                
                gsap.to(`#intro-block-${index}`,  {
                    ease: "Linear.easeNone",
                    scrollTrigger: {
                        trigger:`#intro-block-${index}`,
                        scrub: true,
                        start: "top top",
                        end: "bottom top",
                        id:"block",
                        // markers: true,
                    },
                    onComplete: () => {
                        this.scrollIndex = index+1
                        this.addBGblock()
                        if (this.scrollIndex >= this.story.length) {
                            this.nextPage()
                            this.completed = true
                        }
                    },
                    scale:0.8,
                    backgroundColor: "#eee",
                    color: "#ccc",

                })
            })
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
    .__specialI,
    .__specialS,
    .__specialM {
        position: relative;
        &:after {
            position: absolute;
            font-size: .5em;
            top:-1.4em;
            left: .5em;
        }
    }
    .__specialM:after {content:"m";}
    .__specialI:after {content:"i"; left: .64em;}
    .__specialS:after {content:"s"; top: -1.4em;}
}

.intro-blocks {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: block;
    position: relative;
    z-index: 1;
}

.intro-block {
    opacity: 0;
    filter:blur(16px);
}

.intro-block,
.intro-block-bg {
    background-color: #fff;
    border: 1px solid $black;
    padding: 48px 24px;
    font-size: 14px;
    line-height: 32px;
    margin: 160px 0;
    width: 100%;
    
    &:last-child {
        margin-bottom: calc(100vh + 16px);
    }
    @media all and (min-width: 320px) {
        padding: 48px;
        font-size: 16px;
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
        bottom: 100vh;
        z-index: 100;
        left: -128px;
    }
    &:nth-child(2) {
        z-index: 200;
        bottom: 100vh;
        left: 0px;
        transform: translateZ(8px);
    }
    &:nth-child(3) {
        bottom: 100vh;
        right: 64px;
        z-index: 300;
        transform: translateZ(16px);
    }
    &:nth-child(4) {
        bottom: 100vh;
        right: -128px;
        z-index: 400;
        transform: translateZ(24px);
    }

    p {
        filter: blur(1px);
    }
}

@media (min-width: 768px) {
    .intro-block,
    .intro-block-bg {
        &:nth-child(1) {
            width: 75%;
        }
        &:nth-child(2) {
            width: 80%;
            margin-left: 20%;
        }
        &:nth-child(3) {
            width: 60%;
        }
        &:nth-child(4) {
            width: 66%;
            margin-left: 34%;
        }
    }
}

@media (min-width: 1440px) {
    .intro-block {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 220px;
        margin-top: 220px;
    }
}
</style>
