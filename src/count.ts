import {count}from 'rxjs/operators'
import {range} from 'rxjs'

const source=range(1,100).pipe(count((x,index)=>{
    console.log(`value: ${x} index :${index}`)
    return x%2===0;
}));

source.subscribe(x=>console.log(x))