const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'callpetdbadmin',
    password: 'ic-7841-Proyecto',
    host: '159.89.90.227',
    port: 5432,
    database: "callpetdb"
});

module.exports = pool;