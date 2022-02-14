const rawKey = "a0191d2613594ed4b734b41b7c4b6dd2";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${rawKey}`;
const conteiner = document.querySelector(".box");

async function getApi() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const getArray = results.results;
    conteiner.innerHTML = "";
    console.log(getArray);
    for (let i = 0; i < getArray.length; i++) {
      if (i === 8) {
        break;
      }
      const name = getArray[i].name;
      const rating = getArray[i].rating;
      const numberOfTags = getArray[i].tags;
      conteiner.innerHTML += `<div class="games"><ul class="api-list">
                  <li>Game title: ${name}
                  Game rating: ${rating}
                  Number of tags: ${numberOfTags.length}
                  </li></ul></div>`;
    }
  } catch (error) {
    console.log(error, "Could not get API");
    conteiner.innerHTML = `<p class="error">Promblems with the API get</p>`;
  } finally {
    console.log("All done");
  }
}

getApi();
