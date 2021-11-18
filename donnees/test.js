var filtreRaquette = [];
var filtreSki = [];
var filtreSkiNordique = [];
var filtrePieton = [];

function filterSki(etablissement){ 
	for(let i = 0; i < data.features.length; i++){

		if(data.features[i].properties.Usager == "Ski classique"){
			filtreSki.push(data.features[i].properties);
		}

		else if(data.features[i].properties.Usager_2 == "Ski classique"){
			filtreSki.push(data.features[i].properties);
		}

		else if(data.features[i].properties.Usager_3 == "Ski classique"){
			filtreSki.push(data.features[i].properties);
		}

		else if(data.features[i].properties.Usager_4 == "Ski classique"){
			filtreSki.push(data.features[i].properties);
		}
	}
}

console.log(filtreSki);

