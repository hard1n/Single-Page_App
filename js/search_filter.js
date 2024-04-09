const d = document;

export function searchFilter(input, selector) {
  const $cardsNode = d.querySelectorAll(selector);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // console.log(e.target.value)
      $cardsNode.forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("hide")
          : el.classList.add("hide")
      );
    }
  });
}

export function createCards() {
  const $fragment = d.createDocumentFragment();
  const $container = d.querySelector(".cards-container");
  const $template = d.getElementById("card-template");

  const $card = d.querySelector(".card");
  console.log(`Mensaje este`);
  const getData = async () => {
    try {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };
      let res = await fetch("https://rickandmortyapi.com/api/character");
      let resJSON = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      // $card.querySelector("img").setAttribute("src", resJSON.results[0].image);
      // console.log(resJSON.results[0].name);
      /** Creating cards dynamically **/
      resJSON.results.forEach((el) => {
        let $clone = $template.content.cloneNode(true);
        $clone.querySelector("img").setAttribute("src", el.image);
        $clone.querySelector(".name").textContent = el.name;

        $fragment.appendChild($clone);
      });
      $container.appendChild($fragment);
    } catch (error) {
      console.log(error);
    }
  };

  getData();
  // d.addEventListener("DOMContentLoaded", getData);
}
