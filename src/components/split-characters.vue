<template>
    <div class="split-characters">
        <span class="word" v-for="word, ii in words" :key="ii">
            <span class="character" v-for="c, i in word" :key="i">
                <span v-if="c && c !== ' '">{{ c }}</span>
            </span>
            <span v-if="ii !== words.length-1">&nbsp;</span>
        </span>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import _ from "lodash"


export default defineComponent({
    name: "split-characters",
    components: {  },
    data: () => ({
        number: 0 as number,
        observer: null as MutationObserver | null
    }),
    computed: {
        words() {
            if (!this.$slots || !this.$slots.default) {
                console.warn("Missing content")
                return ""
                // return this.$slots.split(" ")
            }

            let content = this.$slots.default()[0].children as string
            
            while (_.isArray(content)) {
                content = content[0].children
            }
                

            if (!content || !_.isString(content)) {
                console.warn("Missing content (technical issue)")
                return ""
            }

            let res = _.map(content.split(" "), v => {
                if (v === " " || v === "") {
                    return false
                }
                return v
            })
            
            return _.compact(res)
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.split-characters {
    .word {
        display: inline-block;
    }
    .character {
        display: inline-block;
    }
}
</style>
