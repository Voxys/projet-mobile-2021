class App {
    constructor(window, vueTableauBord, vueCarte) {
        this.window = window;
        this.vueTableauBord = vueTableauBord;
        this.vueCarte = vueCarte;
        this.accueil = document.getElementById("vue-accueil").innerHTML;
        this.window.addEventListener("hashchange", () => this.naviguer());
        console.log("constructor App.js");
        this.afficher();
        
        //permet en cas de reload de la page de revenir à l'index
        this.window.location.hash = "#";
    }

    afficher() {
        console.log("App.js" + "\n" + "   |___> afficher()");
        document.getElementsByTagName("body")[0].innerHTML = this.accueil;
    }

    naviguer() {
        console.log("App.js" + "\n" + "   |___> naviguer()");
        let hash = window.location.hash;

        if (!hash) {
            this.afficher();
        } else if (hash.match(/^#vue-tableau-bord/)) {
            this.vueTableauBord.afficher();
        }  else if (hash.match(/^#vue-carte/)) {
            this.vueCarte.afficher();
            this.vueCarte.initialiserCarte();
        } 
    }
}

new App(window, new VueTableauBord(), new VueCarte());