
import { min } from 'rxjs/operators'
import { of } from 'rxjs'
interface Person{
    name:string;
    age: number;
}
const source=of<Person>({
    name:'jack',age:20
},
{
    name:'jone',age:4
},
{
    name:'hel',age:2
}
).pipe(min((x,y)=>{
  
    return x.age>y.age?1:-1;

}))

source.subscribe(x=>console.log(x))