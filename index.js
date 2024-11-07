// API kalitingizni bu yerga yozing
const apiKey = "8070000560:AAHOV0EQKVFCpFyM3yiOIMiYaQqalz8XR-8"; // OMDb API kalitini shu yerga joylashtiring

// Kino qidirish funksiyasi
function searchMovie() {
    const movieName = prompt("Kino nomini kiriting:");
    if (!movieName) {
        alert("Iltimos, kino nomini kiriting.");
        return;
    }

    const genre = prompt("Kino turini tanlang (misol: Action, Comedy, Drama, Horror):");

    // API so'rovi URL'ini tayyorlash
    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

    if (genre) {
        url += `&type=${genre}`; // Tur bo'yicha filtr qo'shish
    }

    // API ga so'rov yuborish
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayResults(data.Search);
            } else {
                alert("Kinolar topilmadi. Boshqa nom yoki turni sinab ko'ring.");
            }
        })
        .catch(error => {
            console.error("Xatolik:", error);
            alert("Kinolarni topishda xatolik yuz berdi.");
        });
}

// Natijalarni foydalanuvchiga ko'rsatish
function displayResults(movies) {
    let resultMessage = "Topilgan kinolar:\n\n";

    movies.forEach(movie => {
        resultMessage += `${movie.Title} (${movie.Year}) - ${movie.Type}\n`;
        resultMessage += `Poster: ${movie.Poster}\n\n`;
    });

    alert(resultMessage);
}

// Botni ishga tushirish
searchMovie();
