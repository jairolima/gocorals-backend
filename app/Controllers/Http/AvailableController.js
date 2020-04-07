'use strict'

const Slot = use('App/Models/Slot')

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
