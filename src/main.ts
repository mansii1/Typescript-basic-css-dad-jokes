import "./style.css";

const jokeEl = document.getElementById("joke") as HTMLDivElement;
const jokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;

getJoke();

// function getJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => (jokeEl.innerHTML = data?.joke))
//     .catch((error) => console.log(error));
// }.

async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", getJoke);
