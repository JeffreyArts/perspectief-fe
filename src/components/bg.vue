<!-- 
use the .ascii-box-content for styling the content inside the box. Best way is to style it via the parent component/route that you put this element in.
 -->

<template>
    <div class="bg-container">
        <div class="bg bg-version1" ref="version1" >
            <div class="spotlight" ref="spotlight"></div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"


export default defineComponent({
    name: "background-component",
    props: {
        version: {
            type: Number,
            required: false,
            default: 1
        },
    },
    data: () => {
        return {
            currentVersion: 1,
        }
    },
    computed: {
    },
    watch: {
        version(newVersion) {
            this.currentVersion = newVersion
        }
    },
    mounted() {
        document.addEventListener("mousemove", this.mouseMove)
    },
    unMounted() {
        document.removeEventListener("mousemove", this.mouseMove)
    },
    methods: {
        mouseMove(e: MouseEvent) {
            let x = e.clientX 
            let y = e.clientY
            
            if (this.$refs?.spotlight) {
                this.$refs.spotlight.style.setProperty("--size", "200vh")
                this.$refs.spotlight.style.setProperty("--x", x + "px")
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";
.bg-container {
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $accentColor;
}
.bg {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
}



.bg-version1 {
    background-image: linear-gradient( #ddd, #ddd calc(100% - 128px), #fff calc(100%));
}

.spotlight {
    --size: 0;
    --x: 0px;
    --y: 0px;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
//   background: radial-gradient(circle closest-side, $red, transparent);
  background: radial-gradient(circle closest-side, #eee, transparent);
  transform: translate(-50%, -50%);
  z-index: 1990;
//   transition: width 0.2s ease, height 0.2s ease;
}

</style>
