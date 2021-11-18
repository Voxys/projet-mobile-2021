class SentierDAO{
	constructor(){
		console.log("constructor VueCarte.js");
		this.vueCarte = document.getElementById("vue-carte").innerHTML;
		this.map;
		this.baseDeDonneesDAO = new BaseDeDonneesDAO();
		this.baseDeDonneesDAO.initialiserConnexion();
	}

	async initialiserCoordonneesSentier(idSentier) {
		console.log(data);

		try{
			var coordonnees = await this.baseDeDonneesDAO.obtenirCoordonnees();
			console.log(coordonnees);
		}
		catch(err){
			console.log("err.stack");
		}

		console.log("======= C ICI =======");
		var jsonData = JSON.parse(coordonnees);
		console.log(jsonData);
		console.log(jsonData.geometry.coordinates);


		// Le jeu de données est au format plan, projeté sur la zone du Québec (format EPSG:32198)
		var firstProjection = 'PROJCS["NAD83 / Quebec Lambert",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",60],PARAMETER["standard_parallel_2",46],PARAMETER["latitude_of_origin",44],PARAMETER["central_meridian",-68.5],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["X",EAST],AXIS["Y",NORTH],AUTHORITY["EPSG","32198"]]';

		// Nous le convertissons donc au format sphérique, mondial (format EPSG:4326)
		var secondProjection = '+proj=longlat +datum=WGS84 +no_defs';

		// On récupére le tableau correspondant à l'ID entrée en paramétre
		var coordinates = jsonData.geometry.coordinates;

		// On prépare le sentier final
		var sentier = [];

		for (let i = 0; i < coordinates.length; i++) {

			let tableauConversion = [];
			tableauConversion.push(jsonData.geometry.coordinates[i][0],jsonData.geometry.coordinates[i][1]);
			let lattitudeLongitude = proj4(firstProjection,secondProjection,tableauConversion);

			// Inversement des deux coordonnées pour correspondre au format google lat/long
			lattitudeLongitude.reverse();

			if(i==0){
				this.ajouterMarqueur({"lat" :lattitudeLongitude[0],"lng": lattitudeLongitude[1]}, "Debut sentier", "purple-dot");
				//centrage de la carte google maps au point de départ
				//this.map.setCenter({"lat" :lattitudeLongitude[0],"lng": lattitudeLongitude[1]});
			} else if(i==coordinates.length-1){
				this.ajouterMarqueur({"lat" :lattitudeLongitude[0],"lng": lattitudeLongitude[1]}, "Fin sentier", "flag");
			}

			sentier.push({"lat" :lattitudeLongitude[0],"lng": lattitudeLongitude[1]})
		}

		console.log(sentier);
		return sentier;
	}

	ajouterMarqueur(position, message, icon) {
	let marker	= new google.maps.Marker({
			icon: {
				url: "http://maps.google.com/mapfiles/ms/icons/" + icon + ".png"
			},
			position: position,
			//map: this.map,
			title: message,
		});

		return marker;
	}

	tracerSentier(coordonnees) {

		var path = new google.maps.Polyline({
			path: coordonnees,
			geodesic: true,
			strokeColor: "#B85DEF",
			strokeOpacity: 1.0,
			strokeWeight: 3,
		});

		//path.setMap(this.map);
		return path;
	}
}


