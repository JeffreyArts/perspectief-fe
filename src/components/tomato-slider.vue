<!-- 
    Made possible with the help of Matt Gross
    https://codepen.io/mattgrosswork/pen/VwprebG
    https://codepen.io/mattgrosswork/pen/bGgWGxy
 -->
<template>
    <span class="slider" @mousedown="activateSlider" ref="slider">
        <div class="slider-button" :style="`top: ${perc}%`"></div>
        <div class="slider-background" :style="sliderColor"></div>
    </span>
</template>


<script lang="ts">
import chroma from "chroma-js"

export default {
    name: "tomato-slider",
    props: {
        modelValue: {
            type: Array,
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
            perc: 0
        }
    },
    computed: {
        sliderPosition() {
            return {
                left: this.modelValue[0] + "px",
                top: this.modelValue[1] + "px"
            }
        },
        sliderColor() {
            let string ="background-image: linear-gradient(to bottom, "
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
        // this.emit = defineEmits(["update:modelValue"])
            
    },
    beforeUnmount() {
        // this.cancelGlitch()
    },
    methods: {
        updateValue(value) {
            const scale = chroma.scale(this.colorRange)
            console.log(scale(this.perc/100).hex())
            this.$emit("update:modelValue", scale(this.perc/100).hex())
        },
        setY(e: MouseEvent) {
            const height = this.$refs.slider.clientHeight
            const offsetTop = this.$refs.slider.offsetParent.offsetTop
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
        activateSlider(e) {
            this.mousedown = true
            this.updateValue([e.clientX, e.clientY])
            window.addEventListener("mousemove", this.updateSlider)
            window.addEventListener("mouseup", this.deactivateSlider)
        },
        deactivateSlider(e) {
            this.mousedown = false
            window.removeEventListener("mousemove", this.updateSlider)
            window.removeEventListener("mouseup", this.deactivateSlider)
        },
        updateSlider(e: MouseEvent) {
            // set height to e.target height
            const height = this.$refs.slider.clientHeight
            const y = this.setY(e)
            // set perc to e.clientY / height
            this.perc = y / height * 100
            // console.log("Offset top",offsetTop,"height", height)
            // console.log("P", this.perc,"%", y)
            this.updateValue([e.clientX, e.clientY])
        }
    }
}

</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";
.slider {
    height: 100%;
    width: 32px;
    position: relative;
    display: block; 
}

.slider-button {
    height: 8px;
    width: 100%;
    margin-left: -4px;
    display: block; 
    border-radius: 4px;
    position: absolute;
    background-color: $grey
}

.slider-background {
    height: calc(100% + 8px);
    width: calc( 100% - 8px);
    border-radius: 8px;
}
</style>