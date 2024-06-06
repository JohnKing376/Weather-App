/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const WeatherController = () => import('#controllers/weather_controller')

router.on('/').render('pages/home')

router.get('/weather', [WeatherController, 'getWeatherInfo'])
