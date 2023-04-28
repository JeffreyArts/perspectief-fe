<!-- 
    Made possible with the help of Matt Gross
    https://codepen.io/mattgrosswork/pen/VwprebG
    https://codepen.io/mattgrosswork/pen/bGgWGxy
 -->
<template>
    <span class="slider" @mousedown="activateSlider" @touchstart="activateSlider" ref="slider">
        <div class="slider-button" :style="offset"></div>
        <div class="slider-background" :style="sliderColor"></div>
    </span>
</template>


<script lang="ts">
import chroma from "chroma-js"

export default {
    name: "tomato-slider",
    props: {
        modelValue: {
            type: String,
            required: true
        },
        colorRange: {
            type: Array as () => Array<string>,
            required: true
        },
    },
    data() {
        return {
            mousedown: false,
            perc: 0,
            mobile: false
        }
    },
    computed: {
        sliderPosition() {
            return {
                left: this.modelValue[0] + "px",
                top: this.modelValue[1] + "px"
            }
        },
        offset() {
            if (this.mobile) {
                return `left: ${this.perc}%`
            }
            return `top: ${this.perc}%`
        },
        sliderColor() {
            let direction = "to bottom"
            if (this.mobile) {
                direction = "to right"
            }
            let string = `background-image: linear-gradient(${direction}, `
            this.colorRange.forEach((color, index) => {
                string += color
                if (index < this.colorRange.length - 1) {
                    string += ", "
                }
            })
            string += ")"
            return string
        }
    },
    mounted() {
        window.addEventListener("resize", this.setMobile)
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.setMobile)
    },
    methods: {
        setMobile() {
            if (window.innerWidth < 768) {
                this.mobile = true
            } else {
                this.mobile = false
            }
        },
        updateValue() {
            const scale = chroma.scale(this.colorRange)
            // console.log(scale(this.perc/100).hex())
            this.$emit("update:modelValue", scale(this.perc/100).hex())
        },
        setY(e: MouseEvent | TouchEvent) {
            const slider = this.$refs.slider as HTMLElement
            const height = slider.clientHeight
            const offsetTop = slider.getBoundingClientRect().y
            let y = 0
            let clientY = 0
            
            if (typeof TouchEvent !== "undefined" && e instanceof TouchEvent) {
                clientY = e.touches[0].clientY
            } else if (e instanceof MouseEvent) {
                clientY = e.clientY 
            }
            if (clientY > offsetTop) {
                y = clientY - offsetTop
                if (clientY > offsetTop + height) {
                    y = height
                }
            }
            
            if (y < 0) {
                y = 0
            }
            
            return y
        },
        setX(e: TouchEvent | MouseEvent) {
            const slider = this.$refs.slider as HTMLElement
            const width = slider.clientWidth
            const offsetLeft = slider.getBoundingClientRect().x
            let x = 0
            let clientX = 0
            
            if (typeof TouchEvent !== "undefined" && e instanceof TouchEvent) {
                clientX = e.touches[0].clientX
            } else if (e instanceof MouseEvent) {
                clientX = e.clientX 
            }

            if (clientX > offsetLeft) {
                x = clientX - offsetLeft

                if (clientX > (offsetLeft + width)) {
                    x = width
                }
            }
            
            if (x < 0) {
                x = 0
            }

            return x
        },
        activateSlider(e: TouchEvent | MouseEvent) {
            this.mousedown = true
            this.updateSlider(e)
            
            if (typeof TouchEvent !== "undefined" && e instanceof TouchEvent) {
                window.addEventListener("touchmove", this.updateSlider)
                window.addEventListener("touchend", this.deactivateSlider)
            } else {
                window.addEventListener("mousemove", this.updateSlider)
                window.addEventListener("mouseup", this.deactivateSlider)
            }
        },
        deactivateSlider(e: TouchEvent | MouseEvent) {
            this.mousedown = false

            if (typeof TouchEvent !== "undefined" && e instanceof TouchEvent) {
                window.removeEventListener("touchmove", this.updateSlider)
                window.removeEventListener("touchend", this.deactivateSlider)
            } else {
                window.removeEventListener("mousemove", this.updateSlider)
                window.removeEventListener("mouseup", this.deactivateSlider)
            }
        },
        updateSlider(e: MouseEvent | TouchEvent) {
            const slider = this.$refs.slider as HTMLElement
            // set height to e.target height
            let size = slider.clientHeight
            let v = this.setY(e)
            if (this.mobile) {
                size = slider.clientWidth
                v = this.setX(e)
            }

            // set perc to e.clientY / height
            this.perc = v / size * 100
            this.updateValue()
        }
    }
}

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.slider {
    width: 100%;
    height: 32px;
    position: relative;
    display: block; 
}

.slider-button {
    width: 8px;
    height: 100%;
    margin-top: -4px;
    display: block; 
    border-radius: 4px;
    position: absolute;
    background-color: $grey
}

.slider-background {
    width: 100%;
    height: calc( 100% - 8px);
    border-radius: 8px;
}

@media all and (min-width: 768px) {
    .slider {
        height: 100%;
        width: 32px;
    }

    .slider-button {
        height: 8px;
        width: 100%;
        margin-left: -4px;
        margin-top: 0;
    }
    .slider-background {
        height: calc(100% + 8px);
        width: calc( 100% - 8px);
        border-radius: 8px;
    }

}
</style>