class VueTableauBord {
    constructor() {
        this.tableauBord = document.getElementById("vue-tableau-bord").innerHTML;
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.tableauBord;
    }
}
