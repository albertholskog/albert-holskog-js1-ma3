// const rawKey = "a0191d2613594ed4b734b41b7c4b6dd2";
// const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${rawKey}`;
// console.log("start");

// const conteiner = document.querySelector(".conteiner");
// async function getApi() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();
//     const api = results;
//     console.log(api);
//     for (let i = 0; i < api.lenght; i++) {
//       const Name = url[i].name;
//       const Rating = url[i].rating;
//       const Tag = url[i].tags;
//       conteiner.innerHTML += `<div><li>${Name}${Rating}${Tag}</li></div>`;
//     }
//   } catch (error) {
//     console.log("error, noe er feil");
//     conteiner.innerHTML += `<p> noe galt</p>`;
//   } finally {
//     console.log("all done");
//   }
// }
// getApi();
const rawKey = "a0191d2613594ed4b734b41b7c4b6dd2";
async function getApi() {
  const response = await fetch(
    `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${rawKey}`
  );
}
