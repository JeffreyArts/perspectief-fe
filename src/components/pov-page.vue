<template>
    <div class="pov-page-container" ref="container">
        <div class="pov-page" ref="scrollContainer">
            <div class="pov-intro-block" ref="intro-block">
                <p>Wanneer informatie een verzameling van kennis is welk betrekking heeft tot een onderwerp. 
                    Dan bepaalt jouw standpunt het perspectief waar vanuit je deze informatie tot je neemt. 
                    Dat klinkt een beetje vaag misschien. 
                    Dus laten we als voorbeeld een  <glitch 
                        @glitchChange="glitchUpdate" 
                        :duration="480" 
                        :delay="3200" 
                        :repeat="repeat" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="displayTypes"
                        :glitch-jumps="6" 
                        :glitch-offset="8">{{types[0]}}</glitch> als onderwerp nemen, 
                    en aan de hand van een praktisch voorbeeld kijken hoe jouw standpunt/perceptie van invloed is op 
                    jouw waarneming van informatie, oftewel jouw vorming van kennis.</p>
            </div>
            <h1 class="pov-title">
                <glitch 
                        @glitchChange="glitchUpdate" 
                        :duration="480" 
                        :delay="3200" 
                        :repeat="repeat" 
                        :opacity-duration="144" 
                        :position-jumps="4" 
                        :inputs="displayTypes"
                        :glitch-jumps="6" 
                        :glitch-offset="8">{{types[0]}}</glitch>
            </h1>

            <div class="pov-content" ref="content">
                <div class="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores dolore commodi in deleniti, voluptatibus ratione molestias cupiditate tempore voluptates debitis nisi reiciendis optio atque quos placeat sapiente dolorum aspernatur.</p>
                    <p>Mollitia saepe quidem voluptas repellendus. Nemo repudiandae, explicabo nulla cupiditate perspiciatis at omnis alias maiores minus suscipit voluptatem rem quod hic reiciendis dignissimos magni? Nihil amet adipisci earum ducimus veniam.</p>
                    <p>Corporis maxime ut, veritatis omnis distinctio quibusdam at repellat aliquam eius sunt ipsam assumenda vel voluptatum illum eum ducimus necessitatibus totam. Quam repudiandae magnam aspernatur. Itaque sint ipsam adipisci distinctio?</p>
                    <p>Itaque molestiae deleniti eveniet, quas dicta odit perferendis doloremque facilis incidunt nobis repudiandae? Pariatur eaque vel, aut, obcaecati consequatur voluptatum eum voluptate nostrum veritatis a, repellendus sit facilis quaerat dignissimos.</p>
                    <p>Architecto, vitae sit, repellat dolorum hic ut delectus nobis illo quas, voluptas deleniti harum assumenda vel! Rerum itaque voluptates qui, corrupti minima esse dicta veritatis atque illo, libero cum doloremque.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import gsap from "gsap"
import Glitch from "./glitch.vue"
import _ from "lodash"


export default defineComponent({
    name: "pov-page",
    components: {
        Glitch
    },
    data: () => {
        return {
            completed: false,
            scrollIndex: 0,
            selectedType: null as null | string,
            repeat: 777,
            typeIndex: 0,
            types: ["pen", "tomaat"],
            gTimeline: null as null | gsap.core.Timeline,
        }
    },
    computed: {
        displayTypes() {
            let className = "text-blue"
            return _.map(this.types, (type) => {
                if (type.toLowerCase() == "pen"){ 
                    className = "text-blue"
                } else {
                    className = "text-red"
                }
                return `<span class="${className}">${type}</span>`
            })
        },
    },
    mounted() {
        setInterval(() => {
            if (this.typeIndex) {
                this.typeIndex = 0
            } else {
                this.typeIndex = 1
            }
        }, 3200)

        if (this.$refs["scrollContainer"] instanceof Element) {
            this.$refs["scrollContainer"].addEventListener("scroll", this.handleScroll)
        }
    },
    unmounted() {
        if (this.$refs["scrollContainer"] instanceof Element) {
            this.$refs["scrollContainer"].removeEventListener("scroll", this.handleScroll)
        }
    },
    methods: {
        glitchUpdate(string:string) {
            // console.log("glitch update",a)
        },
        handleScroll(event: Event) {
            if (!event.target) {
                return
            }
            
            if (this.$refs["content"] instanceof HTMLElement) {
                if ((event.target as HTMLElement).scrollTop > (this.$refs.content as HTMLElement).offsetTop - window.innerHeight) {
                    this.repeat = 0
                }
            }
        },
        nextPage() {
            this.$emit("next", "pov-page")
        }
    }

})
</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";
.pov-page {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    text-align: center;
    .text-red {
        color: $red;
    }
    .text-blue {
        color: $blue;
    }
    .glitch {
        font-size: 1.08em;
    }
}

.pov-intro-block {
    margin: 100vh auto calc(50vh - 128px)  auto;
    background-color: #fff;
    border:1px solid $black;
    padding: 36px 48px;
    font-size: 16px;
    max-width: 1000px;
    line-height: 32px;
    p {
        margin: 0;
    }
}

.pov-title {
    font-size: 40px;
    margin-bottom: 48px;
    text-transform: capitalize;
}

.pov-content {
    background-color: #fff;
    font-size: 16px;
    line-height: 32px;
    text-align: left;
    padding-top: 64px;
}

</style>
