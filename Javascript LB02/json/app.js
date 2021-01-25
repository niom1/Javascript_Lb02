
let index;
let kunde = undefined;
function showUI(){
    let htmlObj = document.getElementById("kunde");
    htmlObj.innerHTML =
        `id: ${kunde.kundenid}<br>`+
        `Name: ${kunde.firstname}<br>`+
        `Vorname: ${kunde.lastname}`;

    htmlObj = document.getElementById("adresse");
    htmlObj.innerHTML =
        `Strasse/Hausnr: ${kunde.adresse.strasse}<br>`+
        `Ort: ${kunde.adresse.ort}<br>`+
        `Plz: ${kunde.adresse.plz}`;

    
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    htmlObj.innerHTML = index;
}
function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (kundenListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    kunde = kundenListe[index];
    showUI();
}
function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    kunde = kundenListe[index];
    showUI();
}
if (kunde === undefined){
    index = 0;

    localStorage.setItem("index", index);
    kunde = kundenListe[index];
    showUI();
}
