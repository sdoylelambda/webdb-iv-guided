Data Model components

Entities => resources => table
Properties => columns
Relationships => foreign keys

Workflow

Identify the entities
Identify the properties for each entity
Identify the between entities

// ex Lambda School
Tracks => web, android, ios
Cohorts => web18 webpt2 ...
Students => Mindy, Sean, ...

Queries examples

select s.name as student, c.name as cohort from students as s inner join cohorts as c on s.cohort_id = c.id
