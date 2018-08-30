import * as utils from './utils'
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    console.log(res.data)
})

const ar = a => console.log(a)

console.log('Hello')
ar('Bye')

console.log(utils.add(1, 2))
