import { fromEvent, Observable } from 'rxjs'
const button = document.getElementById('button')
const output = document.getElementById('output')

let source = fromEvent(button, 'click');

function load(url: string):Observable<any> {
let result= Observable.create((obs)=>{
  let xhr = new XMLHttpRequest();
  let movieesobs=fromEvent(xhr,'load');
  movieesobs.subscribe(() => {
  let movies = JSON.parse(xhr.responseText);
  obs.next(movies);
  obs.complete();
  });
  xhr.open('GET', url);
  xhr.send()


})
 return result;
}
function appendMoviee(movies){
  for (let movie of movies) {
    let div = document.createElement('div');
    div.innerHTML = movie.title;
    output.appendChild(div);
  }
}
source.subscribe(x => {
  load('movies.json').subscribe(x=>appendMoviee(x))
})