class BaseDeDonneesDAO {
    constructor() {
        this.pool;
        this.coordonnees;
    }

    async obtenirCoordonnees(idSentier) {

        try {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://51.222.140.74:3000", false);
            xhttp.setRequestHeader("id", idSentier);
            xhttp.setRequestHeader("requete", "obtenirCoordonnees");
            xhttp.send();
            this.coordonnees = xhttp.responseText;
        } catch (err) {
            console.log(err.stack)
        }
        return this.coordonnees;
    }

    async obtenirListeSentiers() {
        try {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://51.222.140.74:3000", false);
            // xhttp.setRequestHeader("id", idSentier);
            xhttp.setRequestHeader("requete", "obtenirListeSentiers");
            xhttp.send();
            this.listeSentiers = xhttp.responseText;
        } catch (err) {
            console.log(err.stack)
        }
        return this.listeSentiers;
    }

    obtenirEtablissement(idSentier) {

    }
}