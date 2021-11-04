const bannerElement = document.getElementById("banner--container");
const bannerNumber = document.getElementById("banner--number");
const bannerDescription = document.getElementById("banner--description");
const bannerName1 = document.querySelector("#banner--name-1");
const bannerName2 = document.querySelector("#banner--name-2");


window.onload = ()=>{
    localStorage.setItem("@N1-RUSH_valueCar", 0);
    return;
}

function IncrementCar(){
    const valueStorage = localStorage.getItem("@N1-RUSH_valueCar");
    const numberCircle = document.createElement("span");
    const buttonCar = document.getElementById("car");
    
    if(localStorage.getItem("@N1-RUSH_valueCar") === "0"){
        buttonCar.append(numberCircle);
    }

    numberCircle.setAttribute("class", "circle--number");
    localStorage.setItem("@N1-RUSH_valueCar", 1*(valueStorage) + 1);
    numberCircle.textContent = localStorage.getItem("@N1-RUSH_valueCar");

    if(localStorage.getItem("@N1-RUSH_valueCar") !== "0"){
        document.querySelector("#car span").innerHTML = localStorage.getItem("@N1-RUSH_valueCar");
    }

}

function NextBannerImg(){
    bannerElement.style.backgroundImage = "url(./assets/img/principal_banner_desktop_02.jpg)";
    bannerNumber.innerHTML = "2";
    bannerName1.innerHTML = "RED DEAD 2";
    bannerName2.innerHTML = "RED DEAD 2";
    bannerDescription.innerHTML = "RDR 2 é um prólogo do primeiro jogo, ou seja, é ambientado um pouco antes da história original. O game se passa em 1899, quando ocorre o declínio do Velho Oeste Americano.";
}
function PreviousBannerImg(){
    bannerElement.style.backgroundImage = "url(./assets/img/principal_banner_desktop.jpg)";
    bannerNumber.innerHTML = "1";
    bannerName1.innerHTML = "MORTAL KOMBAT";
    bannerName2.innerHTML = "MORTAL KOMBAT";
    bannerDescription.innerHTML = "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.";
}
function BuyProduct(element){
    const imgElement = document.createElement("img");

    if(element.getAttribute("id") === "active" ){
        return;
    }

    imgElement.className = "img--icon-confirmed";
    imgElement.setAttribute("src", "./assets/icons/mario_small.png");
    imgElement.setAttribute("alt", "Image Mario");

    element.setAttribute("id", "active")
    element.style.backgroundColor = "#084154";
    element.append(imgElement);

    IncrementCar();
}