<template>
    <div class="welcome-page-container" ref="container">
        <div class="welcome-page">
            <aside class="welcome-page-sidebar">
                <div class="introduction-block" ratio="1x1">
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                    <span>Introduction</span>
                </div>
                <div class="about-block-container">
                    <div class="about-block" ratio="1x1">
                        Dit project is gerealiseerd door Jeffrey Arts en mede mogelijk gemaakt met ondersteuning van Fonds ZOZ
                    </div>
                </div>
            </aside>
            <div class="welcome-page-content">
                <h1>Welkom</h1>
                <div class="welcome-page-content-bg">
                    <h1>Welkom</h1>
                    <p>In dit project wil ik je meenemen op een reis over de waarde van perceptie. Wat maakt iets waar, en hoe waar is iets eigenlijk? Hierbij wil ik het niet hebben over de monetaire waarde van goederen en diensten, maar over de waarde van kennis en informatie. Zeker met de opkomst van AI tools als Chat-GPT is dit een voor mij groeiende vraag. Is alle informatie even waardevol? En hoe verhoudt zich dat dan tot kennis? Op deze site wil ik mijn perceptie hierover met je delen door middel van een verhaal. Met daarop volgend een serie interactieve werken waarmee je verschillende onderwerpen vanuit verschillende perspectieven kunt waarnemen. De gekozen onderwerpen zijn gekozen op grond van persoonlijke interesses, en hoewel ik mijn best heb gedaan om zo veel mogelijk diversiteit aan te bieden in de onderwerpen en standpunten waar vandaan je de onderwerpen kunt waarnemen. Ben ook ik niet vrij van mijn eigen biases. Voel je dan ook uitgenodigd om zelf een onderwerp of standpunt toe te voegen. Dit kun je op ieder moment doen, door te klikken op de zwarte balk onderaan het scherm.</p>
                </div>

                <div class="welcome-page-button" @click="nextPage()">
                    <span>Begin tocht </span><icon type="chevron-right" />
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import Icon from "@/components/icon.vue"
import _ from "lodash"


export default defineComponent({
    name: "welcome-page",
    components: {
        Icon
    },
    data: () => {
        return {
            state: 0,
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
    },
    mounted() {
        gsap.set(".about-block-container", { x: "-100%"})
        gsap.set(".welcome-page-sidebar", {opacity: 0, x: "-100%"})
        
        gsap.fromTo(".about-block-container", 
            {x: "-100%" }, 
            {x: 0, duration: 1.28, ease: "power2.out" }
        )
        gsap.fromTo(".welcome-page-sidebar", 
            { opacity: 0}, 
            { opacity: 1, x: 0, duration: 1.28, ease: "power2.out" }
        )

        gsap.to(".welcome-page-content h1", 
            { opacity: 1, y: 0, duration: 1.28, delay:.16, ease: "power2.out"}
        )
        
        gsap.to(".welcome-page-content-bg", 
            { opacity: 1, x: 0, duration: 1.28, delay: .72, ease: "power2.out"}
        )

        gsap.to(".welcome-page-button", 
            { opacity: 1, x: 0, duration: 1.28, delay: 0.96, ease: "power2.out"}
        )
    },
    methods: {
        nextPage() {
            gsap.timeline({
                onComplete: () => {
                    this.$emit("next", "welcome-page")
                }
            }).to(".welcome-page-content h1",{ 
                opacity: 0,
                y: -128,
                duration: .96,
                ease: "power1.out"
            }).to(".welcome-page-content-bg",{ 
                opacity: 0,
                x: 256,
                duration: .96,
                delay: -.8,
                ease: "power1.out"
            })

            
            gsap.to(".welcome-page-button",{ 
                opacity: 0,
                x: 256,
                duration: .96,
                ease: "power1.out"
            })
            
            gsap.to(".welcome-page-sidebar",{ 
                opacity: 0,
                x: -256,
                duration: .96,
                ease: "power1.out"
            })

            gsap.to(".about-block-container",{ 
                opacity: 0,
                x: -256,
                duration: .96,
                ease: "power1.out"
            })
            // this.$emit("next", "welcome-page")
        }
       
    }

})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.welcome-page-container {
    width: 100%;
    height: 100%;
}
.welcome-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column-reverse;
    overflow: auto;
}
.welcome-page-sidebar {
    padding: 64px;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    perspective: 1024px;
}

.introduction-block {
    position: relative;
    font-size: 31px;
    // font-size: 41px;
    font-weight: 900;
    display: none;
    transition: $transitionDefault;
    &:hover {
        transform: rotate3d(-.5, 1, 0, 8deg);
    }

    span {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        &:nth-child(1) { top:0em;  color:#000; z-index: 16; }
        &:nth-child(2) { top:calc(0.64em * 1); color:#222; z-index: 15; }
        &:nth-child(3) { top:calc(0.64em * 2); color:#444; z-index: 14;}
        &:nth-child(4) { top:calc(0.64em * 3); color:#666; z-index: 13;}
        &:nth-child(5) { top:calc(0.64em * 4); color:#888; z-index: 12;}
        &:nth-child(6) { top:calc(0.64em * 5); color:#aaa; z-index: 11;}
        &:nth-child(7) { top:calc(0.64em * 6); color:#ccc; z-index: 10;}
        &:nth-child(8) { top:calc(0.64em * 7); color:#d7d7d7; z-index: 9;}
    }
}
.about-block {
    display: block;
    background-color: #111;
    color: #999;
    font-size: 11px;
    font-weight: 100;
    line-height: 24px;
    text-align: center;
    padding: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: $transitionDefault;
    &:hover {
        transform: rotate3d(.5, 1, 0, 8deg);
    }
}

.welcome-page-content {
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-flow: column;
    
    h1 {
        font-size: 64px;
        opacity: 0;
        font-weight: 900;
        translate: 0 -256px;
        margin-bottom: 32px;
        margin-top: 0;
        margin-left: 24px;
        display: none;
    }
    > h1 {
        // transition: $transitionDefault;
        margin-bottom: 0;
        text-shadow: var(--x) -1px 1px rgba(255, 255, 255, .32);

        &:hover {
            transform: rotate3d(1, -.32,0, 24deg);
            transform-origin: center bottom;
        }
    }
    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 32px;
        margin: 0;
        overflow: auto;
    }
}
.welcome-page-content-bg {
    padding: 32px;
    background-color: rgba(255,255,255,.8);
    opacity: 0;

    h1 {
        margin-left: 0;
        display: inline-block;
    }
}

.welcome-page-button {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(320px);
    opacity: 0;
    font-size: 32px;
    line-height:36px;
    margin-top: 32px;
    margin-bottom: -16px;
    span {
        display: inline-block;
        padding-right: 16px;
        transition: $transitionDefault;
    }
    .icon {
        transition: $transitionDefault;
        display: inline-block;
    }
    svg {
        height: 54px;
        translate: 0 4px;
    }

    &:hover {
        cursor: pointer;
        span {
            padding-right: 32px;
        }
        .icon {
            scale: 1.24;
        }
    }
}
@media screen and (min-width: 768px) {
    .welcome-page {
        flex-flow: row nowrap;
        padding: 32px;
    }
    .welcome-page-sidebar {
        max-width: 240px;
        padding: 0;
    }

    .welcome-page-content {
        width: calc(100% - 240px - 48px);
        margin-left: 48px;
        h1 {
            display: inline-block;
        }
    }
    .welcome-page-content-bg {
        transform:translate( 320px, 0);

        h1 {
            display: none;
        }
        p {
            max-height: calc( 100vh  - 320px);
        }
    }
    .introduction-block {
        display: inline-block;
    }

    .welcome-page-button {
        margin-top: 0;
        margin-bottom: 16px;
        justify-content: flex-end;
    }
}


@media screen and (min-width: 1024px) {
    .welcome-page-sidebar {
        max-width: 320px;
    }
    .welcome-page-content {
        width: calc(100% - 320px - 48px);
    }

    .introduction-block {
        font-size: 42px;
        // font-size: 55px;
    }

    .about-block {
        font-size: 12px;
        line-height: 32px;
    }
}
</style>
