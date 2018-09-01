import axios, { AxiosInstance } from 'axios'

const _fetch = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 10000,
  headers: {},
  withCredentials: true
})

export default function fetch (url: string, ...params: any[]): Promise<any> {
  return _fetch(url, ...params).then(res => res.data)
}
