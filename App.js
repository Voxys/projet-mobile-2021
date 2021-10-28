class App {
    constructor(window, vueTableauBord) {
        this.window = window;
        this.vueTableauBord = vueTableauBord;
        this.accueil = document.getElementById("vue-accueil").innerHTML;
        this.window.addEventListener("hashchange", () => this.naviguer());
        console.log("constructor App.js");
        this.afficher();
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
        } else if (hash.match(/^#tableau-bord/)) {
            this.vueTableauBord.afficher();
        }
    }
}

new App(window, new VueTableauBord());