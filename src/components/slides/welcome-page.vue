<template>
    <div class="welcome-page-container" ref="container">
        <div class="welcome-page">
            <aside class="welcome-page-sidebar">
                <div class="introduction-block">
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
                    <div class="about-block">
                        Dit project is gerealiseerd door Jeffrey Arts en mede mogelijk gemaakt met ondersteuning van Fonds ZOZ
                    </div>
                </div>
            </aside>
            <div class="welcome-page-content">
                <h1>Welkom</h1>
                <div class="welcome-page-content-bg">
                    <h1>Welkom</h1>
                    <p>
                        Afgelopen jaar heb ik onderzoek gedaan naar beeldvorming, en hoe dit bijdraagt aan de — in mijn optiek —  groeiende polarisatie in Nederland. Hieruit concludeer ik dat beeldvorming (je perceptie over een onderwerp) beïnvloed wordt door jouw standpunt in relatie tot dat onderwerp. Daarmee bepaalt jouw perspectief, het spectrum van jouw waarheid. Vanuit jouw standpunt is jouw waarheid immers altijd correct. Niemand op de wereld denkt dat haar/zijn waarheid onwaar is. Je perceptie heeft dus waarde, want jouw perspectief bepaalt jouw waarheid. Maar wanneer je anders kijk, deel je dan nog wel dezelfde waarheid? 
                    </p>
                    <p>
                        <br>
                    </p>
                    <p>
                        Het verhaal dat ik hierover mij jouw wil delen is samengevat in deze website en duurt ongeveer zo’n 15~30 minuten om door te nemen.
                    </p>
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
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
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
        gsap.registerPlugin(ScrollToPlugin)

        if(window.innerWidth < 768) {
            const welcomePageElement = this.$el.querySelector(".welcome-page")
            
            setTimeout(() => {
                welcomePageElement.scroll(0, -welcomePageElement.scrollHeight)
            })

            gsap.set(".welcome-page-content h1",{ opacity: 1, y: 0})
            
            gsap.set(".welcome-page-content-bg", {x: 0})
            gsap.fromTo(".welcome-page-content-bg",{opacity: 0}, { opacity: 1, duration: 1.28, ease: "power2.out"})

            gsap.set(".welcome-page-button", { opacity: 1, x: 0})
        } else {
            gsap.to(".welcome-page-content h1", 
                { opacity: 1, y: 0, duration: 1.28, delay:.16, ease: "power2.out"}
            )
            
            gsap.to(".welcome-page-content-bg", 
                { opacity: 1, x: 0, duration: 1.28, delay: .72, ease: "power2.out"}
            )
    
            gsap.to(".welcome-page-button", 
                { opacity: 1, x: 0, duration: 1.28, delay: 0.96, ease: "power2.out"}
            )
        }

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
        
        gsap.timeline({
            defaults: {
                duration: 0.96,
                stagger: .04,
                ease: "power1.in",
            }
        }).fromTo(".introduction-block span", {
            opacity: 0,
        },{
            opacity:1,
        })
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
    overflow-y: auto;
    overflow-x: hidden;
}

.welcome-page-sidebar {
    padding: 0;
    width: 100%;
    margin-top: 84px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    perspective: 1024px;
    
    @media (min-width: 768px) {
        margin-top: 0;
        padding: 64px;
    }
}

.introduction-block {
    position: relative;
    font-size: 31px;
    font-weight: 900;
    display: none;
    transition: $transitionDefault;
    aspect-ratio:1/1;
    
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
    color: #ddd;
    font-size: 11px;
    font-weight: 100;
    line-height: 24px;
    text-align: center;
    padding: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: $transitionDefault;
    aspect-ratio: 1/1;
    &:hover {
        transform: rotate3d(.5, 1, 0, 8deg);
    }
}

.welcome-page-content {
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-flow: column;
    max-width: 1280px;
    
    h1 {
        font-size: 64px;
        opacity: 0;
        font-weight: 900;
        translate: 0 -256px;
        margin-bottom: 32px;
        margin-top: 0;
        display: none;
        width: 100%;
        text-align: left;
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
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        margin: 0;
        overflow: auto;
    }
}

.welcome-page-content-bg {
    padding: 32px;
    background-color: rgba(255,255,255,.8);
    opacity: 0;
    align-items: center;
    display: flex;
    flex-flow: column;

    h1 {
        margin-left: 0;
        font-size: 36px;
        display: inline-block;
    }
    @media screen and (min-width: 400px) {
        h1 {
            font-size: 64px;
        }
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
    margin-top: 80px;
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
@media screen and (min-width: 640px) {
    .welcome-page-sidebar {
        padding: 32px;
        
    }
}
@media screen and (min-width: 768px) {
    .welcome-page {
        flex-flow: row nowrap;
        padding: 32px;
    }
    .welcome-page-sidebar {
        max-width: 240px;
        margin-top: 80px;
        padding: 0;
    }

    .welcome-page-content {
        width: calc(100% - 240px - 64px);
        margin-left: 64px;

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

    @media all and (max-height: 560px) {
        .about-block-container {
            display: none;
        }
    }
}


@media screen and (min-width: 1024px) {
    .welcome-page-sidebar {
        max-width: 320px;
    }

    .welcome-page-content {
        width: calc(100% - 320px - 48px);
        p {
            font-size: 16px;
            line-height: 32px;
        }
    }

    .introduction-block {
        font-size: 42px;
        // font-size: 55px;
    }

    .about-block {
        font-size: 12px;
        line-height: 32px;
    }

    @media all and (max-height: 640px) {
        .about-block-container {
            display: none;
        }
    }
}

@media screen and (min-width: 1440px) {
    .welcome-page {
        p {
            font-size: 18px;
            line-height: 32px;
        }
    }
}
</style>
