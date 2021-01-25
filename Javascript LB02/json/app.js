

/**
 * Deklaration der Variablen
 */
let index;
let kunde = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Identification
    let htmlObj = document.getElementById("kunde");
    htmlObj.innerHTML =
        `id: ${kunde.kundenid}<br>`+
        `Name: ${kunde.firstname}<br>`+
        `Vorname: ${kunde.lastname}`;

//adresse
    htmlObj = document.getElementById("adresse");
    htmlObj.innerHTML =
        `Strasse/Hausnr: ${kunde.adresse.strasse}<br>`+
        `Ort: ${kunde.adresse.ort}<br>`+
        `Plz: ${kunde.adresse.plz}`;

    

    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (kundenListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    kunde = kundenListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    kunde = kundenListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (kunde === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    kunde = kundenListe[index];
    //zeige den Eintrag
    showUI();
}
