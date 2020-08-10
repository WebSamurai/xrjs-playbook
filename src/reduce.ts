import {from, pipe} from 'rxjs'
import {reduce} from 'rxjs/Operators'

// const source= of(1,2,3,4,5).pipe(
//     reduce((acc,value)=>{
//         acc= acc + value;
//         return acc

//     },0)
// );
// source.subscribe(x=>{
//     console.log(`sum :${x}`);
// })

class Item{
 name:string;
 price:number;

}

class Result{
    sum:number;
    avg:number;
   
   }
   let items = [
    {name: "A", price: 1000.00},
    {name: "B", price: 850.00},
    {name: "C", price: 200.00},
    {name: "D", price: 150.00}
 ];;
 let count=0;
 const seed= new Result();
 seed.sum=0;
 seed.avg=0;
const source= from(items).pipe(

    reduce<Item,Result>((acc:Result,value:Item)=>{
        count++
        acc.sum+=value.price;
        acc.avg=acc.sum/count;
        return acc;
    },seed)

)
source.subscribe((x:Result)=>{
    console.log(`sum :${x.sum}`);
    console.log(`average :${x.avg}`);
})