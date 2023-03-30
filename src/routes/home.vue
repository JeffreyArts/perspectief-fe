<template>
    <div class="home">
        <bg />
        <stripes @next="nextStep" v-if="step < 2 "/>
        <big-quote @next="nextStep" v-if="step == 2"/>
        <welcome-page @next="nextStep" v-if="step == 3"/>
        <introduction-page @next="nextStep" v-if="step == 4 || step==5"/>
        <pov-page @next="nextStep" v-if="step == 5 || step == 6 || step == 7"/>
        <shared-perception @next="nextStep" v-if="step == 7"/>
        <conclusion @next="nextStep" v-if="step == 8"/>
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue"
import LocalDB from "@/stores/localdb"
import SocketIO from "@/stores/socketio"
import bigQuote from "@/components/slides/big-quote.vue"
import welcomePage from "@/components/slides/welcome-page.vue"
import introductionPage from "@/components/slides/introduction-page.vue"
import sharedPerception from "@/components/slides/shared-perception.vue"
import povPage from "@/components/slides/pov-page.vue"
import stripes from "@/components/slides/stripes.vue"
import conclusion from "@/components/slides/conclusion.vue"
import bg from "@/components/bg.vue"
import _ from "lodash"

export default defineComponent ({ 
    name: "homePage",
    components: {stripes, conclusion, bigQuote, bg, welcomePage, introductionPage, povPage, sharedPerception},
    props: [],
    setup() {
        const localDB = LocalDB()
        const socketIO = SocketIO()

        return { localDB, socketIO }
    },
    data() {
        return {
            consoleEvents: [] as Array<string>,
            step: 1,
            bgFadeOut: false,
        }
    },
    computed: {
        currentDate() {
            return dayjs().format("DD-MM-YYYY")
        }
    },
    created() {
        // this.$on("next", (data) => {
        //     // handle the event here
        // })
    },
    methods: {
        nextStep(msg: string) {
            console.log("Next step:", msg)
            this.step++
        },
    }
    
})

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.home {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: absolute;
}

.home-title {
    width: 100%;
    text-align: right;
    font-size:16px;
    font-weight: normal;
    .icon {
        height: 1.2em;
        translate: -8px 4px;
        display: inline-block;
    }   
    .left {
        float: left;
        font-weight: bold;
    }
}

.home-button-right {
    float: right;
}

.home-description {
    padding: 32px 0;
}



</style>