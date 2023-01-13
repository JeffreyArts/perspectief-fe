<template>
    <div class="introduction-story-container">
        <div class="introduction-story">
            {{chapter}}
        </div>
        <div class="introduction-navigation">
            <nav-keys @next="nextState" @prev="prevState" />
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import navKeys from "./navigation-keys.vue"


export default defineComponent({
    name: "introduction-story",
    components: { navKeys },
    props: {
    },
    data() {
        return {
            transitionDuration: 1600,
            story: [
                [
                    "In een wereld waarin er meer informatie wordt verspreid per minuut dan dat je in een mensenleven tot je kunt nemen.",
                    "Is het niet verwonderlijk dat niet alle informatie even waardevol is.",
                    "Ja, ik kan je vertellen dat wombats de enige dieren ter wereld zijn die vierkante drollen poepen.",
                    "Of dat de afstand van onze planeet tot de maan minder dan 10x de omtrek van de aarde is.",
                    "Maar de kans is groot dat geen van deze informatie voor jou van grote waarde is.",
                ],
                [
                    "Als mens ben ik geïnteresseerd geraakt in wat het is dat iets waardevol maakt.",
                    "Binnen dit project wil ik het daarbij hebben over een specifiek onderwerp: informatie.",
                    "Informatie — dan wel kennis — is iets waar we sinds de opkomst van digitale technologie een overschot aan hebben.",
                    "Het internet vormt daarbij de marktplaats voor het uitwisselen van deze (digitale) informatie.",
                    "De vraag komt voort uit de wens om bepaalde dingen te willen weten, en het aanbod vormt de informatie die we via websites en andere digitale media tot ons nemen.",
                ],
                [
                    "Er zijn vele partijen die in deze markt opereren, en er is een nog groter aanbod van individuen die bij deze partijen een rol vervullen.",
                    "Ieder bericht dat je op een sociaal medium deelt, draagt bij aan de databank van dit platform.",
                    "Hoe groter de hoeveelheid informatie die deze partij bezit, hoe waardevoller deze partij wordt.",
                ],
                [
                    "De komende 15 minuten wil ik je graag meenemen op een ontdekkingsreis naar de waardebepaling van deze informatie.",
                    "Want het hebben van veel informatie staat niet gelijk aan het hebben van goede informatie.",
                    "Wat maakt informatie immers goed of slecht?",
                    "Waarom vinden “we” het een belangrijker dan het ander?",
                ]
            ],
            paragraphIndex: 0,
            chapterIndex: 0
        }
    },
    computed: {
        chapter() {
            return this.story[this.chapterIndex][this.paragraphIndex]
        }
    },
    mounted() {
        window.dispatchEvent(new Event("resize"))
    },
    methods: {
        checkMaxParagraph(){
            if(this.paragraphIndex > this.story[this.chapterIndex].length-1){
                this.chapterIndex++
                this.paragraphIndex = 0
            }
        },
        nextState() {
            this.paragraphIndex++
            this.checkMaxParagraph()
        },
        prevState() {
            this.paragraphIndex--
            if(this.paragraphIndex < 0){
                this.chapterIndex--
                this.paragraphIndex = this.story[this.chapterIndex].length-1
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/variables.scss";
.introduction-story-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
