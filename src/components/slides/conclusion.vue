<template>
    <div class="conclusion-container" ref="container">

        <div class="page-title-container">
            <h1 class="page-title">
                Samenvatting
            </h1>
        </div>

        <div class="box-container">
            <div class="box __isRight" id="box-1">
                <p>
                    Je standpunt beïnvloed de wijze waarop je informatie tot je neemt. 
                    Informatie waarmee jouw beeld van de werkelijkheid wordt gevormd. 
                    Dit standpunt is dynamisch en kan zowel via externe invloeden (media) als interne invloeden (humeur) wijzigen. 
                    Wanneer een groep mensen een gedeeld standpunt hebben, dan delen zij eenzelfde waargenomen waarheid/realiteit.
                </p>
            </div>
            <div class="box __isLeft" id="box-2" @click="openBox2">
                <p>
                    Tot dusver heb ik het alleen nog maar gehad over wat perceptie is, 
                    hoe het gevormd en beïnvloed kan worden en dat het invloed heeft op je waargenomen realiteit. 
                    Maar ik heb het nog niet gehad waarom perceptie op zichzelf belangrijk is. 
                    Dat wil ik graag uitleggen middels een ander abstract concept. 
                    Het spectrum waaruit het <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="6" 
                            :inputs="['goed','positief','zwart','links']"
                            :glitch-jumps="4" 
                            :glitch-offset="8" />
                            / <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="8" 
                            :inputs="['slecht','negatief','wit','rechts']"
                            :glitch-jumps="8" 
                            :glitch-offset="4" />
                denkkader komt te ontstaan
                </p>
            </div>
            <div class="box __isRight" id="box-3" @click="openBox3">
                <p>
                    Dit wil ik je graag laten zien door hetzelfde onderwerp (de sociale-media bubbel) vanuit 3 verschillende standpunten te beschrijven.
                    Met daaropvolgend 3 verschillende spectra waarop het <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="6" 
                            :inputs="['goed','positief','zwart','links']"
                            :glitch-jumps="4" 
                            :glitch-offset="8" />
                            / <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="8" 
                            :inputs="['slecht','negatief','wit','rechts']"
                            :glitch-jumps="8" 
                            :glitch-offset="4" /> kader komt te ontstaan. 
                    Neem deze alle 3 even tot je op, daarna wil ik je uit leggen welke waarde er zit in het bepalen van deze denkkaders
                </p>
            </div>


            <div class="continue-button" @click="toSocialMediaBubbles">
                Ga verder &gt;
            </div>

        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Glitch from "@/components/glitch.vue"
// import StaticNoise from "@/components/static-noise.vue"
import _ from "lodash"

export default defineComponent({
    name: "conclusionPage",
    components: {
        Glitch
    },
    data: () => {
        return {
            box2Open: false,
            box3Open: false,
            pulseDelay: 0 // default: 4.8
        }
    },
    computed: {
    },
    mounted() {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.defaults({
            scroller: ".conclusion-container"
        })

        gsap.set(".page-title", {
            x: " -100%",
        })
        gsap.set("#box-1", {
            x: " 100%",
        })
        gsap.set("#box-2", {
            xPercent: -100,
        })
        gsap.set("#box-3", {
            x: " 100%",
        })

        gsap.set(".continue-button", {
            blur: 24,
            opacity: 0
        })
        
        gsap.timeline().to(".page-title", {
            x: 0,
            duration: 1.024,
        }).to("#box-1", {
            x: 0,
            duration: 1.024,
            onComplete: () => {
                gsap.timeline().to("#box-2",{
                    x:32,
                    delay: this.pulseDelay,
                    duration: 2.4,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.fromTo("#box-2",{
                            x:32,
                            
                        }, {
                            x:16,
                            duration: 1,
                            repeat: -1,
                            yoyo: true,
                            ease: "power2.inOut",
                        })
                    }
                })
            }
        })

    },
    methods: {
        openBox2() {
            if (this.box2Open) {
                return
            }

            // Stop the pulse animation
            gsap.killTweensOf("#box-2")

            // Animate box-2 sliding in from the left
            gsap.to("#box-2", {
                xPercent: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    this.box2Open = true

                    const box3 = document.querySelector("#box-3")
                    if (_.isNull(box3) || _.isNull(box3.parentElement)) {
                        return
                    }
                    const parentWidth = box3.parentElement.clientWidth


                    gsap.to("#box-3", {
                        x: parentWidth - 32 - 64,
                        delay: this.pulseDelay,
                        ease: "power2.inOut",
                        duration: 2.4,
                        onComplete: () => {
                            gsap.fromTo("#box-3",{
                                x:parentWidth - 32 - 64,
                                
                            }, {
                                x:parentWidth - 16 - 64,
                                duration: 1,
                                repeat: -1,
                                yoyo: true,
                                ease: "power2.inOut",
                            })
                        }
                    })
                }
            })

            gsap.to("#box-1", {
                scale: .96,
                blur: 4,
                backgroundColor: "#eee",
                color: "#333",
                duration: 1.024,
                ease: "power2.inOut",
            })
        },
        openBox3() {
            if (this.box3Open) {
                return
            }

            // Stop the pulse animation
            gsap.killTweensOf("#box-3")

            gsap.to("#box-3", {
                x: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    this.box3Open = true
                    this.$el.querySelector(".continue-button").style.pointerEvents = "all"
                    gsap.to(".continue-button", {
                        blur: 0,
                        opacity: 1,
                        duration: 1.024,
                        ease: "power2.inOut",
                    })
                }
            })

            gsap.to("#box-2", {
                scale: .96,
                blur: 4,
                backgroundColor: "#eee",
                color: "#333",
                duration: 1.024,
                ease: "power2.inOut",
            })
            gsap.to("#box-1", {
                scale: .92,
                blur: 8,
                backgroundColor: "#ccc",
                color: "#666",
                duration: 1.024,
                ease: "power2.inOut",
            })
        },
        toSocialMediaBubbles() {
            console.log("toSocialMediaBubbles")

            gsap.to(".continue-button", {
                blur: 24,
                opacity: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    delete this.$el.querySelector(".continue-button").style.pointerEvents
                }
            })
            
            gsap.to("#box-1", {
                x: " 100%",
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.024,
                ease: "power2.inOut",
            })

            gsap.to("#box-2", {
                xPercent: -100,
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.6,
                ease: "power2.inOut",
            })
            gsap.to("#box-3", {
                x: " 100%",
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 2.4,
                ease: "power2.inOut",
            })
        }
    }
})


</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.conclusion-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    &.__allowScroll {
        overflow: auto;
        overflow-x: hidden;
    }
}

.page-title {
    font-weight: 800;
    font-size: 32px;
    margin-top: 32px;
    display: inline-block;
    width: 100%;
    text-align: right;
    padding: 0 32px;
}
.box-container {
    position: relative;
    margin-top: 32px;
    height: calc(100vh - 128px);
}

.box {
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    border:1px solid $black;
    padding: 16px 24px 16px 32px;
    width: calc(100% - 64px);
    position: absolute;
    z-index: 1;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;

    &.__isRight {
        margin-left: 64px;
    }
}

#box-2 {
    top: 16%;
}
#box-3 {
    top: 32%;
}

.continue-button {
    position: absolute;
    bottom: 16px;
    right: 32px;
    font-size: 20px;
    cursor: pointer;
    pointer-events: none;
}

</style>
