import axios from 'axios'

const api = axios.create({
    baseURL: 'http://worldclockapi.com/api/json/utc/now'
})

export default api