'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table
        .integer('slot_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.date('canceled_at').notNullable()
      table.integer('voucher_quantity')
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
