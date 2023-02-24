<template >
  <router-view />
  <site-footer />
</template>


<script setup lang="ts">
import SiteFooter from "./components/site-footer.vue"
// import SocketIO from "./stores/socketio"
import LocalDB from "./stores/localdb"
import mobileCheck from "./stores/is-mobile"

// const socketIO = SocketIO()
const isMobile = mobileCheck()
const localDB = LocalDB()
localDB.load()
// socketIO.init()
</script>

<style src="./assets/scss/index.scss"></style>
