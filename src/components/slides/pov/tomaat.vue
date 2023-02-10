<template>
    <div class="container tomato" ref="container">
        <!-- <h1 class="tomato-title">
            Tomaat
        </h1> -->
        <div class="tomato-intro-container">
            <p class="tomato-intro">De informatie omtrent een tomaat bestaat onder andere uit expliciet sensoriële informatie zoals smaak of kleur. 
                Maar ook minder expliciete dingen zijn net zo goed onderdeel van de informatie omtrent een tomaat. 
                Zo heb je bijvoorbeeld een idee over de context waar je een tomaat in zou verwachten. 
                Zoals bijvoorbeeld een <glitch 
                :duration="480" 
                :delay="3200" 
                :repeat="999" 
                :opacity-duration="144" 
                :position-jumps="4" 
                :inputs="wordList1"
                :glitch-jumps="6" 
                :glitch-offset="8" />, maar evengoed ook waar je een tomaat totaal niet zou verwachten, 
                zoals op een <glitch 
                :duration="640" 
                :delay="2400" 
                :repeat="999" 
                :opacity-duration="144" 
                :position-jumps="4" 
                :inputs="wordList2"
                :glitch-jumps="6" 
                :glitch-offset="8" />. Deze informatie lijkt op het eerste oog vrij objectief.</p>
        </div>

        <div class="tomato-illustration">
            <svg @click="startAnimation" class="svg-tomato" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 645 742" style="enable-background:new 0 0 645 742;" xml:space="preserve">
                <rect id="rectangle" x="64" y="117.2" width="517" height="516.3"/>
                <circle id="circle" cx="322.5" cy="375.3" r="258.1"/>
                <path id="body" :style="`fill:${tomatoColor}`" d="M285.4,632.9c62.2,2.2,115.9-11.2,147.7-26.8s72-30.9,106.1-69.8c34-38.9,46.1-128.4,26.4-193.7 c-19.7-65.3-58.6-125.3-138.3-156.6c-79.7-31.3-187-22.4-244.8,11.6c-57.7,34-105.2,83.7-114.6,170.5 c-9.4,86.8,2.7,149.4,51.5,202.7C168.1,624,223.2,630.7,285.4,632.9z"/>
                <path id="crown" :style="`fill:${crownColor}`" d="M379.3,201.8c-14.5-2-23.8-1-37.7-9.6c-13.9-8.6-34.9-23.5-45.6-55c-10.8-31.5-0.2-99.7,3.5-114.6 c3.7-14.9,5.5-26.3,7.8-19c2.3,7.2-9.3,47.4,4,96.4c13.3,49,36.4,60.9,36.4,60.9s10.2-49.5,15.7-64.2c5.5-14.7,22.8-35.6,23.3-50.9 c0.5-15.3,6.8-32,8.7-21.1c1.8,10.9,0.9,28.4-5.6,49c-6.5,20.5-30.1,59.2-15.1,95.8c2.2,19.3,22.5-13.5,30.8-30.4 c8.4-16.9,32.2-36.1,43.6-40.2c11.3-4.1,6.9,4.3,0.2,7.8c-6.8,3.5-23.5,13.6-32.1,38.1s-6.4,40.4-6.4,40.4s20.9-23.8,65.6-37.4 c44.7-13.6,73.4-13.9,81.4-12.1c8,1.8,9.6,2.5-2,5C544,143.2,517,137,495.2,156s-22.2,35.4-35.9,40.4c-13.7,5-25.8,25.2-37.6,19.9 C409.8,210.9,390.8,203.4,379.3,201.8z"/>
            </svg>
            
            <div class="tomato-slide" id="tomato1">
                <span class="tomato-cta">
                    Zo heeft een tomaat bijvoorbeeld een groen kroontje bovenop.
                </span>
            </div>

            <div class="tomato-slide" id="tomato2">
                <span class="tomato-cta">
                    Moeten zowel de tomaat als het kroontje de “juiste” kleur hebben
                </span>

                <div class="tomato-sliders-container">
                    <div class="tomato-slider">
                        <tomato-slider v-model="tomatoColor" :color-range="['#f00','#f78a29','#3cbe28']" />
                    </div>
                    <div class="crown-slider">
                        <tomato-slider v-model="crownColor" :color-range="['#32492f','#309428','#24fc08']" />
                    </div>
                </div>
            </div>

            <div class="tomato-slide" id="tomato3">
                <span class="tomato-cta">
                    Als ook de juiste vorm
                </span>
            </div>


            <div class="tomato-slide" id="tomato4">
                <div class="circle-content">
                    Maar al deze ogenschijnlijke objectiviteit is vooral afhankelijk van jouw standpunt. 
                    Want hoewel we in Nederland tomaten vooral kennen zoals hiervoor beschreven, 
                    bestaan ze in vele verschillende kleuren, vormen & smaken.
                </div>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import Glitch from "./../../glitch.vue"
import TomatoSlider from "./../../tomato-slider.vue"
import { MorphSVGPlugin } from "./../../../assets/gsap/MorphSVGPlugin.js"
import { ScrollTrigger } from "./../../../assets/gsap/ScrollTrigger.js"
import _ from "lodash"
gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(ScrollTrigger)


export default defineComponent({
    name: "pov-tomaat",
    components: { Glitch, TomatoSlider },
    data: () => {
        return {
            wordList1:["keuken","groenteboer","tuinkas"],
            wordList2:["bouwplaats","appelflap","duikplank"],
            tomatoColor: "#fc2c0d",
            crownColor: "#309528",
        }
    },
    computed: {
       
    },
    mounted() {

        // SET DEFAULTS
        gsap.set("#crown", {svgOrigin: "301px 379px", rotate: 180})
        gsap.set("#tomato2 .tomato-sliders-container", {x: "-100%"})
        ScrollTrigger.defaults({
            scroller: ".pov-page",
        })

        // PIN TOMATO Illustration FOR 10 PAGE SLIDES
        gsap.to(".svg-tomato",{
            scrollTrigger:{
                trigger: ".svg-tomato", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                id:"Tomato",
                pin: true,
                end: "+=1000%"
            },
            rotate: 0,
            duration: 2.24,
            ease: "elastic.out(1, 0.3)"
        })

        //
        // Crown animation
        //
        gsap.to("#crown",{
            scrollTrigger:{
                trigger: "#tomato1  ", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                start: "20% top",
                end: "bottom 20%",
                // scrub: true,
            },
            rotate: 0,
            duration: 2.24,
            ease: "elastic.out(1, 0.3)"
        })

        gsap.to("#tomato1",{
            scrollTrigger:{
                trigger: "#tomato1", // start the animation when ".box" enters the viewport (once)
                start: "top top",
                end: "bottom 20%",
                // markers: true,
                // scrub: true,
                pin: true,
            },
            opacity: 1,
            duration: 2.44,
            ease: "power4.out"
        })

        //
        // Crown animation END
        //

        //
        // Color slides START
        //

        gsap.to("#tomato2 .tomato-cta",{
            scrollTrigger:{
                trigger: "#tomato2", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                start: "top top",
                end: "bottom 20%",
                id:"Slide2",
                pin: true,
            },
            opacity: 1,
            duration: 1.28,
            ease: "power4.out"
        })
        
        gsap.to("#tomato2 .tomato-sliders-container",{
            scrollTrigger:{
                trigger: "#tomato2", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                start: "top top",
                end: "bottom 20%",
                id:"sliders",
                // pin: true,
            },
            opacity: 1,
            x: 0,
            delay: 0.64,
            duration: 1.28,
            ease: "power4.out"
        })

        //
        // Color slides END
        //

        //
        // Shape shift START
        //
        const tlShapeShift = gsap.timeline( {
            scrollTrigger:{
                trigger: "#tomato3", // start the animation when ".box" enters the viewport (once)
                // markers: true,
                start: "top top",
                end: "center top",
                id:"shape-shifter",
                onLeave: ({progress, direction, isActive}) => {
                    tlShapeShift.pause()
                    tlShapeShift.kill()
                    // console.log("KILL")
                    // gsap.to("#body",{
                    //     morphSVG: {shape: "#circle"}, 
                    //     duration: 1.28,
                    //     ease: "power4.out"
                    // })
                }
            },
            repeat:-1
        }).to("#body",{
            morphSVG: {shape: "#circle"}, 
            duration: 1.28,
            ease: "power4.out"
        }).to("#body",{
            morphSVG: {shape: "#rectangle"}, 
            duration: 1.28,
            ease: "power4.out",
        }).to("#body",{
            morphSVG: {shape: "#body"}, 
            duration: 1.28,
            ease: "power4.out",
        })

        //
        // Shape shift END
        //

        // gsap.to("#body", {, ease: "bounce.out"})
        gsap.to("#body",{
            scrollTrigger:{
                trigger: "#tomato4", // start the animation when ".box" enters the viewport (once)
                markers: true,
                start: "top top",
                end: "center top",
                id:"circle-text",
                // pin: true,
            },
            duration: 1.28,
            ease: "power4.out"
        })
        


    },
    methods: {
        startAnimation() {
            // gsap.to("#body", {morphSVG: {shape: "#circle"}, duration: 1.28, ease: "bounce.out"})
            gsap.to("#crown", {rotate: 180, duration: 1.28, ease: "bounce.out"})
        }
        
    }

})
</script>

<style lang="scss">
@import "./../../../assets/scss/variables.scss";
.tomato {
    text-align: center;
    &.container {
        max-width: 800px;
    }
}
    
.svg-tomato {
    max-width: 100%;
    max-height: 100vh;
    padding-top: 64px;
    margin: auto;
    position: relative;
    
    #body {
        fill: #FF2B22;
    }
    #rectangle, #circle {
        fill: transparent;
    }

    #crown {
        fill: #309528;
        transform-origin: 301px 379px;
    }
}

.tomato-title {
    text-align: center;
    width: 100%;
    font-size: 48px;
    text-transform: capitalize;
    color: #FF2B22;
}

.tomato-intro {
    text-align: center;
    display: inline-block;
}

.tomato-intro-container {
    display: flex;
}

.tomato-illustration {
    position: relative;
}

.tomato-slide {
    height: 100vh;
    display: block;
    position: relative;
}

.tomato-cta {
    font-family: $accentFont;
    font-size: 36px;
    line-height: 48px;
    z-index: 1;
    position: relative;
    display: inline-block;
}

#tomato1 {
    margin-top: -1100vh;
    width: 70%;
    height: 50vh;
    text-align: left;
    opacity: 0;
    // height: 50vh;
    // outline: 1px solid #f90;
    .tomato-cta {
        margin-top: 128px;
    }
}

#tomato2 {
    height: 100vh;
    .tomato-cta {
        opacity: 0;
        width: 80%;
        text-align: right;
        right: 0;
        bottom: 64px;
        position: absolute;
    }
}

#tomato3 {
    height: 100vh;
    
    .tomato-cta {
        // opacity: 0;
        left: 0;
        right: 0;
        text-align: center;
        bottom: 32px;
        position: absolute;
    }
}
#tomato4 {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 32px;
    padding-top: 320px;
}

.tomato-sliders-container {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 25vh;
    height: 50vh;
    justify-content: center;
    align-items: center;
    width: 128px;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    padding: 16px 8px 24px 16px;
    border-radius: 16px;
}
.tomato-slider,
.crown-slider {
    height: 100%;
}

.circle-content {
    clip-path: circle(100%);
    width: 50%;
    margin: auto;
}
</style>
