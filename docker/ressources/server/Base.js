const { Pool } = require('pg');

function Base(){
        this.pool;
        this.coordonnees = "TOTO";
    }

    Base.prototype.initialiserConnexion = function() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'projet_db',
            max: 20,
            database: 'postgres',
            password: 'admin',
            port: 5432,
        })
    }

    Base.prototype.obtenirCoordonnees = async function(id) {

        this.initialiserConnexion();
        // var res =  this.pool.query('SELECT geometry FROM json_table WHERE id=' + id, (err, res) => {
        // // console.log(res['rows'][0]['geometry']);
        // this.pool.end();
        // })

        //         // promise
        // this.pool
        //     .query('SELECT geometry FROM json_table WHERE id=' + id)
        //     .then(res => {
        //         // console.log(res.rows[0])
        //     })
        // .catch(e => console.error(e.stack))
        // // async/await

        try {
            const res = await this.pool.query('SELECT geometry FROM json_table WHERE id=' + id)
            this.coordonnees = res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
        return this.coordonnees;
    }

    Base.prototype.obtenirListeSentiers = async function() {
        this.initialiserConnexion();

        try{
            const res = await this.pool.query('SELECT properties FROM json_table LIMIT 20')
            this.listeSentiers = res.rows;
        } catch (err){
            console.log(err.stack);       
        }
        return this.listeSentiers;
    }

      module.exports = Base;

