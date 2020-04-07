'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'phone', 'cpf'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['phone'])

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
