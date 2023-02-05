<template>
    <footer class="site-footer-container" :class="[isMounted ? '__isMounted' : '']" ref="button">
        <div class="site-footer">
            <div class="site-footer-left">
                <a class="logo-jao" href="https://www.jeffreyarts.nl/" target="_blank" v-html="svgJeffrey"></a>
            </div>    

            <div class="site-footer-right">
                <div class="site-footer-zoz">
                    <span>Mede mogelijk gemaakt door</span>
                    <a href="https://fondszoz.nl/" target="_blank" v-html="svgZOZ">
                    </a>
                </div>

            </div>    
        </div>
    </footer>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import svgJeffrey from "./../assets/svg/ja-sharp.svg?raw"
import svgZOZ from "./../assets/svg/ZOZ_logo.svg?raw"


export default defineComponent({
    name: "site-footer",
    data: () => {
        return {
            svgJeffrey: svgJeffrey,
            svgZOZ: svgZOZ,
            isMounted: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isMounted = true
        },2048)    
    },
})
</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";


.site-footer-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2023;
    color: $white;
    transition: .96s all ease;
    padding-top: 16px;
    
    &.__isMounted {
        translate: 0 calc(100% - 12px - 16px);
    }
    
    
    &:hover {
        translate: 0 0;
    }
    a {
        color: $white;
    }
}

.site-footer {
    background-color: $black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 48px;
    font-size: 14px;

    svg {
        display: inline-block;
        fill: currentColor;
    }
}

.site-footer-left {
    display: flex;
    align-items: center;
    
    .logo-jao {
        display: block;
        line-height:0;
    }

    svg {
        height: 48px;
    }
}

.site-footer-zoz {
    display: flex;
    flex-flow: column;
    text-align: center;
    span {
        display: inline-block;
        margin-bottom: 8px;
        font-size: 10px;
    }
    svg {
        height: 36px;
    }
}

</style>
