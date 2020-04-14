'use strict'

const Slot = use('App/Models/Slot')

// TODO campo date no banco nao recebe horario
class AvailableController {
  async index () {
    const slots = await Slot
      .query()
      .where('date', '>=', 'NOW()')
      .with('user').fetch()

    return slots
  }
}

module.exports = AvailableController
