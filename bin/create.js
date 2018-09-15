#!/usr/bin/env node

const cmd = require('commander')
const fs = require('fs')
const path = require('path')

cmd
  .version('0.0.1')
  .arguments('<theme> [name]')
  .option('-x, --vuex', 'Import vuex-class stuff')
  .action((theme, name, option) => {
    theme = theme || 'default'
    if (!name) {
      console.error('Name is required')
      return
    }
    name = name.replace(/\w/, l => l.toUpperCase())
    const enableVuex = option.vuex
    const vuexTemplate = `
  import {
    State,
    Getter,
    Dispatcher
  } from 'vuex-class'
`

    const template = `<template>
  <section>
    ${name}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
${ enableVuex ? vuexTemplate : '' }
export default class ${ /[0-9]/.test(name[0]) ? `C${name}` : name } extends Vue {}
</script>
`
    const pathname = path.resolve(__dirname, `../src/theme-${theme}/`)
    if (!fs.existsSync(pathname)) {
      fs.mkdirSync(pathname)
    }
    const filename = path.resolve(pathname, `${name}.vue`)
    try {
      fs.writeFileSync(filename, template)
      console.log('Create successful.')
    } catch (e) {
      console.log(e)
    }
  })
  .parse(process.argv)
