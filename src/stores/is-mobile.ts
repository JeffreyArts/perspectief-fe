import { defineStore } from "pinia"
import { ref} from "vue"

export const useIsMobileStore = defineStore("isMobile", () => {
    const v = ref(window.innerWidth < 768)
    const onResize = () => {
        v.value = window.innerWidth < 768
    }

    window.addEventListener("resize", onResize)

    return {
        v,
        onResize
    }
})


export default useIsMobileStore