<template>
    <div class="stripes-container" ref="container" :class="disableScroll ? '__disableScroll' : ''" @click="moveState">
        <div class="stripes-scroll-container">
            &nbsp;  
        </div>
        <svg version="1.0" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px" 
            :viewBox="`0 0 ${vpWidth} ${vpHeight}`" 
            xml:space="preserve">
            <g>
                <path 
                    class="stripe" 
                    :class="[stripe.visible ? '' : '__isHidden']"
                    :refs="stripe.id" 
                    :id="stripe.id" 
                    :d="`M${stripe.v.x1} ${stripe.v.y1} L ${stripe.v.x2} ${stripe.v.y2}`" 
                    :key="i"
                    v-for="stripe,i in stripes" />
                <text>
                    <textPath href="#stripe3"  xlink:href="#stripe3" text-anchor="middle" dominant-baseline="middle" startOffset="50%">De waarde van perceptie</textPath>
                </text>
            </g>
        </svg>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { StripeCoordinates, StripeObject } from "@/../types"
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
            done: false,
            disableScroll: true,
            stripes: [
                {
                    id: "stripe1",
                    visible: true,
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
                    visible: true,
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
                    visible: true,
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
            ] as Array<StripeObject>,
            animation: 0
        }
    },
    watch: {
        done: {
            handler: function (val) {
                if (val) {
                    this.stripes[0].visible = false
                    this.stripes[1].visible = false
                    // this.stripes[2].visible = false
                }
            },
            immediate: true
        }
    },
    unMounted() {
        const container = this.$refs["container"] as HTMLElement

        window.removeEventListener("resize", this.resize)
        if (container) {
            container.removeEventListener("scroll", this.moveState)
        }
    },
    mounted() {
        // set point attributes
        window.addEventListener("resize", this.resize)
        const container = this.$refs["container"] as HTMLElement

        if (container) {
            container.addEventListener("scroll", this.moveState)
        }
        
        this.resize()
        
        _.each(this.stripes, (stripe, index) => {
            const tmp = this.getStripeDefinition(index)
            
            stripe.start = {
                x1: tmp.x2,
                y1: tmp.y2,
                x2: tmp.x2,
                y2: tmp.y2
            } as StripeCoordinates

            stripe.end = _.merge({}, tmp)

            this.setStripe(stripe, "start")
        })
            
        this.gTimeline = gsap.timeline({
            onComplete: () => {
                this.state = 1
                this.disableScroll = false
            },
            onUpdate: () => {
                // Safari bugfix for not updating the textPath
                const tp = this.$el.querySelector("svg").querySelector("textPath")
                tp.setAttribute("xlink:href", "#stripe3")
                tp.setAttribute("href", "#stripe3")
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
            
            if (this.done) {
                return false
            }

            if (this.state == 0) {
                this.stripes[0].end = this.getStripeDefinition(0)
                this.stripes[1].end = this.getStripeDefinition(1)
                this.stripes[2].end = this.getStripeDefinition(2)
                
                this.setStripe(this.stripes[0], "end")
                this.setStripe(this.stripes[1], "end")
                this.setStripe(this.stripes[2], "end")
            } else if (this.state == 1) {
                this.stripes[0].visible = false
                this.stripes[1].visible = false
                this.stripes[2].end = this.getStripeDefinition(2)
                this.setStripe(this.stripes[2], "end")
            }
        },
        getStripeDefinition(stripeIndex: number) : {x1: number, x2: number, y1: number, y2: number}  {
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
        setStripe(stripe : StripeObject, which: "start" | "end") {
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
                this.state = 2
                this.gTimeline = gsap.timeline({
                    onComplete: () => {
                        // This is being done manually, because the next slide should move in slightly before the animation is done
                        // this.$emit("next", "stripes")
                        this.done = true
                    },
                    onUpdate: (e) => {
                    
                        // Safari bugfix for not updating the textPath
                        const tp = this.$el.querySelector("svg").querySelector("textPath")
                        tp.setAttribute("xlink:href", "#stripe3")
                        tp.setAttribute("href", "#stripe3")
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
                    ease: "bounce.out"
                })
                // Manually trigger the next slide
                setTimeout(() => {
                    this.done = true
                    
                    setTimeout(()=> {
                        this.$emit("next", "stripes")
                    }, 800)
                }, 1024)
            }
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.stripes-container {
    position: absolute;
    left: 0;
    right: 0;
    overflow: auto;
    top: 0;
    bottom: 0;
    user-select: none; 
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none; 
    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    
    &.__disableScroll {
        overflow: hidden;
    }

    svg {
        position: absolute;
        top: 0;
    }

    textpath,
    text {
        fill: #ddd;
        font-size: 16px;
        text-transform: uppercase;
        line-height: 1em;
        font-weight: 800;
        transform-origin: center;

        @media (min-width: 360px ) {
            font-size: 18px;
            translate: 0 2px;
        }
        @media (min-width: 480px ) {
            font-size: 24px;
            translate: 0 2px;
        }
        @media (min-width: 640px ) {
            font-size: 32px;
            translate: 0 2px;
        }
        @media (min-width: 768px ) {
            font-size: 40px;
            translate: 0 4px;
        }
        @media (min-width: 960px ) {
            font-size: 48px;
            translate: 0 4px;
        }
        @media (min-width: 1200px ) {
            font-size: 58px;
            translate: 0 6px;
        }
        @media (min-width: 1360px ) {
            font-size: 64px;
            translate: 0 8px;
        }
        @media (min-width: 1800px ) {
            font-size: 80px;
            translate: 0 8px;
        }
    }
}

// This element is used to push the height of the parent container
// so that it will be possible to scroll that container, which is desires for triggering the animation
.stripes-scroll-container {
    height: calc(100% + 1px);
    width: 8px;
    background-color: transparent;
}

.stripe {
    stroke: $black;
    fill: none;
    stroke-width: 80px;
    stroke-linecap: round;

    &.__isHidden {
        stroke: transparent;
    }

    @media (min-width: 480px ) {
        font-size: 96px;
    }

    @media (min-width: 768px ) {
        stroke-width: 128px;
    }
}
</style>
