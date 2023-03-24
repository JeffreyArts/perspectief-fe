<template>
    <div class="introduction-story-container">
        <div class="introduction-story">
<!-- {{ paragraphIndex }} -->
<!-- {{ chapterIndex }} -->
            <div class="chapter">
                <span class="paragraph"
                    :class="[paragraphIndex >= pIndex ? '__isActive' : '']" 
                    ref="paragraph" 
                    v-for="paragraph, pIndex in chapter" 
                    :key="pIndex">
                    <span class="word" v-for="word, wordIndex in displayParagraph(paragraph)" :key="wordIndex" v-html="word" />
                </span>
            </div>

        </div>
        <div class="introduction-navigation">
            <nav-keys @next="nextState" @prev="prevState" />
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import navKeys from "@/navigation-keys.vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "introduction-story",
    components: { navKeys },
    data() {
        return {
            transitionDuration: 1600,
            story: [
                [
                    "In een wereld waarin er meer informatie wordt verspreid per minuut dan dat je in een leven tot je kunt nemen.",
                    "Is het niet verwonderlijk dat niet alle informatie even waardevol is.",
                    "Ja, ik kan je vertellen dat wombats de enige dieren ter wereld zijn die vierkante drollen poepen.",
                    "Of dat de afstand van onze planeet tot de maan minder dan 10x de omtrek van de aarde is.",
                    "Maar de kans is groot dat geen van deze informatie voor jou van grote waarde is.",
                ],
                [
                    "Als mens ben ik geïnteresseerd geraakt in wat het is dat iets waardevol maakt.",
                    "Binnen dit werk wil ik het daarbij hebben over een specifiek onderwerp: informatie.",
                    "Informatie — dan wel kennis — is iets waar we sinds de opkomst van digitale technologie een overschot aan hebben.",
                    "Het internet vormt daarbij de marktplaats voor het uitwisselen van deze (digitale) informatie.",
                    "De vraag komt voort uit de wens om bepaalde dingen te willen weten, en het aanbod vormt de informatie die we via websites en andere digitale media tot ons nemen.",
                ],
                [
                    "Er zijn vele partijen die in deze markt opereren,",
                    "en er is een nog groter aanbod van individuen die bij deze partijen een rol vervullen.",
                    "Ieder bericht dat je op een sociaal medium deelt, draagt bij aan de databank van dit platform.",
                    "Hoe groter de hoeveelheid informatie die deze partij bezit, hoe waardevoller deze partij wordt.",
                ],
                [
                    "De komende 15 minuten wil ik je graag meenemen op een ontdekkingsreis naar de waardebepaling van deze informatie.",
                    "Want het hebben van veel informatie staat niet gelijk aan het hebben van goede informatie.",
                    "Wat maakt informatie immers goed of slecht?",
                    "Waarom vinden “we” het een belangrijker dan het ander?",
                    "Hoe wordt deze informatie <s>gᷟeͥbᷤ</s>ruikt?",
                ]
            ],
            paragraphIndex: 0,
            chapterIndex: 0
        }
    },
    computed: {
        chapter() {
            return this.story[this.chapterIndex]
        }
    },
    mounted() {
        this.animateNewChapter()
        this.animateNewParagraph()
    },
    methods: {
        displayParagraph(paragraph: string){
            return _.map(paragraph.split(" "), word => { return word + "&nbsp;"})
        },
        checkMaxParagraph() {
            if(this.paragraphIndex > this.story[this.chapterIndex].length-1){
                gsap.to((this.$refs.paragraph as Array<Element>), {
                    duration: .48,
                    opacity: 0,
                    scale: 1.6,
                    ease: "power2.out",
                    onComplete: () => {
                        this.chapterIndex++
                        this.paragraphIndex = 0
                        gsap.set((this.$refs.paragraph as Array<Element>), {
                            opacity: 1,
                            scale: 1,
                        })
                        
                        this.animateNewChapter()
                        this.animateNewParagraph()
                    }
                })
                // this.animateNewChapter()
            }
        },
        animateNewChapter() {
            setTimeout(() => {
                console.log("animateNewChapter")
                _.each((this.$refs.paragraph as Array<Element>), (paragraph: Element, index: number) => {
                    // if has class __isActive
                    gsap.set(paragraph.children, {
                        opacity: 0,
                        y: 16,
                    })

                    if (paragraph.classList.contains("__isActive")) {
                        // gsap.to(paragraph.children, {
                        //     duration: .48,
                        //     opacity: 1,
                        //     y: 0,
                        //     stagger: 0.024,
                        //     ease: "power2.out",
                        // })
                    } else {
                        
                    }
                })  
            })
        },
        animateNewParagraph() {
            setTimeout(() => {
                const paragraphs = this.$el.querySelectorAll(".paragraph.__isActive")
                const lastParagraph = paragraphs[paragraphs.length-1]

                if (!lastParagraph) {
                    return
                }

                // setTimeout(() => {
                gsap.to(lastParagraph.children, {
                    duration: .48,
                    opacity: 1,
                    y: 0,
                    stagger: 0.024,
                    ease: "power2.out",
                })
            })
        },
        nextState() {
            this.paragraphIndex++
            this.checkMaxParagraph()

            // setTimeout(() => {

            this.animateNewParagraph()
            // })
        },
        prevState() {
            this.paragraphIndex--
            if(this.paragraphIndex < 0){
                this.paragraphIndex = 0
                if ( this.story[this.chapterIndex-1]) {
                    this.chapterIndex--
                    // setTimeout(() => {
                    this.animateNewChapter()
                    this.animateNewParagraph()
                    // })
                }
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.introduction-story-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
}

.introduction-story {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: --x;
    z-index: 2023;
    position: relative;
}

.paragraph {
    display: inline;
    
    @media (min-height: 400px) {
        display: block;
        margin-bottom: 16px;
    }
    @media (min-width: 600px) {
        display: block;
        margin-bottom: 16px;
    }
}

.word {
    display: inline-block;
    // margin-right: .48em;
    opacity: 0;
}

.chapter {
    width: calc(100% - 96px);
    margin-top: -128px;
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
    text-shadow: var(--x) -1px 1px rgba(255, 255, 255, .64);
    
    @media (min-width: 600px) {
        // max-width: 800px;
        width: calc(100% - 256px);
        font-size: 18px;
    }
}

</style>
