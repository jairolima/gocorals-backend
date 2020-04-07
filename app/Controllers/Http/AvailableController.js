'use strict'

const Slot = use('App/Models/Slot')

class AvailableController {
  async index () {
    const slots = await Slot.query().with('user').fetch()

    // TODO retornar apenas os eventos que nao venceu date
    return slots
  }
}

module.exports = AvailableController
