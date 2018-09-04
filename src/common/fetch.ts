import axios, { AxiosInstance } from 'axios'

const fetch = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 10000,
  headers: {},
  withCredentials: true
})

fetch.interceptors.response.use((res: any) => {
  return res.data
}, err => {
  throw err
})

export default fetch
