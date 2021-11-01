class VueCarte {
    constructor() {
        console.log("constructor VueCarte.js");
        this.vueCarte = document.getElementById("vue-carte").innerHTML;
        this.map;
    }

    afficher() {
        console.log("VueCarte" + "\n" + "   |___> afficher()");
        document.getElementsByTagName("body")[0].innerHTML = this.vueCarte;
    }

    initialiserCoordonneesSentier(idSentier) {
        console.log(data);

        //Le jeu de données est au format plan, projeté sur la zone du Québec (format EPSG:32198)
        var firstProjection = 'PROJCS["NAD83 / Quebec Lambert",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",60],PARAMETER["standard_parallel_2",46],PARAMETER["latitude_of_origin",44],PARAMETER["central_meridian",-68.5],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["X",EAST],AXIS["Y",NORTH],AUTHORITY["EPSG","32198"]]';

        //Nous le convertissons donc au format sphérique, mondial (format EPSG:4326)
        var secondProjection = '+proj=longlat +datum=WGS84 +no_defs';

        var coordinates = data.features[idSentier].geometry.coordinates;
        var compteur = 0;
        var sentier = [];

        for (let i = 0; i < coordinates.length; i++) {
            

            let tableauConversion = [];
            tableauConversion.push(data.features[i].geometry.coordinates[0][0],data.features[i].geometry.coordinates[0][1]);
            let pointCoordonnes = proj4(firstProjection,secondProjection,tableauConversion);
            pointCoordonnes.reverse();
            console.log(pointCoordonnes);
            
            if(i==0)
            this.ajouterMarqueur({"lat" :pointCoordonnes[0],"lng": pointCoordonnes[1]});

            sentier.push({"lat" :pointCoordonnes[0],"lng": pointCoordonnes[1]})
        }

        console.log(sentier);
        this.tracerSentier(sentier);
    }

    initialiserCarte() {

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
        this.initialiserCoordonneesSentier(0);

    }

    ajouterMarqueur(position) {
        new google.maps.Marker({
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
            },
            position: position,
            map: this.map,
            title: "Hello World!",
        });
    }

    tracerSentier(coordonnees) {

        // var EXEMPLES_COORDONNEES = [{
        //         lat: 48.849998,
        //         lng: -67.533333
        //     },
        //     {
        //         lat: 48.78699133553176,
        //         lng: -67.70178350274725
        //     },
        //     {
        //         lat: 48.72038598973693,
        //         lng: -67.89402320809118
        //     },
        //     {
        //         lat: 48.698829358317084,
        //         lng: -67.82737811008539
        //     },
        // ];

        const path = new google.maps.Polyline({
            path: coordonnees,
            geodesic: true,
            strokeColor: "#B85DEF",
            strokeOpacity: 1.0,
            strokeWeight: 3,
        });

        path.setMap(this.map);
    }


}