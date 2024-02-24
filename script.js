const inputE1 = document.querySelector("#search")
const infoE1 = document.querySelector(".info")
const meaningContainer = document.querySelector(".meaning-container")
const title = document.querySelector(".title")
const meaning = document.querySelector(".meaning")
const audio = document.querySelector("audio")

inputE1.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchApi(e.target.value)
    }
});

async function fetchApi(word) {
    try {
        infoE1.style.display = "block"
        meaningContainer.style.display = "none"
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const response = await fetch(url)
        const result = await response.json()
        console.log(result);
        infoE1.innerHTML = `Please wait sometimes to search "${word}"`
        infoE1.style.display = "none"
        meaningContainer.style.display = "block"

        // Display Data
        title.innerHTML = result[0].word;
        meaning.innerHTML = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;

    } catch (error) {
        console.log(error);
    }
}