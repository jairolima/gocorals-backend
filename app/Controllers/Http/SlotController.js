'use strict'

const Slot = use('App/Models/Slot')

/**
 * Resourceful controller for interacting with slots
 */
class SlotController {
  async index ({ request, response, view }) {
    const slots = await Slot.query().with('user').fetch()

    return slots
  }

  /**
   * Render a form to be used for creating a new slot.
   * GET slots/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store ({ request, response, auth }) {
    const data = request.only(['date', 'title', 'description', 'price', 'quantity', 'file_id'])

    const slot = await Slot.create({ ...data, user_id: auth.user.id })

    return slot
  }

  /**
   * Display a single slot.
   * GET slots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const slot = await Slot.findOrFail(params.id)

    await slot.load('user')
    await slot.load('appointments')

    return slot
  }

  /**
   * Update slot details.
   * PUT or PATCH slots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const slot = await Slot.findOrFail(params.id)
    const data = request.only(['date', 'title', 'description', 'price', 'quantity'])

    slot.merge(data)

    await slot.save()

    return slot
  }

  /**
   * Delete a slot with id.
   * DELETE slots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const slot = await Slot.findOrFail(params.id)

    await slot.delete()
  }
}

module.exports = SlotController
