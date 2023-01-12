<template>
    <div class="stripes-container" ref="container" @click="moveState">
        <!-- <div class="stripes">
            <div class="stripe" ref="stripe1"></div>
            <div class="stripe" ref="stripe2"></div>
            <div class="stripe" ref="stripe3">
                <span>
                    De waarde van perceptie
                </span>
            </div>
        </div> -->

        <svg version="1.0" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px" 
            :viewBox="`0 0 ${vpWidth} ${vpHeight}`" 
            xml:space="preserve">
	    <g>
            <polyline 
                class="stripe" 
                ref="stripe1" 
                :refs="stripe.id" 
                :id="stripe.id" 
                :points="`${stripe.v.x1} ${stripe.v.y1}, ${stripe.v.x2} ${stripe.v.y2}`" 
                :key="i"
                v-for="stripe,i in stripes" />
            <text>
                <textPath href="#stripe3" text-anchor="middle" startOffset="50%">De waarde van perceptie.</textPath>
            </text>
        </g>
    </svg>

    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "stripes-component",
    data: () => {
        return {
            state: 0,
            gTimeline: null as null | gsap.core.Timeline,
            vpWidth: 0,
            vpHeight: 0,
            stripes: [
                {
                    id: "stripe1",
                    v: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    start: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    end: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }
                },
                {
                    id: "stripe2",
                    v: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    start: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    end: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }
                },
                {
                    id: "stripe3",
                    v: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    start: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }, 
                    end: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                    }
                }
            ]
        }
    },
    unMounted() {
        window.removeEventListener("resize", this.resize)
    },
    mounted() {
        // set point attributes
        window.addEventListener("resize", this.resize)
        this.resize()
        // this.$refs.stripe1.setAttribute("points", `${this.vpWidth + 100} ${this.vpHeight/2.4}, ${this.vpWidth + 100} ${this.vpHeight/2.4}`)
        // this.$refs.stripe1
        
        // this.stripes[0].end = this.getStripeDefinition(index)
        // this.stripes[1].end = this.getStripeDefinition(1)
        _.each(this.stripes, (stripe, index) => {
            const tmp = this.getStripeDefinition(index)
            stripe.start = {
                x1: tmp.x2,
                y1: tmp.y2,
                x2: tmp.x2,
                y2: tmp.y2
            }

            stripe.end = _.merge({}, tmp)

            this.setStripe(stripe, "start")
        })
            
        // gsap.to(stripe.v, {
        //     x1: stripe.end.x1,
        //     x2: stripe.end.x2,
        //     y2: stripe.end.y2,
        //     y1: stripe.end.y1
        // })

        this.gTimeline = gsap.timeline({
            onComplete: () => {
                this.state = 1
            },
            defaults: {
                duration: 1.28,
                ease: "power2.out"
            }
        }).to(this.stripes[0].v, {
            x1: this.stripes[0].end.x1,
            x2: this.stripes[0].end.x2,
            y2: this.stripes[0].end.y2,
            y1: this.stripes[0].end.y1,
            
        }).to(this.stripes[1].v, {
            x1: this.stripes[1].end.x1,
            x2: this.stripes[1].end.x2,
            y2: this.stripes[1].end.y2,
            y1: this.stripes[1].end.y1,
            delay: -.8,
        }).to(this.stripes[2].v, {
            x1: this.stripes[2].end.x1,
            x2: this.stripes[2].end.x2,
            y2: this.stripes[2].end.y2,
            y1: this.stripes[2].end.y1,
            delay: -.4,
        }).to(this.stripes[0].v, {
            x1: this.stripes[0].start.x1,
            x2: this.stripes[0].start.x2,
            y2: this.stripes[0].start.y2,
            y1: this.stripes[0].start.y1,
            delay: .64,

        }).to(this.stripes[1].v, {
            x1: this.stripes[1].start.x1,
            x2: this.stripes[1].start.x2,
            y2: this.stripes[1].start.y2,
            y1: this.stripes[1].start.y1,
            delay: -.72,
        }).to(this.stripes[2].v, {
            x1: 0,
            x2: this.vpWidth,
            y2: this.vpHeight/2,
            y1: this.vpHeight/2,
            duration: 1.28,
            delay: -.08,
            ease: "bounce.out"
        })
    },
    methods: {
        resize() {
            this.vpWidth = window.innerWidth
            this.vpHeight = window.innerHeight

            this.stripes[0].end = this.getStripeDefinition(0)
            this.stripes[1].end = this.getStripeDefinition(1)
            this.stripes[2].end = this.getStripeDefinition(2)

            this.setStripe(this.stripes[0], "end")
            this.setStripe(this.stripes[1], "end")
            this.setStripe(this.stripes[2], "end")
        },
        getStripeDefinition(stripeIndex: number) : {x1: number, x2: number, y1: number, y2: number} {
            if (stripeIndex == 0) {
                return {
                    x1: this.vpWidth /2,
                    x2: this.vpWidth + 96,
                    y1: -96,
                    y2: this.vpHeight*.75,
                }
            } else if (stripeIndex == 1) {
                return {
                    x2: 96,
                    x1: this.vpWidth - 96,
                    y2: this.vpHeight + 96,
                    y1: -96,
                }
            } else if (stripeIndex == 2) {
                return {
                    x1: -96,
                    y1: this.vpHeight/2 + 64,
                    x2: this.vpWidth + 96,
                    y2: this.vpHeight/2 - 64,
                }
            } 
            return {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0,
            }
        },
        setStripe(stripe, which: "start" | "end") {
            gsap.set(stripe.v, {
                x1: stripe[which].x1,
                x2: stripe[which].x2,
                y2: stripe[which].y2,
                y1: stripe[which].y1
            })
        },
        moveState() {
            if (this.gTimeline && this.state === 0) {
                this.gTimeline.kill()
                this.gTimeline.pause()
                this.gTimeline.progress(1)
                this.state = 1
            } else if (this.gTimeline && this.state === 1) {
                this.vpWidth = window.innerWidth
                this.vpHeight = window.innerHeight
        
                this.gTimeline = gsap.timeline({
                    onComplete: () => {
                        
                        this.$emit("next", "stripes")
                    },
                    defaults: {
                        duration: .96,
                        ease: "power2.in"
                    }
                }).to(this.stripes[2].v, {
                    x1: 0,
                    x2: this.vpWidth,
                    y2: this.vpHeight + 56,
                    y1: this.vpHeight + 56,
                    duration: 1.28,
                    delay: .48,
                    ease: "bounce.out"
                })
                // .to("text", {
                //     transform: "scale(1.2)",
                // })
                // gsap.timeline({
                //     onComplete: () => {
                //         this.state = 1
                //     },
                //     defaults: {
                //         duration: .96,
                //         ease: "power2.in"
                //     }
                // }).to(this.stripes[2].v, {
                //     x1: 0,
                //     x2: this.vpWidth,
                //     y2: this.vpHeight/2,
                //     y1: this.vpHeight/2,
                //     duration: 1.28,
                //     delay: .24,
                //     ease: "bounce.out"
                // }).to(this.stripes[2].v, {
                //     x1: 0,
                //     x2: this.vpWidth,
                //     y2: this.vpHeight + 56,
                //     y1: this.vpHeight + 56,
                //     duration: 1.28,
                //     delay: .48,
                //     ease: "bounce.out"
                // })
            }
        }
    }

})
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";
.stripes-container {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    top: 0;
    bottom: 0;

    text {
        fill: #ddd;
        font-size: 64px;
        text-transform: uppercase;
        translate: 0px 20px;
        line-height: 1em;
        font-weight: bold;
        transform-origin: center;
    }
}
.stripe {
    stroke: $black;
    fill: none;
    stroke-width: 90px;
    stroke-linecap: round;
    transition: $transitionDefault;

    @media (min-width: 768px ) {
        stroke-width: 128px;
    }

    // position: absolute;
    // background-color: $black;
    // color: #ddd;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 96px;
    // width: 3200px;
    // overflow: hidden;
    // text-transform: uppercase;
    // transform-origin: center;

    // &:nth-child(1) {
    //     transform: rotate(8deg);
    // }
}
// .stripes {
//     display: flex;
//     flex-flow: column;
//     &.__isLong {
//         .stripes-content {
//             font-size: 24px;
//         }   
//     }

//     @media (min-width: 768px) {
//         &.__isLong {
//             .stripes-content {
//                 font-size: 40px;
//             }   
//         }
//     }
// }


</style>
