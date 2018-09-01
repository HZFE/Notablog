import axios from 'axios'

export default axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '//' : '//',
  timeout: 10000,
  headers: {}
})
