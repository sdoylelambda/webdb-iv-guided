// STEP 7
exports.seed = function(knex, Promise) {
      return knex('tracks').insert([
        {name: 'WEB'},
        {name: 'Android'},
        {name: 'IOS'}
      ]);
};
