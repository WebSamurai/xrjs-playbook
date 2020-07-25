import {fromEvent} from 'rxjs'
const button=document.getElementById('button')
const output=document.getElementById('output')

let source = fromEvent(button,'click');

function load(url:string){
  let xhr= new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    let movies= JSON.parse(xhr.responseText);
     for(let movie of movies){
         let div= document.createElement('div');
         div.innerHTML=movie.title;
         output.appendChild(div);
     }
  });
 xhr.open('GET',url);
 xhr.send()

}
source.subscribe(x=>{
  console.log(x)
 load('movies.json')
})