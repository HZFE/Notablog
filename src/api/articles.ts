import fetch from '@/common/fetch'

export function getArticles ({ offset = 0, limit = 10 }) {
  return fetch(`/articles?offset=${offset}&limit=${limit}`)
}
