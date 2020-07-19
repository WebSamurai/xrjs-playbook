import {from} from 'rxjs'
let array =[1,2,3,4]
let source =from(array);
class myObserver{
  next(x){
    console.log(`value :${x}`);
  }
  error(err){
    console.log(err);
  }
  complete(){
console.log("objservable is completed");
  }
}
let obj= new myObserver()

let obj2={next:(x)=>{console.log(`value :${x}`);},
  error:(err)=>{ console.log(err);},
  complete:()=>{console.log("objservable is completed");}
}
source.subscribe(x=>{
  console.log(`value :${x}`);
})