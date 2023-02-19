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
            type: Array,
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
            console.log(scale(this.perc/100).hex())
            this.$emit("update:modelValue", scale(this.perc/100).hex())
        },
        setY(e: MouseEvent) {
            const height = this.$refs.slider.clientHeight
            const offsetTop = this.$refs.slider.getBoundingClientRect().y
            let y = 0
            if (e.clientY > offsetTop) {
                y = e.clientY - offsetTop
                if (e.clientY > offsetTop + height) {
                    y = height
                }
            }

            if (y < 0) {
                y = 0
            }

            return y
        },
        setX(e: TouchEvent | MouseEvent) {
            const width = this.$refs.slider.clientWidth
            const offsetLeft = this.$refs.slider.getBoundingClientRect().x
            let x = 0
            let clientX = e.clientX
            if (e instanceof TouchEvent) {
                clientX = e.touches[0].clientX
            }
            console.log(clientX, e instanceof TouchEvent)
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
            
            if (e instanceof TouchEvent) {
                window.addEventListener("touchmove", this.updateSlider)
                window.addEventListener("touchend", this.deactivateSlider)
            } else {
                window.addEventListener("mousemove", this.updateSlider)
                window.addEventListener("mouseup", this.deactivateSlider)
            }
        },
        deactivateSlider(e: TouchEvent | MouseEvent) {
            this.mousedown = false

            if (e instanceof TouchEvent) {
                window.removeEventListener("touchmove", this.updateSlider)
                window.removeEventListener("touchend", this.deactivateSlider)
            } else {
                window.removeEventListener("mousemove", this.updateSlider)
                window.removeEventListener("mouseup", this.deactivateSlider)
            }
        },
        updateSlider(e: MouseEvent | TouchEvent) {
            // console.log(e)
            // set height to e.target height
            let size = this.$refs.slider.clientHeight
            let v = this.setY(e)
            if (this.mobile) {
                size = this.$refs.slider.clientWidth
                v = this.setX(e)
            }
            // console.log(v, size, this.mobile)
            // set perc to e.clientY / height
            this.perc = v / size * 100
            this.updateValue()
        }
    }
}

</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";
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