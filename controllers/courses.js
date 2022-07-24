const database = require("./database");
const fileMgmt = require('../shared/fileMgmt');

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
        console.log(param)
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

    exportCourses: function (req, res, next) {
        const sql = "SELECT * FROM courses;";
        res.set('Access-Control-Allow-Origin', '*');
        fileMgmt.exportToFile(res, sql, 'courses');
    },
};