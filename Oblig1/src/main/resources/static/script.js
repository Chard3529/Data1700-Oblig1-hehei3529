const billettArray = [];

//Functions to get information from inputs
function selectFilm() {
    return $("#film").val();
}

function getAntall() {
    const antall = $("#antall").val();
    $("#antall").val("");
    return antall;
}

function getPersonalia() {
    const personalia = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#tlf").val(),
        epost: $("#epost").val()
    };

    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#tlf").val("");
    $("#epost").val("");

    return personalia;
}

//Functions to validate inputs

function isEmptyCheck (a) {
    if (a === "") {
        return true;
    }
    else {
        return false;
    }
}

function isValidEmail(string) {

    //valid email RegExp taken from (https://www.w3resource.com/javascript/form/email-validation.php)
    const format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (string.match(format)) {
        return true;
    }
    else {
        return false;
    }

}

function clearWarnings(){
    $("#antallFeil").text("");
    $("#filmFeil").text("");
    $("#fornavnFeil").text("");
    $("#etternavnFeil").text("");
    $("#tlfFeil").text("");
    $("#epostFeil").text("");
}


//Function gets inputs, runs checks, and prints errors, or adds information to the array
function regBillett(){
    const film = selectFilm();
    const antall = getAntall();
    const personalia = getPersonalia();
    let noFails = true;

    if (film === "NoChoice"){
        noFails = false;
        $("#filmFeil").text("Må velge film");
    }

    //Checks if any of the fields are empty, or contains wrong variable type and prints error
    if (isEmptyCheck(antall)) {
        noFails = false;
        $("#antallFeil").text("Må fylle inn feltet");
    }
    else if(isNaN(antall)) {
        noFails = false;
        $("#antallFeil").text("Må fylle inn tall");
    }

    if (isEmptyCheck(personalia.fornavn)) {
        noFails = false;
        $("#fornavnFeil").text("Må fylle inn feltet");
    }
    else if(!isNaN(personalia.fornavn)) {
        noFails = false;
        $("#fornavnFeil").text("Må fylle inn bokstaver");
    }

    if (isEmptyCheck(personalia.etternavn)) {
        noFails = false;
        $("#etternavnFeil").text("Må fylle inn feltet");
    }
    else if(!isNaN(personalia.etternavn)) {
        noFails = false;
        $("#etternavnFeil").text("Må fylle inn bokstaver");
    }

    if (isEmptyCheck(personalia.tlf)) {
        noFails = false;
        $("#tlfFeil").text("Må fylle inn feltet");
    }
    else if(isNaN(personalia.tlf)) {
        noFails = false;
        $("#tlfFeil").text("Må fylle inn tall");
    }

    if (isEmptyCheck(personalia.epost)) {
        noFails = false;
        $("#epostFeil").text("Må fylle inn feltet");
    }
    else if (!isValidEmail(personalia.epost)) {
        noFails = false;
        $("#epostFeil").text("Må fylle inn valid epost");
    }

    if (noFails) {
        const billettObject = {
            film: film,
            antall: antall,
            fornavn: personalia.fornavn,
            etternavn: personalia.etternavn,
            tlf: personalia.tlf,
            epost: personalia.epost
        };
        billettArray.push(billettObject);
        printArray();
    }
}

function printArray(){
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>TelefonNr</th>" +
        "<th>Epost</th>" +
        "</tr>";

    for (let object of billettArray) {
        ut += "<tr>" +
            "<td>" + object.film + "</td>" +
            "<td>" + object.antall + "</td>" +
            "<td>" + object.fornavn + "</td>" +
            "<td>" + object.etternavn + "</td>" +
            "<td>" + object.tlf + "</td>" +
            "<td>" + object.epost + "</td>" +
            "</tr>";
    }

    ut += "</table>";
    $("#ut").html(ut);
}

function slettBillett() {
    billettArray.splice(0, billettArray.length);
    $("#ut").html("");
}





