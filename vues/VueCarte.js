class VueCarte {
    constructor() {
        this.vueCarte = document.getElementById("vue-carte").innerHTML;
        console.log("constructor VueCarte.js");
    }

    afficher() {
        console.log("VueCarte" + "\n" +   "   |___> afficher()");
        document.getElementsByTagName("body")[0].innerHTML = this.vueCarte;
    }
}