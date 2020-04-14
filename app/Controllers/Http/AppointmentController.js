'use strict'

const Appointment = use('App/Models/Appointment')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with appointments
 */
class AppointmentController {
  /**
   * Show a list of all appointments.
   * GET appointments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  // LISTA TODOS AGENDAMENTOS DO SLOT(EVENTO) PASSADO E QUE ESTAO ATIVOS PARA O ADMIN VER
  async index ({ params }) {
    const appointments = await Appointment.query().where('slot_id', params.slots_id).whereNull('canceled_at').with('user').with('slot').fetch()
    // listar apenas agendamentos do slot passado no params
    return appointments
  }

  async store ({ request, params, auth }) {
    const data = request.only(['voucher_quantity'])

    const appointment = await Appointment.create({ ...data, user_id: auth.user.id, slot_id: params.slots_id })

    // pegar o slot.quantity
    // pegar o total de voucher somando todos
    // comparar se menor for verdadeiro true

    return appointment
  }

  /**
   * Display a single appointment.
   * GET appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing appointment.
   * GET appointments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update appointment details.
   * PUT or PATCH appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a appointment with id.
   * DELETE appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const appointment = await Appointment.findOrFail(params.id)

    appointment.canceled_at = new Date()

    await appointment.save()
  }
}

module.exports = AppointmentController
