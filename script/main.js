const id = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

function changeAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      // accedo al consejo
      id.innerHTML = `#${data.slip.id}`
      advice.innerText = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error("Error:", error));
}
