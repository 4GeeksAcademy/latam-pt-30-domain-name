import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let textOf = `<ul class="list-group list-group-flush">
  <li class="list-group-item bg-dark text-white">Domain names generados</li>`;

  for (const iterator of pronoun) {
    for (const item of adjective) {
      for (const element of noun) {
        textOf += `
          <li class="list-group-item">
            ${iterator}${item}${element}.com
          </li>`;
      }
    }
  }
  textOf += "</ul>";
  document.querySelector("#for").innerHTML = textOf;
};
