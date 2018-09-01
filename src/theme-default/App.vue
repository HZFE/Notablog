<template>
  <section>
    Home {{b}} {{a}}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import {
  State,
  Getter,
  namespace
} from 'vuex-class'

const Self = namespace('self')

@Component
export default class App extends Vue {
  @Self.Getter b!: number
  @Self.State a!: number
}
</script>
