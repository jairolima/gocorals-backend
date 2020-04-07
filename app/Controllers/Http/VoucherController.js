'use strict'

const Appointment = use('App/Models/Appointment')

// listar todos vouchers do usuario
class VoucherController {
  async index ({ auth }) {
    const voucher = await Appointment.query().where('user_id', auth.user.id).with('slot').fetch()
    return voucher
  }
}

module.exports = VoucherController
