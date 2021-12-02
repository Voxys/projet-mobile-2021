class VueCarte {
	constructor() {
		this.vueCarte = document.getElementById("vue-carte").innerHTML;
		this.dao = new SentierDAO();
		this.map;
		this.sentier;
	}

	afficher() {
		document.getElementsByTagName("body")[0].innerHTML = this.vueCarte;
	}

	async initialiserCarte(id) {

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
		this.sentier = await this.dao.initialiserCoordonneesSentier(id);
		var path = this.dao.tracerSentier(this.sentier);
		var marqueurDebutSentier = this.dao.ajouterMarqueur(this.sentier[0], "Debut sentier", "purple-dot");
		var marqueurFinSentier = this.dao.ajouterMarqueur(this.sentier[this.sentier.length - 1], "Fin sentier", "flag");

		path.setMap(this.map);
		marqueurDebutSentier.setMap(this.map);
		marqueurFinSentier.setMap(this.map);

		this.map.setCenter(this.sentier[0]);

		//Attendre le clique du bouton pour lancer l'itinéraire
		this.itineraireSentier();
	}

	itineraireSentier() {
		let button = document.getElementById("start");
		button.addEventListener("click", async () => {

			var directionsService = new google.maps.DirectionsService();
			var directionsRenderer = new google.maps.DirectionsRenderer();
			directionsRenderer.setMap(this.map);

			var latitude;
			var longitude;
			var onSuccess = await

			function (position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
			};

			function onError(error) {
				alert('code: ' + error.code + '\n' +
					'message: ' + error.message + '\n');
			}

			navigator.geolocation.getCurrentPosition(onSuccess, onError);

			var sentierScope = this.sentier;
			setTimeout(function () {
				var request = {
					origin: new google.maps.LatLng(latitude, longitude),
					destination: new google.maps.LatLng(sentierScope[0].lat, sentierScope[0].lng),
					// Note that JavaScript allows us to access the constant
					// using square brackets and a string value as its
					// "property."
					travelMode: 'DRIVING'
				};
				directionsService.route(request, function (response, status) {
					if (status == 'OK') {
						directionsRenderer.setDirections(response);
					}
				});
			}, 1000);
		})
	}
}