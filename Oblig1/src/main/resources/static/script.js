let bilettArray = [];
function velgFilm() {
    return $("#film").val();
}

function buyBilett(){
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const tlf = $("#tlf").val();
    const epost = $("#epost").val();

    switch (fornavn) {
        case "":
            $("#fornavn").val("Feltet må fylles");
            break;

        case (!(isNaN(fornavn))):
            $("#fornavn").val("Skriv in bokstaver");
            break;

        default:
            $("#fornavn").val(fornavn);
    }

}

