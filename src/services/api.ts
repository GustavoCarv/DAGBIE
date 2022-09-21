import axios from 'axios'

const api = axios.create({
  baseURL: "https://devfortech.herokuapp.com/api",
})

export default api