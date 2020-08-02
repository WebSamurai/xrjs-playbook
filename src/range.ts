import {range} from 'rxjs'

const source=range(1,10)

source.subscribe(
  x=>console.log(x),
  (err)=>console.log(err),
 ()=>console.log('completed')
)