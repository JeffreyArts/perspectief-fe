<template>
    <div>
        <svg version="1.1" class="icon-checkmark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 320 320" style="enable-background:new 0 0 320 320;" xml:space="preserve">
            <polyline ref="checkmark" points="66.4,178.3 160,264.7 277.6,115.6 "/>
        </svg>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
  
export default defineComponent({
    name: "iconCheckmark",
    components: {  },
    data() {
        return {
            checkmark: null as SVGPathElement | null
        }
    },
    mounted() {
        this.checkmark = this.$refs["checkmark"] as SVGPathElement

        gsap.fromTo(this.checkmark, {
            strokeDasharray: 320,
            strokeDashoffset: 320
        }, {
            strokeDasharray: 320,
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.inOut",
        })
    }
})
</script>
<style lang="scss">
.icon-checkmark {
    fill:none;
    stroke:#333;
    stroke-width:32;
    stroke-linecap:round;
    stroke-miterlimit:10;
}
</style>