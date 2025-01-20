const names = [
    "Ali", "Vali", "Olim", "Salim", "Aziz", "Gulnora", "Laylo", "Murod",
    "Dilshod", "Nodira", "Farhod", "Javlon", "Madina", "Sardor", "Zebo", "Xurshid",
    "Malika", "Hasan", "Husan", "Kamila", "Jasur", "Oygul", "Rustam", "Shahlo",
    "Bekzod", "Nigora", "Ulug'bek", "Aziza", "Shoxruh", "Muxlisa", "Botir", "Rano",
    "Dildora", "Komil", "Shavkat", "Muslima", "Yusuf", "Umid", "Munisa", "Diyor"
];

let currentCount = 0; // Boshlang'ich son

document.getElementById("showNames").addEventListener("click", () => {
    const namesList = document.getElementById("namesList");
    const nextCount = currentCount + 10;

    if (currentCount < names.length) {
        const chunk = names.slice(currentCount, nextCount);
        namesList.innerHTML += <p>${chunk.join(", ")}</p>;
        currentCount = nextCount;
    } else {
        namesList.innerHTML += <p>Barcha ismlar chiqarildi!</p>;
    }
});