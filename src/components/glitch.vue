<!-- 
    Made possible with the help of Matt Gross
    https://codepen.io/mattgrosswork/pen/VwprebG
    https://codepen.io/mattgrosswork/pen/bGgWGxy
 -->
<template>
    <span class="glitch" @mouseenter="mouseOverGlitch" @mouseleave="mouseLeaveGlitch">
        <span ref="glitchLayer0" v-html="glitchedInput" />
        <span ref="glitchLayer1" v-html="glitchedInput" />
        <span ref="glitchLayer2" v-html="glitchedInput" />
    </span>
</template>

<script lang="ts">
export default {
    name: "glitch-component",
    props: {
        inputs: {
            type: Array,
            required: false
        },
        hover: {
            type: Boolean,
            required: false,
            default: false
        },
        duration: {
            type: Number,
            required: false,
            default: 800
        },
        delay: {
            type: Number,
            required: false,
            default: 4800,
            min: 64
        },
        positionJumps: {
            type: Number,
            required: false,
            default: 6
        },
        glitchJumps: {
            type: Number,
            required: false,
            default: 6
        },
        glitchOffset: {
            type: Number,
            required: false,
            default: 16
        },
        repeat: {
            required: false,
            type: Number,
            default: 0
        },
        opacityDuration: {
            type: Number,
            required: false,
            default: 128
        }
    },
    data() {
        return {
            glitchedInput: "" as string | undefined,
            clipPaths: [["polygon(0% 100%,100% 100%)"],["polygon(0% 100%,100% 100%)"],["polygon(0% 100%,100% 100%)"]],
            clipIndex: 0,
            textIndex: 0,
            startTime: 0,
            repeatIndex:0,
            timeouts: [] as Array<number>,
        }
    },
    watch: {
        repeat: {
            handler: function (val) {
                this.cancelGlitch()
                if (val === 0) {
                    this.glitchLayer(0)
                    this.glitchLayer(1)
                    this.glitchLayer(2) 
                } else {
                    this.glitchLayers()
                }
            },
            immediate: true
        },
        $slots: {
            handler: function (val) {
                if (!val.default) {
                    return
                }
                this.glitchedInput = val.default()[0].innerHTML
                this.cancelGlitch()
                this.glitchLayers()
            },
            immediate: true
        },
    },
    mounted() {
        if (this.inputs && this.inputs.length > 0) {
            this.glitchedInput = this.inputs[0] as string
        } else if (this.$slots && this.$slots.default) {
            const tmp = this.$slots.default() as Array<any>
            this.glitchedInput = tmp[0].innerHTML as string
        }
        this.cancelGlitch()
        this.glitchLayers()
    },
    beforeUnmount() {
        this.cancelGlitch()
    },
    methods: {
        generateGlitchMasksPath() {
            const number = Math.floor(Math.random() * 60)
            const points = []
            let x = 0
            let y = 0

            for (let i = 0; i < number; i++) {
                // Alternate between x and y
                if (i % 2) {
                    x = Math.floor(Math.random() * 100)
                } else {
                    y = Math.floor(Math.random() * 100)
                }

                points.push(`${x}% ${y}%`)
            }
            return `polygon(${points.join(",")})`
        },
        animateClipPath(domElement: HTMLElement, index = 0) {
            const clipPath = this.generateGlitchMasksPath()
            const delay = Math.ceil(this.duration / this.glitchJumps + Math.random() * (this.duration / this.glitchJumps / 4))
            domElement.style.setProperty("--path", clipPath)


            var timeout = setTimeout(() => {
                this.timeouts = this.timeouts.filter(index => index !== timeout)
                if (this.startTime + this.duration > Date.now()) {
                    this.animateClipPath(domElement, index + 1)
                } else {
                    domElement.style.setProperty("--path", "")
                    return
                }
            }, delay)
            this.timeouts.push(timeout)
        },
        animatePosition(domElement: HTMLElement, index = 0) {
            const position = {
                left: Math.floor(Math.random() * this.glitchOffset) - this.glitchOffset/2,
                top: Math.floor(Math.random() * this.glitchOffset) - this.glitchOffset/2,
            }

            position.left = position.left < 0 ? position.left - this.glitchOffset/2 : position.left + this.glitchOffset/2
            position.top = position.top < 0 ? position.top - this.glitchOffset/2 : position.top + this.glitchOffset/2
            const delay = Math.ceil(this.duration / this.positionJumps + Math.random() * (this.duration / this.positionJumps / 4))

            domElement.style.setProperty("translate", `${position.left}% ${position.top}%`)

            var timeout = setTimeout(() => {
                this.timeouts = this.timeouts.filter(index => index !== timeout)
                if (this.startTime + this.duration > Date.now() + delay) {
                    this.animatePosition(domElement, index + 1)
                } else {
                    domElement.style.setProperty("translate", "0 0")
                    return
                }
            }, delay) 
            this.timeouts.push(timeout)
        },
        animateOpacity(domElement: HTMLElement, inverted = false, layerIndex:number, index = 0) {
            
            let opacity =  index % 2 === 0 ? 1 : 0
            if (inverted === true) {
                opacity = index % 2 === 0 ? 0 : 1
            }

            domElement.style.setProperty("opacity", opacity.toString())
            let delay = Math.ceil(this.opacityDuration/2 + Math.random() * this.opacityDuration)
            if (inverted) {
                delay = Math.ceil(this.opacityDuration/4 + Math.random() * this.opacityDuration/2)
            }

            var timeout = setTimeout(() => {
                this.timeouts = this.timeouts.filter(index => index !== timeout)
                if (this.startTime + this.duration > Date.now() + delay) {
                    this.animateOpacity(domElement, inverted,layerIndex, index + 1)
                } else {
                    if (layerIndex == 0) {
                        domElement.style.setProperty("opacity", "1")
                    } else {
                        domElement.style.setProperty("opacity", "0")
                    }
                    return
                }
            }, delay)            
            this.timeouts.push(timeout)
        },
        glitchLayer(layerIndex: number) {
            // Set timestamp for this.startTime
            this.startTime = Date.now()
            

            // var minDelay = layerIndex === 0 ? this.duration / this.opacityJumps / 4 : this.duration / this.opacityJumps
            const targetLayer = this.$refs[`glitchLayer${layerIndex}`] as HTMLElement
            if (!targetLayer) {
                return
            }
             
            this.animatePosition(targetLayer)
            this.animateClipPath(targetLayer)
            this.animateOpacity(targetLayer, layerIndex === 0 ? false : true , layerIndex)
        },
        glitchLayers() {
            this.glitchLayer(0)
            this.glitchLayer(1)
            this.glitchLayer(2)
            
            var timeout1 = setTimeout(() => {
                this.repeatIndex++
                if (this.inputs && this.inputs.length > 0) {
                    this.textIndex = (this.textIndex + 1) % this.inputs.length
                    this.glitchedInput = this.inputs[this.textIndex] as string

                    if ((!this.repeat && this.textIndex === this.inputs.length - 1 ) ||
                        (this.repeatIndex > this.repeat *(this.inputs.length - 1)  && this.textIndex === this.inputs.length - 1 )) {
                        return
                    }
                } else {
                    if (this.repeat === 0 || this.repeatIndex > this.repeat) {
                        return
                    }
                }
                        
                var timeout2 = setTimeout(() => {
                    this.glitchLayers()
                    this.timeouts = this.timeouts.filter(timeout => timeout !== timeout2)
                    
                    if (this.inputs && this.inputs.length > 0) {
                        this.$emit("glitchChange", this.glitchedInput)
                    }
                }, this.delay)
                this.timeouts.push(timeout2)
                this.timeouts = this.timeouts.filter(timeout => timeout !== timeout1)
            }, this.duration*.8)

            this.timeouts.push(timeout1)
        },
        cancelGlitch() {
            this.$emit("glitchChange", this.glitchedInput)
            this.timeouts.forEach(timeout => {
                clearTimeout(timeout)
            })
            this.repeatIndex = 0
            this.timeouts = []
        },
        mouseOverGlitch() {
            if (this.hover) {
                this.glitchLayers()
            } 
        },
        mouseLeaveGlitch() {
            if (this.hover) {
                this.cancelGlitch()
            }
        }
    }
}

</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";
.glitch {
    position: relative;
    z-index: 1;
    > * {
        display: inline-block;  
        clip-path: var(--path);
        
        &:nth-child(1) {
            position: relative;
            z-index: 2;
            opacity: 0;
        }

        &:nth-child(2),
        &:nth-child(3) {
            position: absolute;
            clip-path: var(--path);
            top: 0;
            left: 0;
            z-index: -1;
        }
        
        &:nth-child(2) {
            color: $accentColor;
            // opacity: 0;
        }
        &:nth-child(3) {
            color: #fff;
            // opacity: 0;
        }
    }
}

</style>