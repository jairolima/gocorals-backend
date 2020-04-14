'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User
    .query()
    .where('email', email)
    .setHidden(['created_at', 'updated_at', 'password'])
    .first()

    return {
      token,
      user
    }
  }
}

module.exports = SessionController
