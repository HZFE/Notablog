<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Config from './config.json'

const { theme } = Config
const { default: Header } = require(`./theme-${theme}/Header.vue`)
const { default: Footer } = require(`./theme-${theme}/Footer.vue`)

@Component({
  components: {
  Header, Footer,
  }
  })
export default class NotaBlog extends Vue {}
</script>
