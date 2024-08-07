let UserData; // Globale Variable zum Speichern der Vergleichsdaten
let LoadVariable = 0; //Globale Variabel zum Speichern des zu Ladenden Arrays

// Delay Funktion
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

//Lädt die UserDaten aus der UserData.json Datei
function getUserData() {
    fetch('./data/UserData.json') 
        .then(response => response.json()) 
        .then(data => {
            UserData = data
        });
}

//Wartet auf das Laden der Daten und startet dann die Anzeige
async function AwaitLoadUserData() {

    getUserData()
    await delay(1);

    LoadUserData()
}

// Geht die einzelnen Datensätze Datensätze durch und stellt sie grafisch da
// Funktion ruft sich selber wieder auf und stellt nächsten Datensatz da
function LoadUserData() {

    if (UserData[LoadVariable] != undefined) { 
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

// Überprüft ob jeweilige Checkbox bereits aktiviert ist oder nicht
// Wenn Sie bereits aktiviert ist, wird der Filter zurück gesetzt
// Wenn er nicht aktiv ist werden die Daten geladen und die jeweilige Funktion abgerufen, nach der Gefiltert werden soll
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

// Überprüft das Alter
// Wenn das Alter nicht passend ist, wird der Eintrag visuell gelöscht
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

// Überprüft das Alter
// Wenn das Alter nicht passend ist, wird der Eintrag visuell gelöscht
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

// Überprüft die Position auf CEO
// Wenn das Alter nicht passend ist, wird der Eintrag visuell gelöscht
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

// Überprüft die Position auf Mitarbeiter
// Wenn das Alter nicht passend ist, wird der Eintrag visuell gelöscht
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

// Überprüft die Position auf Azubi
// Wenn das Alter nicht passend ist, wird der Eintrag visuell gelöscht
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