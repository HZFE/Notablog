import hooksName from './hooks.json'
class Hook {
  private hooks: { [key: string]: Function[] } = {}

  constructor () {
    hooksName.forEach((name: string) => {
      this.hooks[name] = []
    })
  }

  register (name: string, fn: Function) {
    this.hooks[name].push(fn)
  }

  apply (name: string, val: any): any {
    return this.hooks[name].reduce((val, nextFn) => nextFn(val), val)
  }

  keys () {
    return hooksName
  }
}

export default new Hook()
