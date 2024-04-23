"use strict";

const {createDBconnection} = require('./db');

require('dotenv').config();

const dbName = process.env.DB_NAME;

const adminPass = process.env.ADMIN_PASS;

async function createDB(){

    try{
        const pool = await createDBconnection();

        await pool.query(`DROP DATABASE IF EXISTS ${dbName}`);

        await pool.query(`CREATE DATABASE ${dbName}`)

        await pool.query(`USE ${dbName}`);

        await pool.query(

            `
            CREATE TABLE IF NOT EXISTS admins
            (
                id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
                admin_name VARCHAR(40) UNIQUE NOT NULL,
                pwd VARCHAR(512) NOT NULL,
                create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            `
        );

        await pool.query(

            `
            CREATE TABLE IF NOT EXISTS events
            (
                id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
                create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                title VARCHAR(100) NOT NULL,
                content VARCHAR(10000) NOT NULL,
                video1 VARCHAR(1000),
                video2 VARCHAR(1000),
                video3 VARCHAR(1000),
                event_date DATETIME NOT NULL
            );
            `
        );

        await pool.query(
            
            `
            CREATE TABLE IF NOT EXISTS events_photos
            (
                id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
                photo_name VARCHAR(500),
                photo_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                event_id INT UNSIGNED NOT NULL,
                FOREIGN KEY (event_id) REFERENCES events(id)
            );
            `
        );

        /* await pool.query(

            `
            CREATE TABLE IF NOT EXISTS carrousel_photos
            (
                id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
                photo_name VARCHAR(500),
                photo_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            `
        ); */

        await pool.query(
            `INSERT INTO admins (id, admin_name, pwd, create_date) VALUES (DEFAULT, 'admin', SHA2('${adminPass}', 512), DEFAULT)`
        );

        console.log(`Si existía una base de datos con el mismo nombre se ha eliminado. Además, se ha creado una nueva base de datos con el nombre "${dbName}" y sus correspondientes tablas.`);

        process.exit(0);

    } catch(e){

        console.log(e)
        process.exit(1);
    }

}

createDB();