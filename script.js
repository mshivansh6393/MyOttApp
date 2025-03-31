
const movies = [
    { title: "Bhool Bhulaiya 3", category: "horror", thumbnail: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSg-2WoAZSBhHugCoupjAW89mNBlm--n9bOL9wqh9yMinJmVZSJ", url: "https://drive.google.com/file/d/1BCzimD71g9uxxg4mGscgn09cRL3qfckk/preview" },
    { title: "Stree 2", category: "horror", thumbnail: "movie2.jpg", url: "https://drive.google.com/file/d/1kfJIVJlD1RejuBDWdUYaUK6GOuKvDoAW/preview" },
    { title: "Tumbad", category: "horror", thumbnail: "movie2.jpg", url: "https://drive.google.com/file/d/1YlVfOTUOGRC1yb2T-NgvzUnn_v0i8cGr/preview" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },
    { title: "Horror Movie 1", category: "horror", thumbnail: "movie2.jpg", url: "" },

    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },
    { title: "Sci-Fi Movie 1", category: "sci-fi", thumbnail: "movie3.jpg", url: "" },

    { title: "Lion King", category: "family, kids", thumbnail: "", url: "https://drive.google.com/file/d/1r2k8Mpk0sdFAVGd5eifLosORgCotIqFj/preview" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },
    { title: "Family Movie 1", category: "family", thumbnail: "", url: "" },

    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "kids", thumbnail: "", url: "" },

    { title: "Animal", category: "action", thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/220px-Animal_%282023_film%29_poster.jpg", url: "https://drive.google.com/file/d/1_4KivYf8PWC6w6v4youfKlfVXBYJRJvw/preview" },
    { title: "Indian 2", category: "action", thumbnail: "", url: "https://drive.google.com/file/d/15fdGujv3Ccm2QmSdwsgwz8v8_KFTMzQj/preview" },
    { title: "Kalki 2898 AD", category: "action", thumbnail: "", url: "https://drive.google.com/file/d/1xL0cSnf995CGaPutUY89QFegoAdYgA42/preview" },
    { title: "Jawan", category: "action", thumbnail: "", url: "https://drive.google.com/file/d/1usJuel6_hzzCUOyk5Nnl39CmUO1EV2DF/preview" },
    { title: "Gadar 2", category: "action", thumbnail: "", url: "https://drive.google.com/file/d/1-ye-hof0dsidvpd2wzABig8aJVDyEe1W/preview" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
    { title: "Kids Movie 1", category: "action", thumbnail: "", url: "" },
];

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function filterMovies() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    let container = document.getElementById("movies");
    container.innerHTML = "";
    movies.filter(movie => selectedCategory === "all" || movie.category === selectedCategory)
        .forEach((movie, index) => {
            let movieDiv = `<div class='movie' id="movie-${index}" onclick="playMovie('${movie.url}', ${index})">
                            <img src='${movie.thumbnail}' alt='${movie.title}' class="movie-thumbnail">
                            <p>${movie.title}</p>
                        </div>`;
            container.innerHTML += movieDiv;
        });
}

function openDonatePopup() {
    document.getElementById("donatePopup").style.display = "block";
}
function closeDonatePopup() {
    document.getElementById("donatePopup").style.display = "none";
}

function loadMovies() {
    let container = document.getElementById("movies");
    container.innerHTML = "";
    movies.forEach((movie, index) => {
        let movieDiv = `<div class='movie' onclick="showMovieDetails(${index})">
                            <img src='${movie.thumbnail}' alt='${movie.title}'>
                            <p>${movie.title}</p>
                        </div>`;
        container.innerHTML += movieDiv;
    });
}


function showMovieDetails(index) {
    const movie = movies[index];

    document.getElementById("detailTitle").innerText = movie.title;
    document.getElementById("detailThumbnail").src = movie.thumbnail;
    document.getElementById("detailDescription").innerText = movie.description;

    document.getElementById("movieDetails").style.display = "block";

    // Store the selected movie URL for playing later
    document.getElementById("movieDetails").dataset.url = movie.url;
}

// Function to open the movie player with the correct movie
function playMovie(index) {
    let selectedMovie = movies[index]; // Get the selected movie from the array
    let videoFrame = document.getElementById("videoFrame");

    videoFrame.src = selectedMovie.url; // Set the video URL
    document.getElementById("moviePlayer").classList.add("show"); // Show the player
}

function closeMovieDetails() {
    let modal = document.getElementById("movieDetails");
    if (modal) modal.style.display = "none";
}

function playMovieByPopup() {
    let modal = document.getElementById("movieDetails");
    if (modal) {
        let url = modal.dataset.url;
        closeMovieDetails(); // Close the popup
        window.open(url);

    }
}

// Function to close the movie player
function closePlayer() {
    document.getElementById("moviePlayer").classList.remove("show");
    document.getElementById("videoFrame").src = ""; // Stop video when closing
}
document.addEventListener("DOMContentLoaded", loadMovies);


function openDonatePopup() {
    document.getElementById("donatePopup").style.display = "block";

    // Hide thumbnails when donation popup is open
    document.querySelectorAll(".movie").forEach(movie => {
        movie.classList.add("hide-thumbnail");
    });
}

function closeDonatePopup() {
    document.getElementById("donatePopup").style.display = "none";

    // Show thumbnails when donation popup is closed
    document.querySelectorAll(".movie").forEach(movie => {
        movie.classList.remove("hide-thumbnail");
    });
}



loadMovies();