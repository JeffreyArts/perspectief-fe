import { defineStore } from "pinia"
import { ref} from "vue"

export const Page = defineStore("isMobile", () => {
    const step = 1

    return {
        step,
    }
})


export default Page