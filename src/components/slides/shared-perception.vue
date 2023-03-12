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
                        Een gedeeld standpunt van een (waargenomen) waarheid of realiteit.
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
            </div>
        </div>


        <div class="slide" id="slide-1">
            <p class="card">
                Deze waarnemingen vormen onze waargenomen realiteit. 
                In ons hoofd zijn we echter niet in staat om een onderscheid te maken tussen onze waargenomen realiteit, 
                en de echte realiteit. De realiteit komt via onze <glitch 
                        :duration="480" 
                        :delay="3200" 
                        :repeat="777" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="['zintuigen', 'sensoren']"
                        :glitch-jumps="6" 
                        :glitch-offset="8" /> binnen, waarop onze hersenen deze datastroom vervolgens verwerken. 
                Dit is veelal een passief proces. We kunnen weliswaar onze waarnemingen betwisten, maar met de overvloed aan informatie waar we mee 
                geconfronteerd worden iedere dag, is het onleefbaar om iedere waarneming actief te betwisten.
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
                        Een standpunt kan immers verschuiven.
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
                            <p>
                                in de 20e eeuw namen massa-media zoals radio & televisie deze rol gestaag over
                            </p>
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
                    zal iedereen tot een zelfde conclusiekomen
                </div>
                <div class="ball" id="ball-3">
                    De opkomst van het internet en de digitale media
                </div>
                <div class="ball" id="ball-4">
                    Zorgt echter voor een shift in deze vorm van realiteitsvorming
                </div>
            </div>
        </div>
        

        <div class="scroll-lock" v-if="scrollLock"></div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Glitch from "@/components/glitch.vue"
import StaticNoise from "@/components/static-noise.vue"
import _ from "lodash"

export default defineComponent({
    name: "shared-perception",
    components: {
        Glitch, StaticNoise
    },
    data: () => {
        return {
            state: 0,
            gTimeline: null as null | gsap.core.Timeline,
            selectedIndex: 0,
            theta: 0,
            radius: 1,
            hasClicked: false,
            hasScrolled: false, 
            tvSticky: false, 
            scrollLock: false,
            allowScroll: true,
            // allowScroll: false,
            // showSquares: true,
        }
    },
    computed: {
    },
    mounted() {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            scroller: ".shared-perception-container"
        })
        
        this.carouselInitialisation()
        this.slide2()
        this.slide3()
        this.slide4()
        this.tvSlide()

    },
    methods: {
        getCenterPoint(tv: {x:number, y:number}, ball: HTMLElement) {
            const ballPos = ball.getBoundingClientRect()
            
            return {
                x: tv.x - ballPos.width/2 ,
                y: tv.y - ballPos.height/2 
            }
        },
        // scrollingFinished() {
        //     const balls = this.$el.querySelector(".balls") as HTMLElement
        //     const ball1 = this.$el.querySelector("#ball-1") as HTMLElement
        //     const ball2 = this.$el.querySelector("#ball-2") as HTMLElement
        //     const ball3 = this.$el.querySelector("#ball-3") as HTMLElement
        //     const ball4 = this.$el.querySelector("#ball-4") as HTMLElement
        //     const tv = this.$el.querySelector(".television-screen") as HTMLElement
        //     let parentWidth = balls?.clientWidth || document.body.clientWidth
        //     const centerPointTV = {
        //         x: tv.getBoundingClientRect().x + tv.clientWidth / 2,
        //         y: tv.getBoundingClientRect().y + tv.clientHeight / 2,
        //     }
        //     console.log(tv,tv.offsetTop,this.getCenterPoint(centerPointTV, ball3), ball3)
            
        //     gsap.set(ball4, {x:0})
        //     gsap.set(ball3, {x:0})
        //     gsap.to(ball4, {
        //         duration: 3, // the duration of the animation in seconds
        //         scale:.2,
        //         x: this.getCenterPoint(centerPointTV, ball4).x,
        //         // y: this.getCenterPoint(centerPointTV, ball4).y, 
        //         ease: "power2.out", // the easing function to use
        //         onComplete: () => {
        //             console.log("Ball4.1")
        //         }
        //     })
        //     gsap.to(ball3, {
        //         duration: 11, // the duration of the animation in seconds
        //         scale:.2,
        //         x: this.getCenterPoint(centerPointTV, ball3).x,
        //         y: this.getCenterPoint(centerPointTV, ball3).y,
        //         // y: this.getCenterPoint(centerPointTV, ball3).y, 
        //         ease: "power2.out", // the easing function to use
        //         onComplete: () => {
        //             console.log("Ball4.2")
        //         }
        //     })

        //     // gsap.timeline()
        //     //     .to(ball4, {
        //     //         opacity: 0,
        //     //         duration: 1.44,
        //     //         ease: "Linear.easeNone",
        //     //     })

            
            
        // },
        tvSlide() {
            gsap.set(".television-screen-bg", {
                opacity: 0,
            })
            gsap.to(".television-slide",  {
                ease: "Linear.easeNone",
                duration: 1.44, // Not required cause of scrollTrigger, but checking if it prevents the timeline from messing up
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

            const timeline = gsap.timeline()
            timeline.to(".television-screen-content", {
                opacity: 0,
                duration: 1.44, // Not required cause of scrollTrigger, but checking if it prevents the timeline from messing up
                scrollTrigger: {
                    trigger:".balls",
                    scrub: true,
                    start: "10% bottom",
                    end: "30% bottom",
                    id:"tv",
                    // markers: true,
                }
            })
                .to(".television-screen-bg", {
                    opacity: 1,
                    duration: 1.44, // Not required cause of scrollTrigger, but checking if it prevents the timeline from messing up
                    scrollTrigger: {
                        trigger:".balls",
                        scrub: true,
                        start: "15% bottom",
                        end: "40% bottom",
                        id:"tv",
                    // markers: true,
                    },
                })
                .to(".television-screen-content", {
                    opacity: .9,
                    duration: 1.44, // Not required cause of scrollTrigger, but checking if it prevents the timeline from messing up
                    backgroundColor: "#111",
                    color: "transparent",
                    scrollTrigger: {
                        trigger:".balls",
                        scrub: true,
                        start: "40% bottom",
                        end: "60% bottom",
                        id:"tv",
                    // markers: true,
                    },
                })
                .to(".television-screen-content", {
                    duration:0.01,
                    backgroundColor: "#100",
                    scrollTrigger: {
                        trigger:".balls",
                        start: "98% bottom",
                        end: "98% bottom",
                        id:"end",
                        // markers: true,
                    },
                })



        },
        slide4() {
            console.log("slide4")
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
            
            gsap.timeline().to("#ball-1",  {
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

            gsap.timeline().to("#ball-2",  {
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


            gsap.timeline().to("#ball-3",  {
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
            gsap.timeline().to("#ball-4",  {
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
            })
                .to("#ball-4",  {
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

        },
        slide3() {
            const shaft = this.$el.querySelector(".cross-shaft") as HTMLElement
            const crossText = this.$el.querySelector(".cross-text") as HTMLElement
            shaft.style.width = `${crossText.offsetHeight}px`

            gsap.set(crossText, {
                y: "256 + 100vh",
            })
            
            gsap.to(crossText,  {
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

            gsap.to("#square-1",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#square-1",
                    start: "top 75%",
                    // markers: true,
                }
            })
            
            gsap.to("#square-2",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#square-2",
                    start: "top 75%",
                    id: "square-2",
                    // markers: true,
                }
            })

            gsap.to("#square-3",  {
                x: 0,
                duration: 1.44,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#square-3",
                    start: "top 75%",
                    end: "top 60%",
                    id: "square-3.1",
                    // markers: true,
                },
                onComplete: () => {
                    gsap.to("#square-3",  {
                        x: this.$el.clientWidth - square3.clientWidth - 64, // 64 is the margin-left (32px) + margin-right (32px)
                        duration: .64,
                        ease: "Linear.easeNone",
                        yoyo: true, // yoyo back and forth
                        repeat: -1, 
                        repeatDelay: 0.48,
                        delay:.48,
                    })
                }
            })



            
        },
        carouselInitialisation() {
            
            const container = this.$refs["container"] as HTMLElement
            if (!container) {
                return
            }
            container.scrollTo(0, 0)
        
            this.changeCarousel()
            gsap.fromTo(".carousel-cell", {
                blur: 32,
                opacity: 0,
            },
            {
                blur: 0,
                opacity: 1,
                delay:.32,
                duration: 1.6
            })
        

            container.addEventListener("scroll", this.scrollStart)

        },
        scrollStart() {
            const container = this.$refs["container"] as HTMLElement
            if (!container || !this.allowScroll) {
                return
            }
            this.hasScrolled = true
            
            gsap.set("#slide-1 .card", {
                opacity: 0,
                y: "-100vh"
            })
            gsap.to(".shared-perception-container", {
                opacity: 1,
                duration: .8,
                scrollTo: { 
                    y: "#slide-1"
                },
                onComplete: () => {
                    // this.showSquares = true
                }
            })
            gsap.timeline()
                .to("#slide-1 .card", {
                    opacity: 1,
                    delay: .32,
                    y: 0,
                    duration: 1.6,
                    ease: "bounce.out",
                })

            container.removeEventListener("scroll", this.scrollStart)
        },
        changeCarousel() {
            const carousel = this.$refs["carousel"] as HTMLElement
            const cells = this.$el.querySelectorAll(".carousel-cell") as Array<HTMLElement>
                
            const cellCount =cells.length
            const theta = 360 / cellCount
            const cellSize = carousel.offsetHeight
            this.radius = Math.round(( cellSize / 2) / Math.tan( Math.PI / cellCount ))
                
            for ( var i=0; i < cells.length; i++ ) {
                var cell = cells[i]
                if ( i < cellCount ) {
                    // visible cell
                    cell.style.opacity = "1"
                    var cellAngle = this.theta * i
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
            }

            if (this.selectedIndex >= cells.length) {
                return
            }
            
            this.changeCarousel()
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
//   outline: 10px solid purple;
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
  transform: translateZ(calc(100vh - 53.5vh * -1));
  transform-style: preserve-3d;
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
  transform: rotateX($angle) translateZ(calc(100vh - 53.5vh));
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

    @media (min-width: 768px) {
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
    margin-left: 16px;
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
    
    &.__isSticky {
        position: fixed;
        bottom: 124px;
    }

    // display: none;
}

.television-container {
    width: calc(100% - 128px);
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
    padding: 24px;
    z-index: 1;
    margin: 0;
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

</style>
