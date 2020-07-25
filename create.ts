import {Observable} from 'rxjs';
let list=[1,2,3,4]
let source= Observable.create((obs)=>{
  let i=0;
  let interval=setInterval(()=>{
    i++;
   obs.next(i)
  },1000)
  setTimeout(()=>{
    clearInterval(interval);
   obs.complete()
  
  },10000)
});

source.subscribe(
{
  next:(x)=>{console.log(x)},
  error:(err)=>{console.log(err)},
  complete:()=>{console.log('Observable is completed')}
}
);
