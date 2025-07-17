/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TestsController from '#controllers/tests_controller'

router.on('/').render('pages/home')
router.on('/test').render('pages/examplestream')
router.get('/example-stream', [TestsController, 'index'])