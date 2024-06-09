import WeatherService from '#services/weather_service'
import { HttpContext } from '@adonisjs/core/http'
import { WeatherInputValidator } from '#validators/weather'

export default class WeatherController {
  async getWeatherInfo({ request, response }: HttpContext) {
    // const cityValue = request.input('city')
    const payload = await request.validateUsing(WeatherInputValidator)
    try {
      const weatherInfo = await WeatherService.getWeather(payload)
      return response.json(weatherInfo)
    } catch (error) {
      console.log(error)
      return `Internal server Error`
    }
  }
}
