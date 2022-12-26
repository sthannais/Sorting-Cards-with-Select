//arreglo total de cartas
const cards = [6, 7, 8, 9, "A", 2, 5, "K", 10, 4];
const incons = ["♣", "♦", "♥", "♠"];
const divCartasJugador = document.querySelector("#cards-general");
const divContainerSort = document.querySelector("#cardssencudary");
let arrayCards = [];
let colorChange = ["colorIconRed", "colorIconBlack"];

document.getElementById("btnbutton").addEventListener("click", function () {
  let c = 0;
  let i = 0;
  arrayCards = [];

  document.getElementById("cards-general").innerHTML = "";
  document.getElementById("cardssencudary").innerHTML = "";

  //let elemSecondary = document.getElementById("cardssencudary");
  //elemSecondary.parentNode.removeChild(elemSecondary);
  let valueinput = document.getElementById("numbercards").value;
  while (i < valueinput) {
    let numberRandom = numberCardsAletory(cards);
    if (!arrayCards.includes(numberRandom)) {
      i++;
      let carta = document.createElement("div");
      carta.classList.add("col-md-auto", `card-1-${i}`);
      divCartasJugador.append(carta);

      let divCartasJugador2 = document.querySelector(`.card-1-${i}`);
      let carta2 = document.createElement("div");
      carta2.classList.add(`card`, "card-margin", `card-2-${i}`);
      divCartasJugador2.append(carta2);

      let divCartasJugador3 = document.querySelector(`.card-2-${i}`);
      let carta3 = document.createElement("div");
      let iconRandom = numberCardsAletory(incons);
      let iconColorAletory = numberCardsAletory(colorChange);
      arrayCards.push(numberRandom);
      if (iconRandom >= 10) {
        carta3.classList.add(`card-body`, "card-position2", `card-3-${i}`);
      } else {
        carta3.classList.add(`card-body`, "card-position", `card-3-${i}`);
      }
      divCartasJugador3.append(carta3);

      document.getElementsByClassName(`card-3-${i}`)[0].innerHTML =
        numberRandom;

      let divCartasJugador4 = document.querySelector(`.card-3-${i}`);
      let carta4 = document.createElement("i");
      carta4.classList.add(`fa`, `card-4-${i}`, iconColorAletory);
      divCartasJugador4.append(carta4);
      document.getElementsByClassName(`card-4-${i}`)[0].innerHTML = iconRandom;

      let divCartasJugador5 = document.querySelector(`.card-3-${i}`);
      let carta5 = document.createElement("i");
      carta5.classList.add(
        `fa2`,
        "fa",
        `icons`,
        `card-5-${i}`,
        iconColorAletory
      );
      divCartasJugador5.append(carta5);
      document.getElementsByClassName(`card-5-${i}`)[0].innerHTML = iconRandom;
    }

    //console.log(numberCardsAletory(cards));
  }
  //Del areglo devuelve el valor aleatorio.
});

function numberCardsAletory(random) {
  return random[Math.floor(Math.random() * random.length)];
}

//const cards = [7, 6, 8, 9, "A", 2, 5, "K", 10, 4];

//evento al hacer click ordenadamente.
const addNumberCard = (i, numberRandom, key, valueRow) => {
  //let divCartasRow = document.querySelector(`.card-11-${i}`);

  if (key == 1) {
    let createRow = document.createElement("div");
    createRow.classList.add("row", "mt-4", `card-11-row-${valueRow}`);
    divContainerSort.append(createRow);
  }
  let iconColorAletory = numberCardsAletory(colorChange);

  let searchDivRow = document.querySelector(`.card-11-row-${valueRow}`);
  let carta = document.createElement("div");
  carta.classList.add("col-md-auto", `card-11-${i}`);
  searchDivRow.append(carta);

  let searchDivAuto = document.querySelector(`.card-11-${i}`);
  let divAuto = document.createElement("div");
  divAuto.classList.add(`card`, "card-margin", `card-22-${i}`);
  searchDivAuto.append(divAuto);

  let divCartasJugador3 = document.querySelector(`.card-22-${i}`);
  let carta3 = document.createElement("div");
  let iconRandom = numberCardsAletory(incons);
  arrayCards.push(numberRandom);
  if (iconRandom >= 10) {
    carta3.classList.add(
      `card-body`,
      "card-position2",
      `card-33-${i}`,
      iconColorAletory
    );
  } else {
    carta3.classList.add(
      `card-body`,
      "card-position",
      `card-33-${i}`,
      iconColorAletory
    );
  }
  divCartasJugador3.append(carta3);

  document.getElementsByClassName(`card-33-${i}`)[0].innerHTML = numberRandom;

  let divCartasJugador4 = document.querySelector(`.card-33-${i}`);
  let carta4 = document.createElement("i");
  carta4.classList.add(`fa`, `card-44-${i}`);
  divCartasJugador4.append(carta4);
  document.getElementsByClassName(`card-44-${i}`)[0].innerHTML = iconRandom;

  let divCartasJugador5 = document.querySelector(`.card-33-${i}`);
  let carta5 = document.createElement("i");
  carta5.classList.add(`fa2`, "fa", `icons`, `card-55-${i}`);
  divCartasJugador5.append(carta5);
  document.getElementsByClassName(`card-55-${i}`)[0].innerHTML = iconRandom;
};

document.getElementById("btnbutton2").addEventListener("click", function () {
  document.getElementById("cardssencudary").innerHTML = "";
  let temp = 0;
  let temp2 = 0;
  let indexOf = 0;
  let newArray = [...arrayCards];
  let index = 0;
  let valueRow = 0;
  for (let i = 0; i < newArray.length; i++) {
    indexOf = newArray.indexOf(newArray[i]);
    if (newArray[i] == "K") {
      newArray[i] = 11;
    }
    if (newArray[i] == "A") {
      newArray[i] = 12;
    }

    for (let j = i; j < newArray.length; j++) {
      if (newArray[i] > newArray[j]) {
        if (temp == 0 || temp >= newArray[j]) {
          temp = newArray[j];
          indexOf = newArray.indexOf(newArray[j]);
        }
      }
    }
    temp2 = newArray[i];
    newArray[i] = temp;
    newArray[indexOf] = temp2;
    temp = 0;
    for (let result of newArray) {
      index++;
      if (result == "11") {
        result = "K";
      }
      if (result == "12") {
        result = "A";
      }
      addNumberCard(i + "" + result, result, index, valueRow);
    }
    valueRow++;
    index = 0;
  }
});
