'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Slot extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  appointments () {
    return this.hasMany('App/Models/Appointment')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Slot
