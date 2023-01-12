<template>
    <div class="home">
       <big-quote />
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue"
import LocalDB from "../stores/localdb"
import SocketIO from "../stores/socketio"
import Icon from "./../components/icon.vue"
import bigQuote from "./../components/big-quote.vue"
import asciiButton from "./../components/ascii-button.vue"
import asciiBox from "./../components/ascii-box.vue"
import dayjs from "dayjs"
import _ from "lodash"

export default defineComponent ({ 
    name: "homePage",
    components: {Icon, bigQuote, asciiButton, asciiBox},
    props: [],
    setup() {
        const localDB = LocalDB()
        const socketIO = SocketIO()

        return { localDB, socketIO }
    },
    data() {
        return {
            consoleEvents: [] as Array<string>
        }
    },
    computed: {
        currentDate() {
            return dayjs().format("DD-MM-YYYY")
        }
    },
    mounted() {
        if (this.socketIO.socket) { 

            this.socketIO.socket.on("connect", () => {
                this.consoleEvents.push(`${dayjs().format("HH:mm:ss")} | Socket connected`)
            })

            this.socketIO.socket.on("connect_error", () => {
                this.consoleEvents.push(`${dayjs().format("HH:mm:ss")} | Can not establish socket connection @ ${this.socketIO.URL}`) 
            })

            this.socketIO.socket.on("test", (data) => {
                this.consoleEvents.push(`${dayjs().format("HH:mm:ss")} | ${data}`)
            })
        } 
    },
    methods: {
        emitEvent(event: string) {
            this.socketIO.emit(event, "test")
            this.consoleEvents.push(`${dayjs().format("HH:mm:ss")} | Test event emitted`)
        },
        postRequest(data: any) {
            this.consoleEvents.push(`${dayjs().format("HH:mm:ss")} | Post request send`)
            fetch(`${import.meta.env.VITE_REST_API}/test`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        },
        copyToClipboard(mouseEvent: MouseEvent) {
            const element = mouseEvent.target as HTMLElement
            const textarea = document.createElement("textarea")
            textarea.textContent = element.innerText
            document.body.appendChild(textarea)
            textarea.select()

            try {
                document.execCommand("copy")
                console.log("Copied to clipboard")
            } catch (err) {
                console.error("Failed to copy to clipboard: ", err)
            } finally {
                document.body.removeChild(textarea)
            }
        }
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

    pre {
        display: inline-block;
        background-color: $textColor;
        color: $white;
        padding: 8px;
        border-radius: 4px;
        margin: 0;
        cursor: pointer;
    }
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

.home-console {
    width: 100%;
    display: block;
}

.home-console-entry {
    display: inline-block;
    width: 100%;
    &:before {
        content: "> ";
        font-weight: bold;
    }
}


</style>