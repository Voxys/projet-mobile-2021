class VueTableauBord {
    constructor() {
        this.tableauBord = document.getElementById("vue-tableau-bord").innerHTML;
        console.log("constructor VueTableauBord.js");
    }

    afficher() {
        console.log("VueTableauBord" + "\n" +   "   |___> afficher()");
        document.getElementsByTagName("body")[0].innerHTML = this.tableauBord;
    }
}