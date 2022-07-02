const database = require("./database");

module.exports = {
    getFacultyDetails: async function (req, res, next) {
        const sql =
            "SELECT * FROM faculty;";

        try {
            const result = await database.query(sql);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err);
            res.status(500).send(`Something went wrong`);
        }
    },
};