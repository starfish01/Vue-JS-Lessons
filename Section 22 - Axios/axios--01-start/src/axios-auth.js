import axios from 'axios'

const instance = axios.create({
    baseURL:'https://vue-axios-example-9b848.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance