class BaseDeDonneesDAO {
    constructor() {
        this.pool;
        this.coordonnees;
    }

    initialiserConnexion() {
        //dire a node js de ce connecter
    }

    async obtenirCoordonnees(idSentier) {
        //dire a node js de renvoyer les coordonnes du sentier

        try{
            
            const xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://51.222.140.74:3000",false);
                xhttp.send();
                //console.log(xhttp.responseText);
                this.coordonnees = xhttp.responseText;
                
            }
            catch(err){
                console.log(err.stack)
            }
            return this.coordonnees;

    }

   




    obtenirEtablissement(idSentier) {
        //dire a node js de renvoyer l'etablissement 

    }
}