'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Appointment extends Model {
  slot () {
    return this.belongsTo('App/Models/Slot')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Appointment
