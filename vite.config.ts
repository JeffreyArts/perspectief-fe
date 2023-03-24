import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    build: {
        assetsInclude: ["**/*.jpg", "**/*.png"]
    },
    resolve: {
        "alias": [{
            "find": "@",
            "replacement": path.resolve(__dirname, "src") 
        }]
    },
})
