class Sentier {
	constructor(id, etablissement, coordonnees, toponyme, usagers) {
		this.id = id;
		this.coordonnees = coordonnees;
		this.etablissement = etablissement;
		this.toponyme = toponyme;
		this.usagers = usagers;
	}

	getId() {
		return this.id;
	}

	setId(id) {
		this.id = id;
	}

	getCoordonnees() {
		return this.coordonnees;
	}

	setCoordonnees(coordonnees) {
		this.coordonnees = coordonnees;
	}

	getEtablissement() {
		return this.etablissement;
	}

	setEtablissement(etablissement) {
		this.etablissement = etablissement;
	}

	getToponyme() {
		return this.toponyme;
	}

	setToponyme(toponyme) {
		this.toponyme = toponyme;
	}

	getUsagers() {
		return this.usagers;
	}

	setUsagers(usagers) {
		this.usagers = usagers;
	}
}