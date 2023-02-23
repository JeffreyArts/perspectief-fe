<template>
    <div class="" ref="container">
        Pen
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import MorphSVGPlugin from "gsap/MorphSVGPlugin"
import FadeText from "./../../fade-text.vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "pov-pen",
    components: {
        FadeText
    },
    data: () => {
        return {
          
        }
    },
    computed: {
       
    },
    mounted() {
       
    },
    unmounted() {
       
    },
    methods: {
        isCompleted() {
            this.$emit("completed")
        }
    }

})
</script>

<style lang="scss">
@import "./../../../assets/scss/variables.scss";

</style>
