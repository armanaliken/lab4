let movies = [
{
"name": "Maze runner",
"country": "U.S.A",
"box office": "$348.3 million"
},
{
"name": "Hacksaw ridge",
"country": "U.S.A",
"box office": "$175 million"
},
{
"name": "Green book",
"country": "U.S.A",
"box office": "$321 million"
}
]
let sum = 0;
function non(movies){
  let wrt;
  for(let i = 0;i < movies.length;i++){
    wrt = document.writeln(`<div class="count">
    <p>${movies[i]["name"]}: country: ${movies[i]["country"]}, box office: ${movies[i]["box office"]}<br><p/>
    </div>`);
  }
  return wrt;
}
non(movies);
