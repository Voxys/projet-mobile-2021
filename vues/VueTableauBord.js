class VueTableauBord {
    constructor() {
        this.tableauBord = document.getElementById("vue-tableau-bord").innerHTML;
        this.baseDeDonneesDAO = new BaseDeDonneesDAO();
    }
    
    async afficher() {
        var liste = JSON.parse(await this.baseDeDonneesDAO.obtenirListeSentiers());
        document.getElementsByTagName("body")[0].innerHTML = this.tableauBord;

        document.getElementById("slides-container").innerHTML =
        '<ion-slides id="slider">' + '</ion-slides>';
        
        for(let i = 0; i < liste.length; i++){
            
            console.log(liste[i].properties);

            var card =  
            "<ion-slide>" +
            '<a id="refSentier" href="#vue-carte/{Sentier.id}">' + 
            "<ion-card>" +
            "<ion-card-header>" +
            "<ion-card-title>" + liste[i].properties['nom_etab'] + "</ion-card-title>" +
            "</ion-card-header>" +
            '<div class="ion-card-bottom">' +
            '<ion-chip color="primary">' +
            "<ion-label>" + liste[i].properties['usager'] + "</ion-label>" +
            "</ion-chip>" +
            "</div>" +
            "</ion-card>" +
            "</a>" +
            "</ion-slide>";

        document.getElementById("slider").insertAdjacentHTML('beforeend', card);
        
        
    }

        for(let i = 0; i < liste.length; i++){
            console.log("ICI" + liste[i].properties['fid']);
            let html = document.getElementById("slides-container").innerHTML;
            document.getElementById("slides-container").innerHTML = html.replace("{Sentier.id}", liste[i].properties['fid']);
        }

        // var listeSentier = document.getElementById("slides-container");
        // console.log(listeSentier);
        // const listeSentierItemHTML = listeSentier.innerHTML;
        // let listeSentierHTMLRemplacement = "";

        // for(let i = 0; i < 1; i++){
        //     let listeSentierHTMLRemplacement = listeSentierItemHTML;
        //     listeSentierHTMLRemplacement = listeSentierItemHTML.replace("{Sentier.id}", liste[i].properties['fid']);
        //     listeSentierHTMLRemplacement += listeSentierItemHTML;
        //     console.log("======================================");

        //     console.log(listeSentierHTMLRemplacement);
        // }
        // listeSentier.innerHTML = listeSentierHTMLRemplacement;
        
        
        // document.getElementById("slides-container").innerHTML =
        // '<ion-slides id="slider">' + '</ion-slides>';
        
        // for(let i = 0; i < liste.length; i++){
            
        //     console.log(liste[i].properties);

        //     var card =  
        //     "<ion-slide>" +
        //     '<a id="refSentier" href="#vue-carte/{Sentier.id}">' + 
        //     "<ion-card>" +
        //     "<ion-card-header>" +
        //     "<ion-card-title>" + liste[i].properties['nom_etab'] + "</ion-card-title>" +
        //     "</ion-card-header>" +
        //     '<div class="ion-card-bottom">' +
        //     '<ion-chip color="primary">' +
        //     "<ion-label>" + liste[i].properties['usager'] + "</ion-label>" +
        //     "</ion-chip>" +
        //     "</div>" +
        //     "</ion-card>" +
        //     "</a>" +
        //     "</ion-slide>";

        // document.getElementById("slider").insertAdjacentHTML('beforeend', card);
        // document.getElementById("slider").innerHTML = card;
        
        
    //}
    

        

    }
}