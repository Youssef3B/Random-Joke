let btn = document.getElementById('btn');
let jokecontainer = document.getElementById('joke');
let api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



async function getJoke(){
    const response = await fetch(api)
    const data = await response.json();
    jokecontainer.innerHTML = `${data.joke}`
}


btn.addEventListener('click',getJoke);
getJoke();

/*let getJoke = ()=>{
    fetch(api)
    .then(data=>data.json())
    .then()
}
*/