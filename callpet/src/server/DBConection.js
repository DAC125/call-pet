const Pool = require('pg').Pool;

const config = {
    user: 'callpetdbadmin',
    password: 'ic-7841-Proyecto',
    host: '159.89.90.227',
    database: 'callpetdb'
};

const pool = new Pool(config);

module.exports = pool;