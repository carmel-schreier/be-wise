const database = require("./database");
const path = require('path');
const fs = require('fs');
//const fileMgmt = require('../shared/fileMgmt');

module.exports = {
    getCoursesDetails: async function (req, res, next) {
        const param = req.query;

        //const fieldsMap = new Map([
        //     ['name', 'customers.name'],
        //     ['email', 'customers.email'],
        //    ['country_name', 'countries.name'],
        // ]);
        const sql =
            `SELECT * FROM courses ORDER BY name ASC;`;
        //

        try {
            const result = await database.query(sql);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err);
            res.status(500).send(`Something went wrong`);
        }
    },
    getSortedCoursesDetails: async function (req, res, next) {
        const param = req.query;

        console.log(param.column);
        console.log(param.sort);

        //const fieldsMap = new Map([
        //     ['name', 'customers.name'],
        //     ['email', 'customers.email'],
        //    ['country_name', 'countries.name'],
        // ]);
        const sql =
            `SELECT * FROM courses ORDER BY ${param.column} ${param.sort};`;
        //

        try {
            const result = await database.query(sql);
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', '*');
            res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err);
            res.status(500).send(`Something went wrong`);
        }
    },

    getCategories: async function (req, res, next) {
        const param = req.query;
        const sql =
            "SELECT category FROM courses;";

        try {
            const result = await database.query(sql);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err);
            res.status(500).send(`Something went wrong`);
        }
    },

    getFilteredCourses: async function (req, res, next) {
        const param = req.query;
        //console.log(param)
        const sql =
            "SELECT * FROM courses WHERE category=?;";

        try {
            const result = await database.query(sql, [param.category]);
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', '*');
            res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err);
            res.status(500).send(`Something went wrong`);
        }
    },

    exportCourses: async function (req, res, next) {
        const param = req.query;
        const sql = "SELECT * FROM courses;";
        //const sql = "SELECT * FROM courses IF (param!=`All`, WHERE category=?) ;";

        // const sql2 = "SELECT * FROM courses WHERE category=?;";


        try {
            const result = await database.query(sql);
            //const result = await database.query(sql, param != `All` ? [param.category] : []);

            // const result = await database.query(sql2, [param.category]);

            res.set('Access-Control-Allow-Origin', '*');
            const now = new Date().getTime(); // moment.js
            const filePath = path.join(__dirname, '../client/exports', `courses-${now}.txt`);
            console.log("filePath:" + filePath)
            // c:\\projects\royal-crm\files\customers.txt
            const stream = fs.createWriteStream(filePath);

            stream.on('open', function () {
                stream.write(JSON.stringify(result[0]));
                stream.end();
            });

            stream.on('finish', function () {
                res.send(`Success. File at: ${filePath}`);
            });
        } catch (err) {
            throw err;
        }

    },

    exportFilteredCourses: async function (req, res, next) {
        const param = req.query;
        //const sql = "SELECT * FROM courses;";
        //const sql = "SELECT * FROM courses IF (param!=`All`, WHERE category=?) ;";

        const sql2 = "SELECT * FROM courses WHERE category=?;";


        try {
            //const result = await database.query(sql);
            //const result = await database.query(sql, param != `All` ? [param.category] : []);

            const result = await database.query(sql2, [param.category]);

            res.set('Access-Control-Allow-Origin', '*');
            const now = new Date().getTime(); // moment.js
            const filePath = path.join(__dirname, '../client/exports', `courses-${now}.txt`);
            console.log("filePath:" + filePath)
            // c:\\projects\royal-crm\files\customers.txt
            const stream = fs.createWriteStream(filePath);

            stream.on('open', function () {
                stream.write(JSON.stringify(result[0]));
                stream.end();
            });

            stream.on('finish', function () {
                res.send(`Success. File at: ${filePath}`);
            });
        } catch (err) {
            throw err;
        }

    },
};