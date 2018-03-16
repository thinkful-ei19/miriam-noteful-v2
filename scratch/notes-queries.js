'use strict'

const knex = require('../knex');

// knex.select(1).then(res => console.log(res));


// Get all notes that meet search query
/* ========== GET/READ ALL NOTES ========== */

// xknex.select('id', 'title', 'content')
//     .from('notes')
//     .where('title', 'like', `%forget%`)
//     .then(results => console.log(results));
  
// Get a single note matched on id
/* ========== GET/READ SINGLE NOTES ========== */

// knex.select('id', 'title', 'content')
//     .from('notes')
//     .where({id: 1003})
//     .then(results => console.log(results));

// Update one or more key values of note
/* ========== PUT/UPDATE A SINGLE NOTE ========== */
// knex.select('id', 'title', 'content')
//     .from('notes')
//     .where({id: 1005})
//     .update({
//     title: `Who is afraid of Virginia Wolff`,
//     content: `Gobbly good domestic violence`
// })
// .then(results => console.log(results));

/* ===POST/CREATE A SINGLE ITEM (NO ERASE)===== */
// knex('notes')
//  .insert({
//     title: `The Lion in the Living Room`,
//     content: `History of feline and homo sapiens`
// })
// .then(results => console.log(results));

/* ========== DELETE A SINGLE ITEM ========== */
// knex('notes')
//     .where({
//         id: 1010
//     })
//     .del()
//     .then(results => console.log(results));


knex.select('id', 'title', 'content') 
    .from('notes')
    .orderBy('id', 'asc')
    .then(results => console.log(results));