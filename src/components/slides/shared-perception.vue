<template>
    <div class="shared-perception-container" ref="container" :class="[allowScroll ? '__allowScroll' : '']" @click="nextCell">
        <div class="scene">
            <div class="carousel" ref="carousel">
                <div class="carousel-cell card" ref="cell">
                    <p>
                        Dit effect wordt versterk wanneer we de standpunten van andere mensen erbij betrekken.

                    </p>
                    <span class="carousel-cell-mobile" v-if="!hasClicked">
                        Klik om verder te lezen
                    </span>
                </div>
                <div class="carousel-cell card" ref="cell">
                    <p>
                        Hiermee ontstaat er namelijk een gedeelde perceptie, en daarop volgend;
                    </p>
                </div>
                <div class="carousel-cell card" ref="cell">
                    <p>
                        Een gedeeld standpunt van een waargenomen waarheid, dan wel realiteit.
                    </p>
                </div>
                <div class="carousel-cell card" ref="cell">
                    <p>
                        Wanneer iedereen volgens hetzelfde kader de waarde van een <glitch 
                        :duration="480" 
                        :delay="2400" 
                        :repeat="777" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="['pen', 'tomaat']"
                        :glitch-jumps="6" 
                        :glitch-offset="8" /> definieert.
                        Ontstaat er een collectieve perceptie, en daaropvolgend een collectieve definitie van waarde voor een <glitch 
                        :duration="480" 
                        :delay="3200" 
                        :repeat="777" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="['pen', 'tomaat']"
                        :glitch-jumps="6" 
                        :glitch-offset="8" />.
                    </p>

                    <span class="carousel-cell-mobile" v-if="!hasScrolled">
                        Scroll om verder te lezen
                    </span>
                </div>
                <div class="side side-right"></div>
                <div class="side side-left"></div>
            </div>
        </div>


        <div class="slide" id="slide-1">
            <p class="card">
                Deze waarnemingen vormen onze waargenomen realiteit. 
                In ons bewuste brein zijn we echter niet in staat om onderscheid te maken tussen onze waargenomen realiteit en de echte realiteit. 
                De echte realiteit komt via onze <glitch 
                        :duration="480" 
                        :delay="3200" 
                        :repeat="777" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="['zintuigen', 'sensoren']"
                        :glitch-jumps="6" 
                        :glitch-offset="8" /> binnen, waarop onze hersenen deze datastroom vervolgens verwerken. 
                Dit is veelal een passief proces. 
                We kunnen weliswaar onze waarnemingen betwisten, maar met de overvloed aan informatie waar we iedere dag mee geconfronteerd worden 
                is het onleefbaar om iedere individuele waarneming actief te betwisten. 
            </p>
        </div>

        <div class="squares" id="slide-2">

            <div class="square" id="square-1">
                <div class="card">
                    <p>
                        Omdat ons standpunt invloed heeft op onze waarneming
                    </p>
                </div>
            </div>
            
            <div class="square" id="square-2">
                <div class="card">
                    <p>
                        kunnen organisaties invloed uitoefenen op onze waargenomen realiteit.
                    </p>
                </div>
            </div>
            
            <div class="square" id="square-3">
                <div class="card">
                    <p>
                        Een standpunt staat immers niet vast, en kan verschuiven.
                    </p>
                </div>
            </div>
        </div>



        <div class="cross" id="slide-3">
            <div class="cross-shaft"></div>
            <div class="cross-text">
                In het verleden zorgde bijvoorbeeld de kerk via lezingen en drukwerk voor eenzelfde perceptie - danwel waarheid - voor een collectieve groep mensen
            </div>

            <div class="television-slide" :class="[tvSticky ? '__isSticky' : '']">
                <div class="television-container">
                    <div class="television-screen">
                        <div class="television-screen-content">

                            <div class="first-section"  :class="[tvSection == 1 ? '__isVisible' : '']">
                                <p>
                                    In de 20e eeuw namen massa-media zoals radio &amp; televisie deze rol gestaag over
                                </p>
                            </div>
                            
                            <div class="second-section" :class="[tvSection == 2 ? '__isVisible' : '']">
                                <p>
                                    Het wereldwijde web heeft namelijk een eigenschap waardoor het zichzelf fundamenteel onderscheid van de eerder genoemde media. 
                                    Het biedt namelijk de mogelijkheid voor twee-richting verkeer van informatie. 
                                    De ontvanger van informatie kan via dit medium ook als zender van de informatie fungeren. 
                                    In het begin van het web was dit uitsluitend mogelijk via het coderen (en consumeren) van webpagina’s.
                                </p>
                                <p>
                                    Maar naarmate de technologie zich verder ontwikkelde,
                                    ontstonden er diverse alternatieven om deze technische drempels te verlagen voor de internetgebruikers 
                                    om deel te kunnen nemen aan dit netwerk van informatie. 
                                    Waar je in de begindagen van het internet, PHP & HTML moest leren om niet als consument van informatie, 
                                    maar als publicist van informatie deel te kunnen nemen aan dit netwerk van informatie. 
                                    Zijn er tegenwoordig talloze platformen die deze complexiteit hebben weg genomen.
                                </p>
                                <p>
                                    Doordat deze drempel zo laag is geworden, is de groei van deelnemers aan dit informatie netwerk ontzettend toegenomen. 
                                    Dit leidt tot een groei van diversiteit in collectieve standpunten. 
                                    Via radio of televisie kun je bijvoorbeeld minder dan 100 verschillende zenders consumeren. 
                                    Waarbij de informatie die het verspreid, afkomstig is van een nog kleiner aantal verschillende standpunten.
                                    Natuurlijk zijn er altijd collectieven geweest met hun eigen unieke standpunten buiten deze media. 
                                    Maar met het internet kan iedereen hun eigen perceptie delen met een vergelijkbaar bereik waardoor er een wildgroei aan collectieve waarheden ontstaat.
                                </p>

                                <p>
                                    Websites die deze unieke eigenschap van het internet optimaal benutten zijn de sociale media platformen. 
                                    Deze websites faciliteren de communicatie van en naar hun gebruikers, en hoewel er op deze platformen een hoop curatie plaatsvindt. 
                                    Bieden ze nog altijd de ruimte voor een diverser spectrum aan standpunten dan dat de eerdere media dit (konden) aanbieden.
                                </p>

                                <form class="form" @submit.prevent="submitForm">
                                    <input type="text" v-model="formInput" />
                                    <button type="submit">Verstuur <span>&gt;</span></button>
                                </form> 
                            </div>

                            <div class="third-section" :class="[tvSection == 3 ? '__isVisible' : '']">
                                <div v-for="(m, i) in messages" :key="i" class="message">
                                    <span class="message-date">{{ m.date }}</span>
                                    <span class="message-text">{{ m.message }}</span>
                                </div>
                            </div>

                        </div>
                        <static-noise class="television-screen-bg"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="balls-container" id="slide-4">
            <div class="balls">
                <div class="ball" id="ball-1">
                    Wanneer iedereen vanuit eenzelfde perspectief naar een zelfde onderwerp kijkt
                </div>
                <div class="ball __isSmall" id="ball-2">
                    Zal iedereen tot een zelfde realiteit uitkomen
                </div>
                <div class="ball" id="ball-3">
                    De opkomst van het internet en de digitale media
                </div>
                <div class="ball" id="ball-4">
                    Zorgt echter voor een shift in deze vorm van realiteitsvorming
                </div>
            </div>
        </div>
        

        <div class="slotstuk" :class="[slotstuk ? '__isActive' : '']" id="slide-5">
            <div class="slot-stuk-handle" @click="slotstukEnter">
                Ga verder &gt;
            </div>

            <div class="slot-stuk-content-container">
                <div class="slot-stuk-content">
                    <div class="slot-stuk-content-center">
                        <p>
                            Het wereldwijde web heeft namelijk een eigenschap waarmee het zichzelf fundamenteel onderscheid van de eerder genoemde media. 
                            Het biedt namelijk de mogelijkheid voor twee-richting verkeer van informatie. 
                            De ontvanger van informatie kan via dit medium namelijk ook als de zender van informatie fungeren. 
                            In het begin van het internet moest de zender veel technologische kennis hebben om dit te kunnen doen. 
                            Maar naarmate het web zich verder ontwikkelde, zijn de drempels zo laag geworden dat praktisch iedereen die informatie kan ontvangen via dit netwerk, dit ook verzenden. 
                        </p>
                        <p>
                            Doordat deze drempel zo laag is geworden is de groei van deelnemers aan dit netwerk sterk toegenomen, 
                            en daarmee ook de diversiteit in <glitch 
                            :duration="480" 
                            :delay="3200" 
                            :repeat="777" 
                            :opacity-duration="144" 
                            :position-jumps="4" 
                            :inputs="['verschillende', 'afwijkende']"
                            :glitch-jumps="6" 
                            :glitch-offset="8" /> standpunten. 
                            Hiermee ontstaan er meer collectieve waarheden dan dat dit in het begin van de 20e eeuw het geval was.
                        </p>
                    </div>
                    
                    <div class="slot-stuk-content-button-container">
                        <button class="slot-stuk-content-button" @click="closeSharedPerception">
                            Volgende stap
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="perception-chevron" d="M24.3819 1.37294C26.2245 -0.457646 29.2119 -0.457646 31.0545 1.37294L80 50L31.0545 98.6271C29.2119 100.458 26.2245 100.458 24.3819 98.6271C22.5394 96.7965 22.5394 93.8285 24.3819 91.9979L66.6549 50L24.3819 8.00206C22.5394 6.17148 22.5394 3.20352 24.3819 1.37294Z" fill="black"/>
                                <rect id="perception-square" width="100" height="100"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import Glitch from "@/components/glitch.vue"
import StaticNoise from "@/components/static-noise.vue"
import dayjs from "dayjs"
import _ from "lodash"

export default defineComponent({
    name: "shared-perception",
    components: {
        Glitch, StaticNoise
    },
    data: () => {
        return {
            gTimeline: null as null | gsap.core.Timeline,
            selectedIndex: 0,
            radius: 1,
            hasClicked: false,
            hasScrolled: false, 
            slotstuk: false, 
            tvSticky: false, 
            allowScroll: false,
            tvSection: 1,
            formInput: "",
            buttonHover: null as null | gsap.core.Tween,
            messages: [] as Array<{message: string, date: string}>,
            formSubmitted: false,
            animations: [] as Array<gsap.core.Tween | gsap.core.Timeline>,
        }
    },
    computed: {
    },
    unmounted() {
        window.removeEventListener("resize", this.positionCarouselSide)
        this.cancelAnimations()
    },
    mounted() {
        window.addEventListener("resize", this.positionCarouselSide)
        this.positionCarouselSide()
        gsap.registerPlugin(MorphSVGPlugin)
        gsap.registerPlugin(ScrollToPlugin)
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            scroller: ".shared-perception-container"
        })
        this.getMessages()
        this.carouselInitialisation()
        setTimeout(() => {
            this.setupAnimations()
        })
    },
    methods: {
        getMessages() {
            const limit = 64
            fetch(`${import.meta.env.VITE_REST_API}/perceptie-messages?_limit=${limit}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${import.meta.env.VITE_REST_AUTH_TOKEN}`,
                },
                
            })  .then(response => response.json())
                .then(data => {
                    this.messages = _.map(data.data, (d) => {
                        return {
                            date: dayjs(d.attributes.createdAt).format("DD/MM/YYYY | HH:mm"),
                            message: d.attributes.text
                        }
                    })
                })

    
        },
        positionCarouselSide() {
            if (this.$el.querySelector(".carousel-cell")) {
                gsap.set(".side-right", {
                    translateX: this.$el.querySelector(".carousel-cell").clientWidth - 3,
                })
            }
        },
        submitForm() {

            
            if (this.formSubmitted) {
                return
            }
            this.formSubmitted = true

            // Add message to central db
            document.querySelector(".pov-page-container")?.classList.add("__isHidden")
            
            if (this.formInput)  {
                fetch(`${import.meta.env.VITE_REST_API}/perceptie-messages`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_REST_AUTH_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        data: {
                            text: this.formInput
                        }
                    })
                })
            }
                   
            // Animate to the next section in the mean time
            gsap.to(".second-section", {
                duration: .8,
                opacity: 0,
                ease: "power4.inOut",
                onComplete: () => {
                    this.tvSection = 3
                    gsap.fromTo(".third-section", {
                        opacity: 0
                    }, {
                        duration: .8,
                        opacity: 1,
                        ease: "power4.inOut",
                    })
                }
            })

            setTimeout(() => {
                if (!this.formInput) {
                    this.formInput = "<de leegte>"
                }
                // add message to messages
                this.messages.unshift({
                    date: dayjs().format("DD/MM/YYYY | HH:mm"),
                    message: this.formInput
                })
            }, 500)

            setTimeout(() => {
                this.slotstuk = true
                gsap.fromTo(".slot-stuk-handle", {
                    xPercent: 100
                }, {
                    xPercent: 0,
                    ease: "power4.inOut",
                    duration: 1.6,
                })
            }, 1600)
        },
        closeSharedPerception() {
            const animation1 = gsap.to("#perception-chevron", {
                morphSVG: {shape: "#perception-square"}, 
                duration: .72,
                opacity: 0,
                ease: "bounce.out",
            })

            const animation2 = gsap.to("#slide-3", {
                duration: .32,
                opacity: 0,
                ease: "power4.inOut",
            })

            const animation3 = gsap.to(".slot-stuk-content-button", {
                opacity: 0,
                duration: .8,
                ease: "rough({ strength: 1, points: 10, template: bounce.inOut, taper: none, randomize: false, clamp: false })",
            })

            const animation4 = gsap.to(".slot-stuk-content-container", {
                color: "#fff",
                duration: 0.8,
                ease: "rough({ strength: 1, points: 32, template: bounce.inOut, taper: none, randomize: false, clamp: false })",
                onComplete: () => {
                    // set overflow hidden on ".slot-stuk-content"
                    const content = this.$el.querySelector(".slot-stuk-content") as HTMLElement
                    content.style.padding = "0"
                    content.style.overflow = "hidden"
                }
            })

            const animation5 = gsap.to(".slot-stuk-content-container", {
                height: 0,
                delay: 0.96,
                top: "50%",
                opacity: 0,
                duration: 1.28,
                ease: "power4.inOut",
                onComplete: () => {
                    this.$emit("next", "shared-perception")
                }
            })

            this.animations.push(animation1, animation2, animation3, animation4, animation5)
        },
        slotstukEnter() {
            const content = this.$el.querySelector(".slot-stuk-content-container") as HTMLElement
            const handle = this.$el.querySelector(".slot-stuk-handle") as HTMLElement
            const ease = "back.inOut(2.56)"

            const animation1 = gsap.to(".slot-stuk-handle", {
                duration: 1.28,
                ease: ease,
                x: -content.offsetLeft + 32,
            })

            const animation2 = gsap.to(".slot-stuk-handle", {
                duration: .64,
                delay:.64,
                width: 0,
                // ease:"",
            })

            const animation3 = gsap.to(".slot-stuk-content-container", {
                duration: 1.28,
                ease: ease,
                x: -content.offsetLeft + 32
            })

            const animation4 = gsap.timeline().to(".television-container", {
                height: window.innerHeight - 256,
                ease: ease,
                duration: 1.28,
                onComplete: () => {
                    gsap.to(".television-container", {opacity: 0, duration: .32})
                }
            })

            this.animations.push(animation1, animation2, animation3, animation4)
        },
        tvSlide() {
            gsap.set(".television-screen-bg", {
                opacity: 0,
            })

            const animation1 = gsap.to(".television-screen-content", {
                opacity: 0,
                scrollTrigger: {
                    trigger:".balls",
                    scrub: true,
                    start: "10% bottom",
                    end: "30% bottom",
                    id:"tv",
                    // markers: true,
                }
            })
            const animation2 =  gsap.to(".television-screen-bg", {
                opacity: 1,
                immediateRender: false,
                scrollTrigger: {
                    trigger:".balls",
                    scrub: true,
                    start: "15% bottom",
                    end: "40% bottom",
                    id:"tv",
                    // markers: true,
                },
            })

            const animation3 = gsap.to(".television-screen-content", {
                opacity: 0.9,
                backgroundColor: "#111",
                color: "transparent",
                immediateRender: false,
                scrollTrigger: {
                    trigger:".balls",
                    scrub: true,
                    start: "40% bottom",
                    end: "60% bottom",
                    id:"tv",
                    // markers: true,
                },
                onComplete: () => {
                    animation1.kill()
                    animation2.kill()
                    animation3.kill()
                    gsap.to(".television-screen-content", {
                        opacity: 0.9,
                        backgroundColor: "#111",
                        color: "transparent",
                    })
                },
            })

            const animation4 = gsap.to(".television-slide",  {
                ease: "Linear.easeNone",
                scrollTrigger: {
                    trigger:".cross-shaft",
                    scrub: true,
                    start: "bottom bottom-=124px",
                    end: "bottom bottom-=124px",
                    id:"tv",
                    // markers: true,
                },
                onComplete: () => {
                    this.tvSticky = true
                },
                onReverseComplete: () => {
                    this.tvSticky = false
                },
            })


            this.animations.push(animation1, animation2, animation3, animation4)
        },
        slide4() {
            const balls = this.$el.querySelector(".balls")
            const ball1 = this.$el.querySelector("#ball-1")
            const ball2 = this.$el.querySelector("#ball-2")
            const ball3 = this.$el.querySelector("#ball-3")
            const ball4 = this.$el.querySelector("#ball-4")
            const parent = balls.getBoundingClientRect()
            const slideInPixels = 64
            
            // y+slideInPixels is required for slide up animation
            gsap.set("#ball-1", {
                x:  32 - ball1.clientWidth,
                y: 0 + slideInPixels,
                scale: 0.25,
                blur: 128,
            })

            gsap.set("#ball-2", {
                x: parent.width - 32 + ball2.clientWidth,
                scale: 0.25,
                y: -32 + slideInPixels,
                blur: 128
            })
            
            gsap.set("#ball-3", {
                x: 32 - ball3.clientWidth,
                scale: 0.25,
                y: -64 + slideInPixels,
                blur: 128
            })

            gsap.set("#ball-4", {
                x: parent.width - 32 + ball4.clientWidth,
                scale: 0.25,
                y: -64 + slideInPixels,
                blur: 128
            })
            
            const animation1 = gsap.timeline().to("#ball-1",  {
                x: 32,
                y: `-=${slideInPixels}`,
                scale: 1,
                blur: 0,
                ease: "power4.out",
                scrollTrigger: {
                    id: "#ball-1",
                    trigger: ".balls",
                    start: "24% 50%",
                    end: "32% 50%",
                    scrub: true,
                    // markers: true,
                }
            }).to("#ball-1",  {
                x: parent.width/2 - ball1.clientWidth/2,
                y: ball1.offsetParent.clientHeight - ball1.offsetTop - ball1.clientHeight - 128,
                scale: 0,
                backgroundColor: "#111",
                immediateRender: false,
                ease: "power4.out",
                scrollTrigger: {
                    id: "#ball-1",
                    trigger: ".balls",
                    start: "90% 100%",
                    end: "99% 100%",
                    scrub: true,
                    // markers: true,
                }
            })

            const animation2 = gsap.timeline().to("#ball-2",  {
                x: parent.width - 32 - ball2.clientWidth,
                scale: 1,
                y: `-=${slideInPixels}`,
                blur: 0,
                scrollTrigger: {
                    id: "#ball-2",
                    trigger: ".balls",
                    start: "32% 50%",
                    end: "40% 50%",
                    scrub: true,
                    // markers: true,
                }
            }).to("#ball-2",  {
                x: parent.width/2 - ball2.clientWidth/2,
                y: ball2.offsetParent.clientHeight - ball2.offsetTop - ball2.clientHeight - 128,
                scale: 0,
                blur: 0,
                backgroundColor: "#111",
                immediateRender: false,
                scrollTrigger: {
                    id: "#ball-2",
                    trigger: ".balls",
                    start: "92% 100%",
                    end: "99% 100%",
                    scrub: true,
                    // markers: true,
                }
            })


            const animation3 = gsap.timeline().to("#ball-3",  {
                x: 32,
                y: `-=${slideInPixels}`,
                scale: 1,
                blur: 0,
                ease: "power4.out",
                scrollTrigger: {
                    id: "#ball-3",
                    trigger: ".balls",
                    start: "42% 50%",
                    end: "49% 50%",
                    scrub: true,
                    // markers: true,
                }
            }).to("#ball-3",  {
                x: parent.width/2 - ball1.clientWidth/2,
                y: ball3.offsetParent.clientHeight - ball3.offsetTop - ball3.clientHeight - 128,
                scale: 0,
                blur: 0,
                backgroundColor: "#111",
                immediateRender: false,
                ease: "linear",
                scrollTrigger: {
                    id: "#ball-3",
                    trigger: ".balls",
                    start: "94% 100%",
                    end: "99% 100%",
                    scrub: true,
                    // markers: true,
                }
            })


            const animation4 = gsap.timeline().to("#ball-4",  {
                x: parent.width - 32 - ball4.clientWidth,
                y: `-=${slideInPixels}`,
                scale: 1,
                blur: 0,
                scrollTrigger: {
                    id: "4.1",
                    trigger: ".balls",
                    start: "48% 50%",
                    end: "56% 50%",
                    scrub: true,
                    // markers: true,
                }
            }).to("#ball-4",  {
                x: parent.width/2 - ball4.clientWidth/2,
                y: ball4.offsetParent.clientHeight - ball4.offsetTop - ball4.clientHeight - 128, 
                scale: 0,
                blur: 0,
                backgroundColor: "#111",
                immediateRender: false,
                ease: "linear",
                scrollTrigger: {
                    id: "4.2",
                    trigger: ".balls",
                    start: "96% 100%",
                    end: "100% 100%",
                    scrub: true,
                    // markers: true,
                }
            })


            const animation5 = gsap.to(".television-container", {
                height: window.innerHeight - (128 + 32),
                scrollTrigger: {
                    id: "4.2",
                    trigger: ".balls",
                    start: "92% 100%",
                    end: "100% 100%",
                    scrub: true,
                    // markers: true,
                },
                onComplete: () => {
                    this.tvSection = 2
                    this.$el.querySelector(".television-screen-content").style.pointerEvents = "visible"
                    // this.$el.querySelector(".shared-perception-container").style.pointerEvents = "none"
                    this.allowScroll = false
                    gsap.to(".television-screen-content", {
                        color: "#fff",
                        opacity: 1,
                        duration: 0.8,
                        immediateRender: false,
                        ease: "power4.out"
                    })
                }
            })

            this.animations.push(animation1, animation2, animation3, animation4, animation5)
        },
        slide3() {
            const shaft = this.$el.querySelector(".cross-shaft") as HTMLElement
            const crossText = this.$el.querySelector(".cross-text") as HTMLElement
            shaft.style.width = `${crossText.offsetHeight}px`

            gsap.set(crossText, {
                y: "256 + 100vh",
            })
            
            const animation1 = gsap.to(crossText,  {
                y: 256,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: shaft,
                    scrub: true,
                    start: "top 66%",
                    end: "640px 50%",
                    // markers: true,
                }
            })

            this.animations.push(animation1)

        },
        slide2() {
            gsap.set("#square-1", {
                x: "-100vw",
            })
            gsap.set("#square-2", {
                x: "100vw",
            })
            gsap.set("#square-3", {
                x: "-100vw",
            })
            const square3 = this.$el.querySelector("#square-3") as HTMLElement
            
            const animation1 = gsap.to("#square-1",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    scroller: ".shared-perception-container",
                    trigger: "#square-1",
                    start: "top 75%",
                    end: "bottom 75%",
                    scrub: true,
                    markers: false,
                }
            })
            
            const animation2 = gsap.to("#square-2",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#square-2",
                    start: "top 75%",
                    end: "bottom 75%",
                    id: "square-2",
                    scrub: true,
                    // markers: true,
                }
            })

            const animation3 = gsap.to("#square-3",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#square-3",
                    start: "top 75%",
                    end: "bottom 75%",
                    id: "square-3.1",
                    scrub: true,
                    // markers: true,
                },
                onComplete: () => {
                    let offset = 144*2 
                    if (window.innerWidth < 768) {
                        offset = 64
                    }
                    gsap.to("#square-3",  {
                        x: this.$el.clientWidth - square3.clientWidth - offset, // 64 is the margin-left (32px) + margin-right (32px)
                        duration: .64,
                        ease: "Linear.easeNone",
                        yoyo: true, // yoyo back and forth
                        repeat: -1, 
                        repeatDelay: 0.48,
                        delay:.48,
                    })
                }
            })

            this.animations.push(animation1, animation2, animation3)
        },
        carouselInitialisation() {
            
            const container = this.$refs["container"] as HTMLElement
            if (!container) {
                return
            }
            container.scrollTo(0, 0)
        
            this.changeCarousel()
            gsap.fromTo(".carousel-cell, .side", {
                blur: 32,
                opacity: 0,
            },
            {
                blur: 0,
                opacity: 1,
                delay:.32,
                duration: 1.6
            })
        
            if (window.innerWidth < 768) {
                container.addEventListener("scroll", this.scrollStart)
            }


        },
        scrollStart() {
            const container = this.$refs["container"] as HTMLElement
            if (!container || !this.allowScroll) {
                return
            }
            this.hasScrolled = true
            
            if (window.innerWidth < 768)  {
                gsap.to(".shared-perception-container", {
                    opacity: 1,
                    duration: .8,
                    scrollTo: { 
                        y: "#slide-1"
                    },
                })
            } 
            container.removeEventListener("scroll", this.scrollStart)
        },
        changeCarousel() {
            const carousel = this.$refs["carousel"] as HTMLElement
            const cells = this.$el.querySelectorAll(".carousel-cell") as Array<HTMLElement>
                
            const cellCount =cells.length
            const theta = 360 / cellCount
            const cellSize = carousel.offsetHeight
            this.radius = Math.round(( cellSize / 2) / Math.tan( Math.PI / cellCount ))
            // translateZ(calc(100vh - 50vh - 64px)
            for ( var i=0; i < cells.length; i++ ) {
                var cell = cells[i]
                if ( i < cellCount ) {
                    // visible cell
                    cell.style.opacity = "1"
                    var cellAngle = theta * i
                    cell.style.transform = `rotateX(${cellAngle}deg) translateZ(${this.radius}vh)"`
                } else {
                    // hidden cell
                    cell.style.opacity = "0"
                    cell.style.transform = "none"
                }
            }
                
            this.rotateCarousel()
        },
        rotateCarousel() {
            const carousel = this.$refs["carousel"] as HTMLElement
            const cells = this.$el.querySelectorAll(".carousel-cell") as Array<HTMLElement>
                
            const theta = 360 / cells.length
            const angle = theta * this.selectedIndex * -1
            gsap.to(carousel, {
                duration: 3.2,
                ease: "elastic.out(1.2, 0.3)",
                rotationX: angle,
                translateZ: -this.radius,
            })
            // carousel.style.transform = `translateZ(${-this.radius}px) rotateY(${angle}deg)`
        },
        nextCell(e:MouseEvent) {
            const cells = this.$el.querySelectorAll(".carousel-cell") as Array<HTMLElement>
                
            if (e.clientY > window.innerHeight / 2) {
                this.selectedIndex++
            } else {
                if (this.selectedIndex <= 0) {
                    return
                }
                this.selectedIndex--
            }

            this.hasClicked = true
            
            if (this.selectedIndex >= cells.length-1) {
                this.allowScroll = true
                if (window.innerWidth > 768) {
                    gsap.to(".carousel", {
                        xPercent: -105,
                        duration: .8,
                    })
                    gsap.to("#slide-1", {
                        y: "-100vh",
                        delay:.32,
                        duration: .8,
                    })
                }
            }

            if (this.selectedIndex >= cells.length) {
                return
            }
            
            this.changeCarousel()
        },
        cancelAnimations() {

            this.animations.forEach((animation) => {
                animation.kill()
            })
            ScrollTrigger.getAll().forEach(instance => {
                instance.kill() // destroy the ScrollTrigger instance
            })
            
            console.log("KILL")
            this.animations.length = 0
        },
        setupAnimations() {
            this.slide2()
            this.slide3()
            this.slide4()
            this.tvSlide()
            console.log("SETUP")
        }
    }
})


</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.shared-perception-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &.__allowScroll {
        overflow: auto;
        overflow-x: hidden;
    }
}
.scene {
    display: flex;
    justify-content: center;
    position: relative;
    width: calc(100% - 64px);
    height: calc(100% - 64px);
    margin: 32px auto;
    perspective: 100vh;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(calc(50vh - 64px));
  transform-style: preserve-3d;
  
  .side {
      width: calc(100vh - 64px);
      height: calc(100vh - 64px);
      background-color: #fff;
      position: absolute;
      transform: rotateY(90deg) ;//translateZ(calc(50vh - 64px));
      left:calc(-50vh + 32px);
  }
}

.carousel-cell {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
    

    @media (min-width: 480px) {
        font-size: 16px;
    }

    @media (min-width: 512px) {
        font-size: 18px;
    }
    @media (min-width: 640px) {
        font-size: 24px;
    }
    @media (min-width: 768px) {
        font-size: 28px;
    }
}
.carousel-cell-mobile {
    color:$grey;
    display: inline-block;
    width: 100%;
    position: absolute;
    bottom: 32px;
    font-size:12px;
    font-style: italic;
    text-align: center;
}

@mixin carousel-cell-transform($angle) {
  transform: rotateX($angle) translateZ(calc(100vh - 50vh - 32px)) ;
}

@for $i from 1 through 4 {
  .carousel-cell:nth-child(#{$i}) {
    @include carousel-cell-transform(calc(360deg / 4) * ($i - 1));
  }
}

.slide {
    width: 100vw;
    height: 100vh;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    background-color: #fff;
    border:1px solid $black;
    padding: 32px 32px;
    line-height: 2;
    font-size: 14px;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
}

.squares {
    display: flex;
    flex-flow: column;

}

.square {
    aspect-ratio: 1/1;
    width: 256px;
    margin: 0 32px 128px;
    transition: align-self .8s ease-in-out;
    .card {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

#square-2 {
    align-self: end;
}


.cross {
    position: relative;
    display: flex;
    justify-content: center;
}

.cross-shaft {
    height: calc(150vh - 128px);
    width: 128px;
    background-color: #fff;
    border:1px solid $black;
    margin-top: 128px;
    
}

.cross-text {
    background-color: #fff;
    border:1px solid $black;
    width: calc(100% - 32px);
    position: absolute;
    padding: 24px 32px;
    line-height: 1.6;
    text-align: center;
    font-size: 14px;
    max-width: 768px;
}

.television-slide {
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    z-index: 1;
    width: 100%;
    pointer-events: none;
    max-width: 512px;
    
    &.__isSticky {
        position: fixed;
        bottom: 124px;
        width:calc(100% - 16px);
    }

    // display: none;
}

.television-container {
    width: calc(100% - 64px);
    background-color: #fff;
    border:1px solid $black;
    aspect-ratio: 4/3;
    max-width: 768px;
    padding: 12px 16px;
    
    @media (min-width: 768px) {
        padding: 24px 32px;
    }
}
    
.television-screen {
    width: 100%;
    height: 100%;
    border:1px solid $black;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    border-radius: 8px;
    display: flex;
    font-size: 12px;
    line-height: 2;
    overflow: hidden;
}
.television-screen-content {
    width: 100%;
    height: 100%;
    padding: 16px;
    z-index: 1;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    p {
        padding: 0;
        margin: 0;

        + p {
            margin-top: 16px;
        }
    }
    .first-section,
    .second-section,
    .third-section {
        display: none;
        &.__isVisible {
            display: block;
        }
    }

    .second-section {
        height: 100%;
        text-align: left;
    }
    .third-section {
        align-self: flex-start;
        width: 100%;
    }
    .form {
        padding-top: calc(100vh - 80px);
        display: flex;
        flex-flow:row nowrap;
        padding-bottom: 16px;
        justify-content: space-between;

        input {
            background-color: transparent;
            border: 0 none transparent;
            border-bottom: 1px solid $white;
            color: $white;
            width: calc(100% - 96px);
            padding-bottom: 4px;
            border-radius: 0;

            &:focus {
                outline: none;

            }
        }
        button {
            background-color: transparent;
            border: 0 none transparent;
            color: $white;
            padding: 0;
            margin: 0;
            span {
                transition: $transitionDefault;
                cursor: pointer;
            }
            

            &:hover,
            &:focus {
                outline: none;
                span {
                    display: inline-block;
                    transform: translateX(4px);
                }
            }
        }
    }
}

.television-screen-bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.balls-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
}
.balls {
    padding-top: 256px;
    padding-bottom: 50vh;
    max-width: 640px;
    width: 100%;
}

.ball {
    clip-path: circle(100%);
    width: 200px;
    border-radius: 100%;
    aspect-ratio: 1/1;
    padding: 16px;
    font-size: 14px;
    line-height: 1.8;
    text-align: center;
    border:1px solid $black;
    background-color: #fff;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;

    &.__isSmall {
        width: 164px;
    }   

    @media all and (min-width: 768px) {
        font-size: 16px;
        width: 320px;
        &.__isSmall {
            width: 256px;
        }
    }
}
.scroll-lock {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}
.grid {
    background-image: linear-gradient(to right, #eee 1px, transparent 1px),
                      linear-gradient(to bottom, #eee 1px, transparent 1px);
    background-size: 16px 16px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to right, #ccc 1px, transparent 2px),
                          linear-gradient(to bottom, #ccc 1px, transparent 2px);
        background-size: 160px 160px;
        z-index: 1;
    }
}

.message {
    display: block;
    width: 100%;
    padding-left: 16px;
    font-family: courier new, courier;
    text-align: left;

    + .message {
        margin-top: 16px;
    }
}

.message-date {
    display: inline-block;
    width: 100%;
    position: relative;
    opacity: 0.8;

    &:before {
        content: ">";
        position: absolute;
        left: -16px;
        opacity: 1;
    }
}

.message-text {
    display: inline-block;
    width: 100%;
    font-size: 1.2em;
}

.slotstuk {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    position: fixed;
    pointer-events: none;
    opacity: 0;
    
    &.__isActive {
        opacity: 1;
        transition: $transitionDefault;
        pointer-events: auto;
    }
    
}

.slot-stuk-handle {
    border-top: 1px solid #111;
    border-left: 1px solid #111;
    border-bottom: 1px solid #111;
    padding: 8px 0 8px 8px;
    font-size: 16px;
    background-color: #fff;
    display: block;
    bottom: 48px;
    position: absolute;
    margin-left: 128px;
    // min-width: 256px;
    width: calc(100% - 127px);
    &:after {
        content: "";
        top: 0;
        bottom: 0;
        background-color: #fff;
        width: 1px;
        position: absolute;
        right: 1px;
        z-index: 1;
    }
}

.slot-stuk-content-container {
    justify-content: center;
    align-items: center;
    display: flex;
    width: calc(100vw - 64px);
    background-color: #fff;
    border:1px solid $black;
    position: absolute;
    left: 100vw;
    top: 32px;
    bottom: 32px;
    overflow: auto;
    z-index: -1;
    
    @media all and (min-width: 480px) {
        display: flex;
        flex-flow: column nowrap;
    }
    
    @media all and (min-width: 768px) {
        background-color: transparent;
        border:0 none transparent;
    }
    
}
.slot-stuk-content {
    font-size: 14px;
    line-height: 1.8;
    padding: 16px 32px;
    width: 100%;
    position: absolute;
    display: flex;
    top: 0;
    flex-flow: column;
    p {
        margin: 0;
        + p {
            margin-top: 16px;
        }
    }
    
    @media all and (min-width: 768px) {
        width: auto;
        justify-content: center;
        aspect-ratio: 1/1;
        max-height: 80vh;
        background-color: #fff;
        border:1px solid $black;
        position: relative;
    }
}
.slot-stuk-content-center {
    display: flex;
    justify-content: center;
    flex-flow: column;
}

.slot-stuk-content-button-container {
    width: 100%;
    display: flex;
    left: 0;
    right: 0;
    justify-content: center;
    // align-items: center;
    padding: 0 32px;
    margin-top: 32px;
    margin-bottom: 16px;
    
    @media all and (min-width: 768px){
        justify-content: flex-end;
        bottom: 0;
        position: absolute;
    }
}

.slot-stuk-content-button {
    border: 0 none transparent;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: $black;
    
    svg {
        margin-left: 8px;
        height: 32px;
    }
}



// Desktop version

@media all and (min-width: 768px) {
    .scene {

    }
    .carousel {
        width: 30%;
    }

    #slide-1 {
        z-index: 2;
        position: relative;
        justify-content: flex-end;
    }
    #slide-1 .card {
        width: calc(70% - 96px);
        // margin-top: -100vh;
    }
    
    #slide-2 {
        margin-top:calc( -100vh + 64px);
    }

    .square {
        margin-left: 144px;
        margin-right: 144px;
    }

    .shared-perception-container {
        &.__allowScroll {
        }
    }
}


@media all and (min-width: 1440px) {
    .slot-stuk-content {
        aspect-ratio: unset;
        max-width: 1280px;
        padding: 64px 48px;
        font-size: 18px;
        line-height: 32px;
        // padding-bottom: 128px;
    }
}
</style>
