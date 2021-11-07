function CreatedAreaSearch(){
    let areaSearch = document.querySelectorAll('.busca input');
    let colectionSearch = document.createElement('div');
    colectionSearch.classList.add('colectionSearch');
    colectionSearch.append(areaSearch[0]);
    colectionSearch.append(areaSearch[1]);
    $('.busca input').remove();
    document.querySelector('.busca').append(colectionSearch);
}

window.onload = ()=>{
    localStorage.setItem("@N1-RUSH_valueCar", 0);
    $('.helperComplement').remove();
    $('.busca label').remove();
    CreatedAreaSearch()
    return;
}

function ChangeSliderName(){
    var name = $("#banner--name-2").text();
    if(name === "MORTAL KOMBAT"){
        document.getElementById("banner--name-2").innerHTML = "RED DEAD 2";
        document.getElementById("banner--number").innerHTML = "2";
    } else {
        document.getElementById("banner--number").innerHTML = "1";
        document.getElementById("banner--name-2").innerHTML = "MORTAL KOMBAT";
    }
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
function SearchActive(){
    let searchDocument = document.querySelector('.area--search');
    if(searchDocument.classList.contains('active')){
        searchDocument.style.left = 0;
        searchDocument.classList.remove('active');
    } else {
        searchDocument.style.left = "-100%";
        searchDocument.classList.add('active');
    }
}

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: $("#next"),
    prevArrow: $("#previous"),
    draggable: false,
});