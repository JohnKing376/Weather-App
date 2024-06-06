import WeatherService from '#services/weather_service'
import { HttpContext } from '@adonisjs/core/http'

export default class WeatherController {
  async getWeatherInfo({ request, response }: HttpContext) {
    const cityValue = request.input('city')
    try {
      const weatherInfo = await WeatherService.getWeather(cityValue)
      return response.json(weatherInfo)
    } catch (error) {
      console.log(error)
      return `Internal server Error`
    }
  }
}
