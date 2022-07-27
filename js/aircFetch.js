const fetch150 = document.querySelector("#list150");
const fetch152 = document.querySelector("#list152");
const fetchPA38 = document.querySelector("#pa-38");
const fetchPA28 = document.querySelector("#pa-28");
const fetch172 = document.querySelector("#list172");

function c150() {
    fetch("../avionesLivianos.json")
        .then((response) => response.json())
        .then((aviones) => {
            aviones.forEach((avion) => {
                let av150 = document.createElement("div");
                av150.classList = "divInterno"
                av150.innerHTML = `<div><li><h6>Introduction year: <b>${avion.cessna.c150.añoFabricación}</b></h6></li>
                                <li><h6>Horse power: <b>${avion.cessna.c150.hp}</b></h6></li>
                                <li><h6>Cruise speed: <b>${avion.cessna.c150.cruiseSpeed}</b></h6></li>
                                <li><h6>Range: <b>${avion.cessna.c150.range}</b></h6></li>
                                <li><h6>Fuel burn: <b>${avion.cessna.c150.fuelBurn}</b></h6></li>
                                <li><h6>Empty weight: <b>${avion.cessna.c150.emptyWeight}</b></h6></li>
                                <li><h6>Origin: <b>${avion.cessna.c150.origen}</b></h6></li></div>
                                <div><img src=\"https://www.ecured.cu/images/e/e8/Cessna-150a.jpg\" width=\"500px\" height=\"350px\"></div>`;
                fetch150.appendChild(av150);
            });
        })
}
function c152() {
    fetch("../avionesLivianos.json")
        .then((response) => response.json())
        .then((aviones) => {
            aviones.forEach((avion) => {
                let av152 = document.createElement("div");
                av152.classList = "divInterno"
                av152.innerHTML = `<div><li><h6>Introduction year: <b>${avion.cessna.c152.añoFabricación}</b></h6></li>
                                <li><h6>Horse power: <b>${avion.cessna.c152.hp}</b></h6></li>
                                <li><h6>Cruise speed: <b>${avion.cessna.c152.cruiseSpeed}</b></h6></li>
                                <li><h6>Range: <b>${avion.cessna.c152.range}</b></h6></li>
                                <li><h6>Fuel burn: <b>${avion.cessna.c152.fuelBurn}</b></h6></li>
                                <li><h6>Empty weight: <b>${avion.cessna.c152.emptyWeight}</b></h6></li>
                                <li><h6>Origin: <b>${avion.cessna.c152.origen}</b></h6></li></div>
                                <div><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Cessna.fa152.aerobat.oo-lvj.arp.jpg/1280px-Cessna.fa152.aerobat.oo-lvj.arp.jpg\" width=\"500px\" height=\"350px\"></div>`;
                fetch152.appendChild(av152);
            });
        })
}
function pa38() {
    fetch("../avionesLivianos.json")
        .then((response) => response.json())
        .then((aviones) => {
            aviones.forEach((avion) => {

                let avPA38 = document.createElement("div");
                avPA38.classList = "divInterno"
                avPA38.innerHTML = `<div><li><h6>Introduction year: <b>${avion.cessna.pa38.añoFabricación}</b></h6></li>
                                <li><h6>Horse power: <b>${avion.cessna.pa38.hp}</b></h6></li>
                                <li><h6>Cruise speed: <b>${avion.cessna.pa38.cruiseSpeed}</b></h6></li>
                                <li><h6>Range: <b>${avion.cessna.pa38.range}</b></h6></li>
                                <li><h6>Fuel burn: <b>${avion.cessna.pa38.fuelBurn}</b></h6></li>
                                <li><h6>Empty weight: <b>${avion.cessna.pa38.emptyWeight}</b></h6></li>
                                <li><h6>Origin: <b>${avion.cessna.pa38.origen}</b></h6></li></div>
                                <div><img src=\"https://pbs.twimg.com/media/EO0Y8YpW4AEbITr?format=jpg&name=medium\" width=\"500px\" height=\"350px\"></div>`;
                fetchPA38.appendChild(avPA38);
            });
        })
}
function pa28() {
    fetch("../avionesLivianos.json")
        .then((response) => response.json())
        .then((aviones) => {
            aviones.forEach((avion) => {
                let avPA28 = document.createElement("div");
                avPA28.classList = "divInterno"
                avPA28.innerHTML = `<div><li><h6>Introduction year: <b>${avion.cessna.pa28.añoFabricación}</b></h6></li>
                                <li><h6>Horse power: <b>${avion.cessna.pa28.hp}</b></h6></li>
                                <li><h6>Cruise speed: <b>${avion.cessna.pa28.cruiseSpeed}</b></h6></li>
                                <li><h6>Range: <b>${avion.cessna.pa28.range}</b></h6></li>
                                <li><h6>Fuel burn: <b>${avion.cessna.pa28.fuelBurn}</b></h6></li>
                                <li><h6>Empty weight: <b>${avion.cessna.pa28.emptyWeight}</b></h6></li>
                                <li><h6>Origin: <b>${avion.cessna.pa28.origen}</b></h6></li></div>
                                <div><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/06/Piper.gdltr.750pix.jpg\" width=\"500px\" height=\"350px\"></div>`;
                fetchPA28.appendChild(avPA28);
            });
        })
}
function c172() {
    fetch("../avionesLivianos.json")
        .then((response) => response.json())
        .then((aviones) => {
            aviones.forEach((avion) => {
                let av172 = document.createElement("div");
                av172.classList = "divInterno"
                av172.innerHTML = `<div><li><h6>Introduction year: <b>${avion.cessna.c172.añoFabricación}</b></h6></li>
                                <li><h6>Horse power: <b>${avion.cessna.c172.hp}</b></h6></li>
                                <li><h6>Cruise speed: <b>${avion.cessna.c172.cruiseSpeed}</b></h6></li>
                                <li><h6>Range: <b>${avion.cessna.c172.range}</b></h6></li>
                                <li><h6>Fuel burn: <b>${avion.cessna.c172.fuelBurn}</b></h6></li>
                                <li><h6>Empty weight: <b>${avion.cessna.c172.emptyWeight}</b></h6></li>
                                <li><h6>Origin: <b>${avion.cessna.c172.origen}</b></h6></li></div>
                                <div><img src=\"http://www.vuelosdebautismo.com.ar/galeria/g-cessna-172/data7/images/n5302r6.jpg\" width=\"500px\" height=\"350px\"></div>`;
                fetch172.appendChild(av172);
            });
        })
}

c150();
c152();
pa38();
pa28();
c172()

