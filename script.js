let UserData; // Globale Variable zum Speichern der Vergleichsdaten
let LoadVariable = 0; //Globale Variabel zum Speichern des zu Ladenden Arrays

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

function getUserData() {
    console.log("1")
    fetch('./data/UserData.json') // Läd die JSON Datei
        .then(response => response.json()) // Sendet eine Response von der JSON
        .then(data => {
            UserData = data
        });
}

async function AwaitLoadUserData() {

    getUserData()
    await delay(1);

    LoadUserData()
}

function LoadUserData() {

    if (UserData[LoadVariable] != undefined) { //Überprüft ob es den gesuchten Array überhaupt gibt
        document.getElementById("UserBox").innerHTML += `
        <div id="${LoadVariable}" class="UserBoxPlacement">
        <div class="UserBox">
        <div class="Ü2"><i class="fa-regular fa-user"></i> ${UserData[LoadVariable].name}</div>
        <div class="Text1">Alter: ${UserData[LoadVariable].alter}</div>
        <div class="Text1">Positon: ${UserData[LoadVariable].position}</div>
        <div class="Text1">Bemerkung: ${UserData[LoadVariable].bemerkung}</div>
        </div>
        </div>`

        LoadVariable = LoadVariable + 1;
        LoadUserData()
    }
}

async function FilterFunction(ID) { 
    let FilterVariable = 0; 
    const NewID = ID 

    if (document.getElementById(NewID).checked == false) {
        LoadVariable = 0
        document.getElementById("UserBox").innerHTML = ``;
        AwaitLoadUserData()
    }

    else {
        getUserData() 
        await delay(1); 
        window[NewID](FilterVariable); 
    }
}

function Alter1(FilterVariable) {

    if (UserData[FilterVariable] != undefined) { 
        if (UserData[FilterVariable].alter > 40) {
            document.getElementById(FilterVariable).innerHTML = ``;
            FilterVariable = FilterVariable + 1;
            Alter1(FilterVariable)
        }
    }
    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].alter <= 40) {
            FilterVariable = FilterVariable + 1;
            Alter1(FilterVariable)
        }
    }
}

function Alter2(FilterVariable) {

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].alter < 40) {
            document.getElementById(FilterVariable).innerHTML = ``;
            FilterVariable = FilterVariable + 1;
            Alter2(FilterVariable)
        }
    }
    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].alter >= 40) {
            FilterVariable = FilterVariable + 1;
            Alter2(FilterVariable)
        }
    }
}

function Rang1(FilterVariable) {

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position != "CEO") {
            document.getElementById(FilterVariable).innerHTML = ``;
            FilterVariable = FilterVariable + 1;
            Rang1(FilterVariable)
        }
    }

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position == "CEO") {
            FilterVariable = FilterVariable + 1;
            Rang1(FilterVariable)
        }
    }
}

function Rang2(FilterVariable) {

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position != "Mitarbeiter") {
            document.getElementById(FilterVariable).innerHTML = ``;
            FilterVariable = FilterVariable + 1;
            Rang2(FilterVariable)
        }
    }

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position == "Mitarbeiter") {
            FilterVariable = FilterVariable + 1;
            Rang2(FilterVariable)
        }
    }
}

function Rang3(FilterVariable) {

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position != "Azubi") {
            document.getElementById(FilterVariable).innerHTML = ``;
            FilterVariable = FilterVariable + 1;
            Rang3(FilterVariable)
        }
    }

    if (UserData[FilterVariable] != undefined) {
        if (UserData[FilterVariable].position == "Azubi") {
            FilterVariable = FilterVariable + 1;
            Rang3(FilterVariable)
        }
    }
}