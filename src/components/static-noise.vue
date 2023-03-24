<template>
    <div class="wrapper">
        <figure ref="canvas" :style="{backgroundImage: `url('/images/snow/static-${index}.jpg')`}">&nbsp;</figure>
    </div>
  </template>
  
<script lang="ts">

import { defineComponent } from "vue"
import _ from "lodash"

export default defineComponent({
    name: "static-noise",
    data: () => {
        return {
            index: 1,
            amount: 8, // This number corrresponds to the amount of images in the assets/images/snow folder
        }
    },
    mounted() {
        this.index = _.random(1, this.amount)
        // preload all the images
        for (let i = 1; i <= this.amount; i++) {
            const img = new Image()
            img.src = `./images/snow/static-${i}.jpg`
        }
        
        this.changeStaticNoise()
    },
    methods: {
        changeStaticNoise() {
            this.index += 1
            if (this.index > this.amount) {
                this.index = 1
            }
            setTimeout(() => {
                this.changeStaticNoise()
            }, 100)
        },
    },
})
</script>
  
<style lang="scss" scoped>
  figure {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    margin: 0;
  }
  </style>
  