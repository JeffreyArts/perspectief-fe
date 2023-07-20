import { defineStore } from "pinia"
import { ref} from "vue"

export const Page = defineStore("page", () => {
    const step = 1

    return {
        step,
    }
})


export default Page