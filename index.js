let url = 'http://www.omdbapi.com/?t=Joker&apikey=7a121420';
let nameRef = document.querySelector(".search-container input");
let result = document.querySelector(".result")
let searchButton = document.querySelector(".search-container button");

function getData(){
    let movieName = nameRef.value;

    if(movieName.length <= 0){
        result.innerHTML = `
            <h1 style="text-align: center;" >Please Enter a movie Name!</h1>
        `;
    }else{
        fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=7a121420`)
        .then(res => res.json())
        .then(data => {
            if(data.Response == "True"){
                result.innerHTML = `
                <div class="top">
                    <h1 class="title">${data.Title}</h1>
                    <p class="year">${data.Year}</p>
                </div>
                <div class="info">
                    <img src=${data.Poster} class="poster">
                    <p class="plot">${data.Plot}</p>
                    <div class="genre">
                        <p>${data.Genre.split(",").join
                        ("</p><p>")}</p>
                    </div>
                    <p class="rating">Imdb-Rating: ${data.imdbRating}<p>
                </div>

            `;
            }else{
                result.innerHTML = `
                <h1 class="center-text">${data.Error}</h1>
                `;
            }
        })
        .catch(() => {
            result.innerHTML = `
            <h1 class="center-text">Error Occured!<h1>
            `;
        });

        result.classList.add("active");
    }
}

searchButton.addEventListener("click", e => {
    getData();
})

window.addEventListener("load", e => {
    getData();
})

