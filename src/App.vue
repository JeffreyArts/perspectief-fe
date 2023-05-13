<template >
  <router-view />
  <site-footer />
</template>


<script setup lang="ts">
import SiteFooter from "@/components/site-footer.vue"
import LocalDB from "@/stores/localdb"
import mobileCheck from "@/stores/is-mobile"

const isMobile = mobileCheck()
const localDB = LocalDB()
localDB.load()
</script>

<style src="./assets/scss/index.scss"></style>
