//pickup line:

function writePoem(response) {
  let poem = response.data.answer;

  new Typewriter("#verses", {
    strings: poem,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemInput = document.querySelector("#poem-topic");
  let poemTopic = poemInput.value;

  let apiKey = "407bfao61470cbta2ae38d4403fe23ad";
  let context =
    "you are very creative, funny and a romance expert and love to flatter people. please be creative and behave. your mission is to generate a short one line pickup line. make sure to follow the user instructions";
  let prompt = `user instructions: Please be so kind and generate a short and flirty pickup line using ${poemTopic}. display only the pickup line without a title or comments. At the end sign the poem in a separate line with "SheCodes AI" inside a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#verses");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating pickup line about ${poemTopic}...</div>`;
  axios.get(apiUrl).then(writePoem);
}

let poemButton = document.querySelector("#poem-form");
poemButton.addEventListener("submit", generatePoem);
