<template>
    <div class="big-quote-container" ref="container" @click="moveState">
        <div class="big-quote" v-if="quote"
            :class="[quote.content.length > 180 ? '__isLong' : '']">
            <div class="big-quote-content" ref="content">
                <span class="word" v-for="word, i in content" :key="i">{{ word }}&nbsp;</span>    
            </div>
            <div class="big-quote-author" ref="author" v-if="quote.author">{{ quote.author }}</div>

        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import { Quote } from "./../../types"
import _ from "lodash"


export default defineComponent({
    name: "big-quote",
    data: () => {
        return {
            state: 0,
            gTimeline: null as null | gsap.core.Timeline,
            quotes: [
                {
                    content: "There are many realities. There are many versions of what may appear obvious. Whatever appears as the unshakable truth, its exact opposite may also be true in another context. After all, one's reality is but perception, viewed through various prisms of context",
                    author: "Amish Tripathi"
                },
                {
                    content: "The truth is helpless when up against perception",
                    author: "Zack W. Van"
                },
                {
                    content: "Every man takes the limits of his own field of vision for the limits of the world",
                    author: "Arthur Schopenhauer"
                },
                {
                    content: "Most misunderstandings in the world could be avoided if people would simply take the time to ask, 'What else could this mean?'",
                    author: "Various"
                },
                {
                    content: "What people in the world think of you is really none of your business",
                    author: "Martha Graham"
                },
                {
                    content: "No man has the right to dictate what other men should perceive, create of produce. But all should be encouraged to reveal themselves, their perceptions and emotions, and to build confidence in the creative spirit",
                    author: "Ansel Adams"
                },
                {
                    content: "An European says: \"I can't understand this, what's wrong with me?\" An American says: \"I can't understand this, what's wrong with it?\" I make no suggestion that on side or other is right, but observation over many years leads me to believe it is true",
                    author: "Terry Pratchett"
                },
                {
                    content: "We know so little about one other. We embrace a shadow and love a dream",
                    author: "Hjalmar Söderberg"
                },
                {
                    content: "We know so little about one other. We embrace a shadow and love a dream",
                    author: "Hjalmar Söderberg"
                },
                {
                    content: "In this treacherous world nothing is the truth nor a lie. Everything depends on the color of the crystal through which one sees it",
                    author: "Pedro Calderón de la Barca"
                },
                {
                    content: "We all see only that which we are trained to see",
                    author: "Robert Anton Wilson"
                },
                {
                    content: "It is useless to attempt to reason a man out of a thing he was never reasoned into",
                    author: "Jonathan Swift"
                },
                {
                    content: "It's not all hard to understand a person; It is only hard to listen without bias",
                    author: "Chriss Jami"
                },
                {
                    content: "I think that no matter how smart, people usually see what they are already looking for, that's all",
                    author: "Veronice Roth"
                },
                {
                    content: "Don't believe everything you think",
                    author: ""
                },
                {
                    content: "Life is like butter ‐ when things cool down it can be reshaped",
                    author: "Alan Sheinwald"
                },
                {
                    content: "We see people and things not as they are, but as we are",
                    author: "Anaïs Nin"
                },
                {
                    content: "A critic can only review the book he has read, not the one which the writer wrote",
                    author: "Mignon McLaughlin"
                },
                {
                    content: "If you can change the way you look at things, the things you look at change",
                    author: "Wayne Dyer"
                },
                {
                    content: "Just because you think something is reality doesn't make it reality",
                    author: "Jim Taylor"
                },
                {
                    content: "Everything that irritates us about others can lead us to an understanding of ourselves",
                    author: "Carl Gustav Jung"
                },
                {
                    content: "Because one believes in oneself, one doesn't try to convince others. Because one is content with oneself, one doesn't need others' approval. Because one accepts oneself, the whole world accepts him or her",
                    author: "Lao Tzu"
                },
                {
                    content: "What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are",
                    author: "C.S. Lewis"
                },
                {
                    content: "All things are subject to interpretation whichever interpretation prevails at a given time is a function of power and not truth",
                    author: "Friedrich Nietzsche"
                }
            ] as Array<Quote>,
            quote: null as Quote | null,
        }
    },
    computed: {
        content() {
            return this.quote?.content.split(" ")
        }
    },
    mounted() {
        this.quote = _.sample(this.quotes)
        
        setTimeout(() => {
            this.gTimeline = gsap.timeline({
                onComplete: () => {
                    this.state = 1
                }
            })
                .to(".word", {
                    duration: .64,
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    ease: "power2.out",
                })
                .to(this.$refs.author, {
                    duration: 1.28,
                    opacity: 1,
                    delay: .48,
                    x: 0,
                    ease: "power2.inOut",
                })
            setTimeout(() => {
                this.state = 1
                this.moveState()
            }, this.content.length * 256)
        })
    },
    methods: {
        moveState() {
            if (this.gTimeline && this.state === 0) {
                this.gTimeline.kill()
                this.gTimeline.pause()
                this.gTimeline.progress(1)
                this.state = 1
            } else if (this.state === 1) {
                this.gTimeline = gsap.timeline({
                    onComplete: () => {
                        this.state = 2
                        this.$emit("next", "big-quote")
                    }
                }).add(gsap.to(".word", {
                    duration: .4,
                    opacity: 0,
                    y: -16,
                    stagger: 0.024,
                    ease: "power2.out",
                }))
                
                gsap.to(this.$refs.author, {
                    duration: 1.28,
                    opacity: -1,
                    x: 144,
                    ease: "power3.inOut",
                })
            }
        }
    }

})
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";
.big-quote-container {
    font-family: $accentFont;
    position: absolute;
    left: 64px;
    right: 64px;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow:column;
    @media (min-width: 768px) {
        left: 128px;
        right: 128px;
    }
}

.big-quote {
    display: flex;
    flex-flow: column;
    &.__isLong {
        .big-quote-content {
            font-size: 24px;
        }   
    }

    @media (min-width: 768px) {
        &.__isLong {
            .big-quote-content {
                font-size: 40px;
            }   
        }
    }
}

.big-quote-content {
    display: inline-block;
    width: 100%;
    text-align: center;
    
    @media (min-width: 768px) {
        font-size: 64px;
    }
}
.big-quote-author {
    display: inline-block;
    width: 100%;
    text-align: right;
    margin-top: 24px;
    text-transform: uppercase;
    font-size: 16px;
    opacity: 0;
    transform: translateX(80px);

    @media (min-width: 768px) {
        font-size: 32px;
    }
    
    &:before {
        content: "—";
        margin-right: 16px;
    }
}

.big-quote-content .word {
    display: inline-block;
    opacity: 0;
    translate: 0 8px;
}

.big-quote-next {
    opacity: 0;
    width: 100%;
    text-align: center;

    &.__isVisible {
        opacity: 1;
    }
}

</style>
