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
            xhttp.onload =  function() {
                console.log(this.responseText);
                // this.coordonnees = this.responseText;
            }
                xhttp.onreadystatechange = async function(){
                    if(xhttp.readyState === 4){
                        this.coordonnees = await xhttp.responseText;
                        console.log(this.coordonnees);
                    }
                    console.log(this.coordonnees);

                }

                xhttp.open("GET", "http://51.222.140.74:3000");
                xhttp.send();
            }
            catch(err){
                console.log(err.stack)
            }

    }

   




    obtenirEtablissement(idSentier) {
        //dire a node js de renvoyer l'etablissement 

    }
}