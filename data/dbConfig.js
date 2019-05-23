// STEP 9 
// MAKE THIS FILE

const knex = require('knex');

const knexConfig = require('../knexfile');

module.export = knex(knexConfig.development);