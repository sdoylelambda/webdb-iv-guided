// STEP 4
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tracks', table => {
      // gives primary key
      table.increments();
      table.string('name').notNullable().unique();
  }).createTable('cohorts', table => {
      table.increments();
      table.string('name').notNullable().unique();
      table.integer('track_id')
      // .unsigned
      .unsigned().references('id')
      .inTable('tracks')
      .onDelete('CASCADE')
    //   .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  }).createTable('students', table => {
      // gets primary key
      table.increments();
      table.string('name', 128).notNullable();
  }).createTable('cohorts_students', table => {
      table.increments();
      table.integer('cohort_id').unsigned()
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.integer('student_id').unsigned().references('id').inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('cohorts_students')
  .dropTableIfExists('students')
  .dropTableIfExists('cohorts')
  .dropTableIfExists('tracks')
};

// STEP 5
// npx knex seed:make 0000-cleanup, npx knex seed:make 0001_create_tracks_seeding
