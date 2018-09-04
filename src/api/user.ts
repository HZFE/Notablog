import fetch from '@/common/fetch'

export function getUserState () {
  return fetch('/user')
}
