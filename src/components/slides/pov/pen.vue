<template>
    <section class="pov-content pen-container" ref="content">
        <div class="container">
            <div class="container pen" ref="container">
                <div class="pen-intro-container">

            {{ isMobile.v }}
                    <p class="pen-intro">
                        <split-characters class="pen-intro-section" id="intro-1">De informatie omtrent een pen bestaat uit vele verschillende data, van visueel zichtbare datapunten, </split-characters>
                        <split-characters class="pen-intro-section" id="intro-2">zoals de kleur van de pen</split-characters>
                        <split-characters class="pen-intro-section" id="intro-3">het type pen</split-characters>
                        <split-characters class="pen-intro-section" id="intro-4">of dat de pen voor links- of rechtshandigen gemaakt is.</split-characters>
                        <split-characters class="pen-intro-section" id="intro-5">Maar ook minder expliciet zichtbare dingen behoren tot de (meta-)informatie omtrent een pen. Zo is er bijvoorbeeld een verband met papier, heeft de pen wellicht emotionele waarde, of gebruik je het voor een speciaal ritueel.</split-characters>
                    </p>

                    <svg class="svg-pen" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 340" xml:space="preserve">
                        <path id="active" class="vulpen" d="M36,136.9c-0.3-0.6-0.7-1-1.3-1.4c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.1-0.4-0.2-0.6L31.8,19.8 l-0.5-7.6c-0.1-2.3-1.1-4.5-2.8-6c-1.6-1.7-3.8-2.6-6.1-2.6h-0.2H22c-1.3,0-2.5,0.3-3.7,0.8l0,0c-1.5,0.7-2.8,1.7-3.7,3.1 c-0.9,1.3-1.5,2.9-1.6,4.6l-0.6,7.5l-4,114.8c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.2-0.2,0.3-0.4,0.4c-0.5,0.3-1,0.8-1.3,1.4 c-0.3,0.6-0.5,1.2-0.5,1.8c0,0.2-0.6,92.7-0.6,92.7c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1c0.3,0,0.6,0.1,0.8,0.3 c0.2,0.2,0.4,0.5,0.4,0.8l0.8,13c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2,0l0.1,0.1c0,0,0,0.1,0.1,0.1 c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.3,0.5c0.1,0.1,0.3,0.2,0.5,0.2l0.5,22.7l0.2,9.9 c0,0.7-0.1,1.4-0.4,2.1c-0.2,0.4-0.2,0.8-0.3,1.1c0,0.4,0.1,0.8,0.2,1.2l0.6,1.5c0.1,0.3,0.3,0.5,0.6,0.7c0.2,0.2,0.5,0.3,0.8,0.3 h3.2c0,0-0.1,2-0.2,12.3c-0.1,10.3-4,14.3-2.2,16.4c3.1,5,4.9,9.6,6,13.3c0.7,2.4,1.2,4.8,1.5,7.2v0.1c0,0,0,0,0.1,0.1H20h0.1 c0,0,0.1,0,0.1-0.1v-0.1c0.3-2.4,0.8-4.8,1.6-7.2c1.5-4.6,3.6-9.1,6.2-13.2c1.9-2.1-2-6.1-2-16.4c0.1-10.3,0-12.3,0-12.3h3.2 c0.3,0,0.6-0.1,0.8-0.3c0.3-0.2,0.4-0.4,0.6-0.7l0.6-1.4c0.2-0.4,0.2-0.8,0.2-1.2c0-0.4-0.1-0.8-0.2-1.2c-0.3-0.7-0.4-1.4-0.4-2.1 l0.3-9.9l0.8-22.7c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0-0.3c0-0.1,0-0.2-0.1-0.3 c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.2h0.1h0.1c0.1,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2l1-13c0-0.3,0.2-0.6,0.4-0.8 s0.5-0.3,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0.1-0.1,0.1-0.2l0.7-92.7C36.5,138.1,36.3,137.5,36,136.9z" />
                        <path class="balpen" d="M35,137.1c0-0.6-0.2-1.3-0.5-1.8c-0.3-0.6-0.7-1-1.3-1.4c-0.2-0.1-0.3-0.2-0.4-0.4 c-0.1-0.2-0.1-0.4-0.2-0.5L29.5,19.5l-1-13.9c0-0.1-0.1-0.3-0.2-0.4C28.1,5.1,28,5,28,4.9c-1.1-0.4-4.1-1.3-8.1-1.3 c-4.1,0-7,0.9-8.1,1.3l0,0l0,0C11.6,5,11.6,5,11.4,5.2c-0.2,0.1-0.2,0.2-0.2,0.4l-1,13.9L7.2,133c0,0.2-0.1,0.4-0.2,0.5 c-0.1,0.2-0.2,0.3-0.4,0.4c-0.5,0.3-1,0.8-1.3,1.4c-0.3,0.6-0.5,1.2-0.5,1.8c0,0.2,0.1,91.6,0.1,91.6c0,0.1,0,0.2,0.1,0.3 s0.2,0.1,0.3,0.1c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8l0.9,12.9c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.1,0,0.2,0l0.1,0.1c0,0,0,0.1,0.1,0.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.3,0.5 c0.1,0.1,0.3,0.2,0.5,0.2l0.6,22.5l0.4,3.6l0,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2s0,0.1,0,0.2s-0.1,0.1-0.1,0.1H10l0.4,3.9 c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2s0,0.1,0,0.2s-0.1,0.1-0.1,0.1s0,0-0.1,0l0.4,3.9c0.1,0,0.1,0,0.2,0.1 c0.1,0,0.1,0.1,0.1,0.2s0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1l4.7,44.3c0,0.2,0.1,0.4,0.2,0.5s0.3,0.2,0.5,0.2H17v1.9 c0,0.3,0,0.5,0.1,0.8l1.7,5.5c0.1,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.5,0.2,0.8,0.2c0.2,0,0.4,0,0.6-0.1c0.3-0.1,0.6-0.4,0.8-0.8 l1.7-5.5c0.1-0.3,0.1-0.5,0.1-0.8v-1.9h0.7c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4l4.6-44.3 c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2s0-0.1,0-0.2s0.1-0.1,0.1-0.1h0.1l0.4-3.9c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2 s0-0.1,0-0.2s0.1-0.1,0.1-0.1h0.1l0.4-3.9c-0.1,0-0.1,0-0.2-0.1c0-0.1-0.1-0.1-0.1-0.2s0-0.1,0.1-0.2s0.1-0.1,0.2-0.1l0,0l0.4-3.6 l0.6-22.5h0.1c0.2-0.1,0.6-0.3,0.7-0.6c0-0.1,0-0.3-0.1-0.4v-0.1v-0.1c0,0,0-0.1,0.1-0.1l0.1-0.1h0.1H32c0.1,0,0.1-0.1,0.1-0.1 c0-0.1,0.1-0.1,0.1-0.2l0.8-12.9c0-0.2,0.1-0.4,0.2-0.6s0.3-0.3,0.5-0.4c0.2-0.1,0.3-0.1,0.5-0.1c0.1,0,0.1,0,0.1,0 c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0.1-0.1,0.1-0.2C35,228.8,35,137.3,35,137.1z" />
                    </svg>
                </div>

                <!-- <div class="pen-illustration"> -->

                    
                    <div class="pen-text-container">
                        <p>
                            Jouw standpunt is daarom relevant bij de kennisvorming over een pen. 
                            Misschien vind jij de kleur zeer belangrijk, of vind je het idee van een pen met emotionele waarde onnozele onzin. 
                            Het standpunt in relatie tot de pen is dan ook voor de ene persoon anders dan de ander.
                        </p>
                        <p>
                            Zo ontstaat bij mij tijdens het schrijven van deze tekst over een pen, 
                            de correlatie met de film: the Wolf of Wallstreet. 
                            Deze film sluit af met een presentatie van de hoofdrolspeler Jordan Belfort, 
                            waarin hij de vraag: “kun je mij deze pen verkopen?” stelt aan zijn publiek.
                        </p>
                        <p>
                            In de film komt er geen antwoord op deze vraag, 
                            maar in een interview legt hij uit dat het erom gaat dat je als verkoper wilt weten 
                            wat de potentiële klant belangrijk vind, waar hecht deze waarde aan. 
                            Met andere woorden, wat is zijn of haar standpunt?
                        </p>
                    </div>

                    <div class="pen-text-footer">
                        <p>
                            Dit standpunt wordt gevormd door allerlei verschillende (meta-)informatie, 
                            maar het is vooral belangrijk om even uit te zoomen en je te realiseren dat wat een pen voor jou waard is, 
                            niets te maken heeft met de waarde van de pen zelf.
                        </p>
                    </div>
            </div>
        </div>
                    
                
        <div class="pen-slide-end">
            <FadeText @animationComplete="isCompleted">
                Simpel gezegd, wanneer je in je leven alleen maar blauwe pennen hebt gezien, 
                dan zul je een niet blauwe pen al snel als iets bijzonders zien. 
                Maar dat betekend dus niet dat niet-blauwe pennen op zichzelf bijzonder zijn…
            </FadeText>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import isMobiel from "@/stores/is-mobile"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FadeText from "@/components/fade-text.vue"
import SplitCharacters from "@/components/split-characters.vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "pov-pen",
    components: {
        FadeText, SplitCharacters
    },
    setup() {
        const isMobile = isMobiel()
        return { isMobile }
    },
    data: () => {
        return {
            timeline: null as null | gsap.core.Timeline,
        }
    },
    mounted() {
        if (_.isArray(this.$refs["intro-section"])) {
            _.each(this.$refs["intro-section"], section => {
                const text = section.innerText
                let res = ""
                text.split("").forEach((letter:string) => {
                    if (letter === " ") {
                        letter = "&nbsp;"
                    }
                    res += `<span class="character">${letter}</span>`
                })
                section.innerHTML = res
            })
        }

        // SET DEFAULTS
        gsap.set(".pen-intro-section ", {opacity: 0})
        ScrollTrigger.defaults({
            scroller: ".pov-page",
        })

        this.timeline = gsap.timeline({
            defaults: {
                duration: .96,
                ease: "power4.out"
            },
            scrollTrigger:{
                trigger: ".pen-intro-container", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                id:"intro",
                start: "top 50%",
            },
        })

        console.log(this.timeline)
        // Set timeline for intro section
        this.timeline.to("#intro-1 ", {
            opacity: 1,
            onStart: self => console.log("toggled, isActive:", self.isActive),
        })





        // this.timeline.to(".pen-intro-section", {
        //     duration: 2.24,
        //     ease: "elastic.out(1, 0.3)"
        // })
    },
    methods: {
        isCompleted() {
            this.$emit("completed")
        }
    }

})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.svg-pen {
    height: 50vh;
    transform-origin: center bottom;
    rotate: 24deg;
    fill: transparent;
    width: 100%;
    translate: -72px 0px;

    #active {
        stroke: #333;
        stroke-width: 1.6px;
    }
}

.pen-intro-container {
    display: flex;
    flex-direction: column-reverse;

    margin-top: -32px;
    
    @media (min-width: 768px) {
        margin-top: 0;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
}

.pen-intro {
    line-height: 2.4;
}


.svg-pen {
    margin-bottom: 16px;
}

.pen-intro-section {
    display: inline;
}

.pen-text-container {
    display: flex;
    flex-direction: column;

    p {
        margin: 64px 0 0;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 40px;
        text-align: justify;
        
        font-size: 14px;
        line-height: 24px;
    }
    @media (min-width: 1024px) {
        gap: 80px;
        font-size: 16px;
        line-height: 32px;
    }
}
.pen-text-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 32px 0 0;
    }

    @media (min-width: 768px) {
        margin: 48px;
        text-align: center;
    }

}


.pen-slide-end {
    display: flex;
    justify-content: center;
    height: 100vh;

    p {
        display: block;
        margin: auto;
        font-size: 18px;
        max-width: 80%;
        text-align: center;
    }
    
}
</style>
