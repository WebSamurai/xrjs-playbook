import {of} from 'rxjs'
let source = of(1,2,3,4,5,{name:"websumurai"},()=>{
  console.log("this is function")
});
source.subscribe({
  next:(x)=>{
  console.log(x)
},complete:()=>{
  console.log("observable is completed")
}
}
);