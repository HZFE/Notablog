<template>
  <section>
    <article v-for="(article, index) in articles" :key="index">
        <h2>{{article.title}}</h2>
        <time>{{article.updatedAt}}</time>
        <p>{{article.content}}</p>
    </article>
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
import Hook from '@/store/Hook'

const Self = namespace('self')

@Component
export default class App extends Vue {
  @State articles!: any[]

  mounted () {
    Hook.register('SET_ARTICLES', (articles: any[] = []) => {
      return articles.map(article => {
        const tmp: any = {}
        Object.keys(article).forEach(key => {
          // first letter to lower case
          tmp[`${key.replace(/\w/, (w: string) => w.toLowerCase())}`] = article[key]
        })
        return tmp
      })
    })
    this.$store.dispatch('GET_ARTICLES')
  }
}
</script>
