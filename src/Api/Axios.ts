import Axios from 'axios'

export const Api = Axios.create({
    baseURL: 'https://62b8e255ff109cd1dc8918c3.mockapi.io/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});