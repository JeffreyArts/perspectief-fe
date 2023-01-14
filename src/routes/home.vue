<template>
    <div class="home">
        <bg />
        <stripes @next="nextStep" v-if="step == 1"/>
        <big-quote @next="nextStep" v-if="step == 2"/>
        <introduction-story @next="nextStep" v-if="step == 3"/>
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue"
import LocalDB from "../stores/localdb"
import SocketIO from "../stores/socketio"
import bigQuote from "./../components/big-quote.vue"
import introductionStory from "./../components/introduction-story/introduction-story.vue"
import stripes from "./../components/stripes.vue"
import bg from "./../components/bg.vue"
import dayjs from "dayjs"
import _ from "lodash"

export default defineComponent ({ 
    name: "homePage",
    components: {stripes, bigQuote, bg, introductionStory},
    props: [],
    setup() {
        const localDB = LocalDB()
        const socketIO = SocketIO()

        return { localDB, socketIO }
    },
    data() {
        return {
            consoleEvents: [] as Array<string>,
            step: 1
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
            
            setTimeout(()=> {
                this.step++
            }, 960)
        },
    }
    
})

</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";

.home {
    min-height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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