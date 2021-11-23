class App {
    constructor(window, vueTableauBord, vueCarte) {
        this.window = window;
        this.vueTableauBord = vueTableauBord;
        this.vueCarte = vueCarte;
        this.accueil = document.getElementById("vue-accueil").innerHTML;
        this.window.addEventListener("hashchange", () => this.naviguer());
        this.afficher();
        
        //permet en cas de reload de la page de revenir à l'index
        this.window.location.hash = "#";
    }

    afficher() {
        document.getElementsByTagName("body")[0].innerHTML = this.accueil;
    }

    naviguer() {
        let hash = window.location.hash;

        if (!hash) {
            this.afficher();
        } 
        else if (hash.match(/^#vue-tableau-bord/)) {
            this.vueTableauBord.afficher();
        }  
        else if (hash.match(/^#vue-carte/)) {
            this.vueCarte.afficher();

            let navigation = hash.match(/^#vue-carte\/([0-9]+)/);
            console.log(navigation[1]);
            let idSentier = navigation[1];
            this.vueCarte.initialiserCarte(idSentier);
        } 
    }
}

new App(window, new VueTableauBord(), new VueCarte());