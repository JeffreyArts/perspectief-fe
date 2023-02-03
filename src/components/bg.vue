<template>
    <div class="bg-container">
        <div class="bg bg-version1" ref="version1" >
            <!-- <div class="spotlight" ref="spotlight"></div> -->
        </div>

        <svg version="1.0" 
            class="bg-grid"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px" 
            :viewBox="`0 0 ${vpWidth} ${vpHeight}`" 
            xml:space="preserve">
            <g class="floor" >
                <polyline 
                    class="horizontal-line" 
                    :points="`${line.x1} ${line.y1}, ${line.x2} ${line.y2}`" 
                    :key="index"
                    v-for="line, index in horizontalLines" />

                    <polyline 
                        class="vertical-line" 
                        :points="`${line.x1} ${line.y1}, ${line.x2} ${line.y2}`" 
                        :key="index"
                        :stroke-dashoffset="animationComplete ? 0 : line.dashOffset"
                        :stroke-dasharray="line.dashArray"
                        v-for="line, index in verticalLines" />
            </g>
            <g class="wall" >
                <polyline 
                    class="vertical-line" 
                    :points="`${line.x1} 0, ${line.x1} ${line.y1}`" 
                    :key="index"
                    :stroke-dashoffset="animationComplete ? 0 : -line.y1"
                    :stroke-dasharray="line.y1"
                    v-for="line, index in verticalLines" />
            </g>
        </svg>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "background-component",
    props: {
        version: {
            type: Number,
            required: false,
            default: 1,
        },
    },
    data: () => {
        return {
            currentVersion: 1,
            vpWidth: 0,
            vpHeight: 0,
            animationComplete: false,
            floorHeight: 180,
            horizontalLines: [] as Array<{
                x1: number,
                y1: number,
                x2: number,
                y2: number
            }>,
            verticalLines: [] as Array<{
                x1: number,
                y1: number,
                x2: number,
                y2: number,
                dashOffset: number,
                dashArray: number,
            }>,
        }
    },
    computed: {
    },
    watch: {
        version(newVersion) {
            this.currentVersion = newVersion
        }
    },
    unMounted() {
        window.removeEventListener("resize", this.resize)
    },
    mounted() {
        
        window.addEventListener("resize", this.resize)
        this.resize()

        this.setHorizontalLines()
        this.setVerticalLines()

        document.addEventListener("mousemove", this.mouseMove)
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function (event) {
                this.tilt([event.beta, event.gamma])
            }, true)
        } else if (window.DeviceMotionEvent) {
            window.addEventListener("devicemotion", function (event) {
                this.tilt([event.acceleration.x * 2, event.acceleration.y * 2])
            }, true)
        } else {
            window.addEventListener("MozOrientation", function () {
                this.tilt([orientation.x * 50, orientation.y * 50])
            }, true)
        }

    },
    unMounted() {
        document.removeEventListener("mousemove", this.mouseMove)
    },
    methods: {
        resize() {
            this.vpWidth = window.innerWidth
            this.vpHeight = window.innerHeight
            this.setVerticalLines()
            this.setHorizontalLines()
            this.animate()
        },
        animate() {

            setTimeout(() => {
                gsap.timeline({
                    defaults: {
                        duration: 1.28,
                        ease: "ease.in"
                    }
                }).to(this.horizontalLines, {
                    x2: this.vpWidth,
                    stagger: .16,
                })
                setTimeout(() => {
                    _.each(this.verticalLines, (line,lineIndex) => {
                        gsap.timeline({
                            onComplete: () => {
                                if (lineIndex === this.verticalLines.length-1) {
                                    this.animationComplete = true
                                }
                            }})
                            .to(line, {
                                duration: .96,
                                dashOffset: 0,
                                ease: "ease.in",
                                delay: lineIndex * .032 + (this.horizontalLines.length-1)*0.08 - .32,
                            })
                            .to(this.$el.querySelectorAll(".wall .vertical-line")[lineIndex], {
                                strokeDashoffset: 0,
                                ease: "ease.out",
                                duration: 1.28
                            })
                    })
                }, 640)
            }, 1024)
        },
        mouseMove(e: MouseEvent) {
            let x = e.clientX 
            let y = e.clientY
            
            if (this.$refs?.spotlight && this.$refs.spotlight instanceof HTMLElement) {
                this.$refs.spotlight.style.setProperty("--size", "200vh")
                this.$refs.spotlight.style.setProperty("--x", x + "px")
            }
        },
        tilt([x, y]: [number, number]) {
            if (this.$refs?.spotlight && this.$refs.spotlight instanceof HTMLElement) {
                this.$refs.spotlight.style.setProperty("--size", "200vh")
                this.$refs.spotlight.style.setProperty("--x", x + "px")
            }
        },
        setHorizontalLines() {
            this.horizontalLines = []
            const amountOfLines = 6
            for (let i = 0; i < amountOfLines; i++) {
                var offset = this.floorHeight / amountOfLines
                let y = i === 0 ? 0 : offset * i - (1 - i/amountOfLines) * (offset * .25)
                this.horizontalLines.push({
                    x1: 0,
                    x2: this.animationComplete ? this.vpWidth : 0,
                    y1: this.vpHeight - this.floorHeight +  y ,
                    y2: this.vpHeight - this.floorHeight +  y
                })
            }
            _.reverse(this.horizontalLines)
        },
        setVerticalLines() {
            this.verticalLines = []
            let amountOfLines = 16
            if (this.vpWidth > 480) {
                amountOfLines = 24
            }
            if (this.vpWidth > 1024) {
                amountOfLines = 32
            }
            if (this.vpWidth > 1300) {
                amountOfLines = 48
            }
            
            const depth = this.vpWidth

            for (let i = 0; i < amountOfLines; i++) {
                var perc = i / amountOfLines
                var x2 = this.vpWidth / amountOfLines * i
                var x1 = x2 + depth * 2 * perc - depth
                
                let hypotenuse = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(this.floorHeight, 2))
                if (this.verticalLines[i-1]) {
                    hypotenuse = Math.sqrt(Math.pow(Math.abs(x1 - this.verticalLines[i-1].x1), 2) + Math.pow(this.floorHeight, 2))
                }
                hypotenuse = Math.abs(hypotenuse)*1.1
                
                this.verticalLines.push({
                    x1: x2,
                    x2: x1,
                    y1: this.vpHeight - this.floorHeight,
                    y2: this.vpHeight,
                    dashOffset: -hypotenuse,
                    dashArray: hypotenuse,
                })
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";
.bg-container {
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $accentColor;
}
.bg {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
}



.bg-version1 {
    background-image: linear-gradient( #ddd, #ddd calc(100% - 180px), #fff calc(100% - 64px), #fff calc(100%));
}

.spotlight {
    --size: 0;
    --x: 0px;
    --y: 0px;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, rgba(240,240,240,.64), transparent);
  transform: translate(-50%, -50%);
  z-index: 1990;
}

.vertical-line,
.horizontal-line {
    stroke: $grey;
    stroke-width: 1;
}
.bg-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

</style>
