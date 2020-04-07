'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.post('/slots', 'SlotController.store')
  Route.put('/slots/:id', 'SlotController.update')
  Route.delete('/slots/:id', 'SlotController.destroy')

  Route.get('/vouchers', 'VoucherController.index')

  Route.resource('slots.appointment', 'AppointmentController').apiOnly()
}).middleware(['auth'])

// Route.resource('slots', 'SlotController').apiOnly()
Route.get('/available', 'AvailableController.index')

Route.get('/slots', 'SlotController.index')
Route.get('/slots/:id', 'SlotController.show')

Route.get('/files/:id', 'FileController.show')
