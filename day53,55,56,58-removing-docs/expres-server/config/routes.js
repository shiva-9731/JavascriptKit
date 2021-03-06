const express = require('express')
const Router = express.Router()

// controllers call
const notesController = require('../app/controllers/notesController')
const usersController = require('../app/controllers/usersController')

// middle wares call
const authenticateUser = require('../app/middlewares/authenticate')

// Notes Routes
Router.get('/notes',authenticateUser ,notesController.notes)
Router.post('/notes',authenticateUser ,notesController.create)
Router.get('/notes/:id',authenticateUser ,notesController.show)
Router.put('/notes/:id',authenticateUser ,notesController.update)
Router.delete('/notes/removeTag',authenticateUser ,notesController.removeTag)
Router.delete('/notes/:id',authenticateUser ,notesController.delete)

// Users Routes
Router.get('/users', usersController.users)
Router.post('/users', usersController.create)
Router.post('/users/account',authenticateUser, usersController.account)
Router.get('/users/:id', authenticateUser,usersController.show)
Router.put('/users/:id', authenticateUser,usersController.update)
Router.delete('/users/logout', authenticateUser, usersController.logout)
Router.delete('/users/:id', authenticateUser, usersController.delete)
Router.post('/users/login', usersController.login)



module.exports = Router