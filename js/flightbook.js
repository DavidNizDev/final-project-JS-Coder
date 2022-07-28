function dale() {
    const flSubmit = document.getElementById("flSubmit"); // boton submit
    const pintarDatos = document.getElementById("pintarDatos"); // tbody
    let date = document.getElementById("date"); // input
    let depTime = document.getElementById("depTime"); // input 
    let arrivTime = document.getElementById("arrivTime"); // input
    let itinerary = document.getElementById("itinerary"); // input
    let typeCraft = document.getElementById("typeCraft"); // input
    let registration = document.getElementById("registration"); // input
    let hp = document.getElementById("hp"); // input
    let flightTime = document.getElementById("flightTime"); // input
    let landings = document.getElementById("landings"); // input

    let datosStorage = JSON.parse(localStorage.getItem("listaForm"));

    flSubmit.addEventListener("click", () => {
        if ((date.value != "") && (depTime.value != "") && (arrivTime.value != "") && (itinerary.value != "") && (typeCraft.value != "") && (registration.value != "") && hp.value != "" && (flightTime.value != "") && (landings.value != "")) {
            datosStorage.push({
                date: date.value,
                depTime: depTime.value,
                arrivTime: arrivTime.value,
                itinerary: itinerary.value,
                typeCraft: typeCraft.value,
                registration: registration.value,
                hp: hp.value,
                flightTime: flightTime.value,
                landings: landings.value
            });

            let fila = document.createElement("tr");
            let eLfecha = document.createElement("td");
            let eLdespegue = document.createElement("td");
            let eLarrivo = document.createElement("td");
            let eLiti = document.createElement("td");
            let eLavion = document.createElement("td");
            let eLmatricula = document.createElement("td");
            let eLcaballos = document.createElement("td");
            let eLtiempo = document.createElement("td");
            let eLatterizajes = document.createElement("td");

            eLfecha.textContent += `${date.value}`;
            eLdespegue.textContent += `${depTime.value}`;
            eLarrivo.textContent += `${arrivTime.value}`;
            eLiti.textContent += `${itinerary.value}`;
            eLavion.textContent += `${typeCraft.value}`;
            eLmatricula.textContent += `${registration.value}`;
            eLcaballos.textContent += `${hp.value}`;
            eLtiempo.textContent += `${flightTime.value}`;
            eLatterizajes.textContent += `${landings.value}`;

            pintarDatos.appendChild(fila);
            fila.appendChild(eLfecha);
            fila.appendChild(eLdespegue);
            fila.appendChild(eLarrivo);
            fila.appendChild(eLiti);
            fila.appendChild(eLavion);
            fila.appendChild(eLmatricula);
            fila.appendChild(eLcaballos);
            fila.appendChild(eLtiempo);
            fila.appendChild(eLatterizajes);


            localStorage.setItem("listaForm", JSON.stringify(datosStorage));

            date.value = "";
            depTime.value = "";
            arrivTime.value = "";
            itinerary.value = "";
            typeCraft.value = "";
            registration.value = "";
            hp.value = "";
            flightTime.value = "";
            landings.value = "";

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your flight has been logged.',
                showConfirmButton: false,
                timer: 1500
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Field/s missing',
                text: 'Fill every single field to save your flight!',
            });
        }
    })

    if (datosStorage != null) {
        datosStorage.forEach(e => {
            let fila = document.createElement("tr");
            let eLfecha = document.createElement("td");
            let eLdespegue = document.createElement("td");
            let eLarrivo = document.createElement("td");
            let eLiti = document.createElement("td");
            let eLavion = document.createElement("td");
            let eLmatricula = document.createElement("td");
            let eLcaballos = document.createElement("td");
            let eLtiempo = document.createElement("td");
            let eLatterizajes = document.createElement("td");

            eLfecha.textContent += `${e.date}`;
            eLdespegue.textContent += `${e.depTime}`;
            eLarrivo.textContent += `${e.arrivTime}`;
            eLiti.textContent += `${e.itinerary}`;
            eLavion.textContent += `${e.typeCraft}`;
            eLmatricula.textContent += `${e.registration}`;
            eLcaballos.textContent += `${e.hp}`;
            eLtiempo.textContent += `${e.flightTime}`;
            eLatterizajes.textContent += `${e.landings}`;

            pintarDatos.appendChild(fila);
            fila.appendChild(eLfecha);
            fila.appendChild(eLdespegue);
            fila.appendChild(eLarrivo);
            fila.appendChild(eLiti);
            fila.appendChild(eLavion);
            fila.appendChild(eLmatricula);
            fila.appendChild(eLcaballos);
            fila.appendChild(eLtiempo);
            fila.appendChild(eLatterizajes);
        })
    } else {
        datosStorage = [];
    }

    console.log(datosStorage);
}
dale();

const testLogin = document.getElementById("testLogin");

testLogin.addEventListener("click", () => {
    Swal.fire({
        title: 'Register Form',
        html: `<input type="email" id="email" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
        <br></br>
        <h6>You will receive a welcoming email :)</h6>`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
            const email = Swal.getPopup().querySelector('#email').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!email || !password) {
                Swal.showValidationMessage(`Please enter email and password`)
            } else {
                Swal.fire({
                    title: 'Welcome to Digital Flightbook!',
                    text: `All of your data saved in this site, will be stored in your browser LocalStorage.`,
                    imageUrl: 'https://media.istockphoto.com/photos/low-wing-airplane-picture-id1029268724?k=20&m=1029268724&s=612x612&w=0&h=FzPL3t8HSZKrf1H--uB5J0HMtokegqhgLwVCaklLq2Y=',
                    imageWidth: 400,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                })
            }
            return { email: email, password: password }
        }
    }).then((result) => {

    })
})
