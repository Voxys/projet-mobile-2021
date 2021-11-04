// console.log(data);

// coordinates = data.features[3].geometry.coordinates;
// let compteur = 0;

// for(let i = 0; i < coordinates.length; i++){
//      // console.log(data.features[i].geometry.coordinates);
//      // console.log(data.features[i].geometry.coordinates[0]);
//      // console.log(data.features[i].geometry.coordinates[1]);
//      compteur++;
// }

// testCoord = data.features[0].geometry.coordinates[0];
// testCoord2 = data.features[0].geometry.coordinates
// console.log(testCoord);


// //Le jeu de données est au format plan, projeté sur la zone du Québec (EPSG:32198)
// var firstProjection = 'PROJCS["NAD83 / Quebec Lambert",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",60],PARAMETER["standard_parallel_2",46],PARAMETER["latitude_of_origin",44],PARAMETER["central_meridian",-68.5],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["X",EAST],AXIS["Y",NORTH],AUTHORITY["EPSG","32198"]]';

// //Nous le convertissons donc au format sphérique, mondial (EPSG:4326)
// var secondProjection = '+proj=longlat +datum=WGS84 +no_defs'; 

// //todo 
// // console.log(proj4(firstProjection,secondProjection,testCoord));

// // pointCoordonnes = proj4(firstProjection,secondProjection,testCoord);

// //inversement des deux coordonnées pour correspondre au format google lat/long
// var tableauConversion = [];
// tableauConversion.push(testCoord[0],testCoord[1]);
// pointCoordonnes = proj4(firstProjection,secondProjection,tableauConversion);
// pointCoordonnes.reverse();
// console.log(tableauConversion);
// console.log(pointCoordonnes);

filtreRaquette = [];
filtreSki = [];
filtreSkiNordique = [];
filtrePieton = [];

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

console.log(filtreSki);