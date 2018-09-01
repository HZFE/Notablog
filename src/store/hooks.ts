const hooks: { [key: string]: Function[] } = {
  SET_ARTICLES: []
}

export function hookRegister (name: string, fn: Function) {
  hooks[name].push(fn)
}

export function hookApply (name: string, val: any): any {
  return hooks[name].reduce((val, nextFn) => nextFn(val), val)
}
