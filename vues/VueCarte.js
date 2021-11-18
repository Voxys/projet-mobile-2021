class VueCarte {
	constructor() {
		console.log("constructor VueCarte.js");
		this.vueCarte = document.getElementById("vue-carte").innerHTML;
		this.dao = new SentierDAO();
		this.map;
	}

	afficher() {
		console.log("VueCarte" + "\n" + "   |___> afficher()");
		document.getElementsByTagName("body")[0].innerHTML = this.vueCarte;
	}

	async initialiserCarte() {

		const positionMatane = {
			lat: 48.849998,
			lng: -67.533333
		};

		this.map = new google.maps.Map(document.getElementById("map"), {
			mapId: "8752fd40d51bd45c",
			disableDefaultUI: true,
			center: {
				lat: positionMatane.lat,
				lng: positionMatane.lng
			},
			zoom: 15,
		});

		console.log(this.map);
		var sentier = await this.dao.initialiserCoordonneesSentier(100);
		var path = this.dao.tracerSentier(sentier);
		var marqueurDebutSentier = this.dao.ajouterMarqueur(sentier[0], "Debut sentier", "purple-dot");
		var marqueurFinSentier = this.dao.ajouterMarqueur(sentier[sentier.length-1], "Fin sentier", "flag");

		path.setMap(this.map);
		marqueurDebutSentier.setMap(this.map);
		marqueurFinSentier.setMap(this.map);

		this.map.setCenter(sentier[0]);


		// Lister les id problématiques ici :
		// 702 - Tableau du sentier semble invalide dans la donnée

	}


}

