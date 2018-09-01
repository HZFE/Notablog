<template>
  <section>
    <Articles />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Articles from './Articles.vue'
@Component({
  components: {
  Articles
  }
  })
export default class App extends Vue {}
</script>
