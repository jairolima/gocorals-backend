'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SlotSchema extends Schema {
  up () {
    this.create('slots', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.date('date').notNullable()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('slots')
  }
}

module.exports = SlotSchema
