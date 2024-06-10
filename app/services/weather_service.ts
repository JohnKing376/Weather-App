import axios from 'axios'

export default class WeatherService {
  static async getWeather(cityValue: string) {
    const weatherUrl = process.env.WEATHER_URL
    const weatherApi = process.env.WEATHER_API_KEY
    const baseUrl = `${weatherUrl}?q=${cityValue}&appid=${weatherApi}&units=metric`
    console.log(baseUrl)
    try {
      const weatherData = await axios.get(baseUrl)
      const weatherImg = weatherData.data.weather[0].icon
      const tempCelsius = weatherData.data.main.temp
      const weatherDescription = weatherData.data.weather[0].description
      console.log(weatherImg)
      return { weatherImg, tempCelsius, weatherDescription }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
  }
}
// Testing:
// WeatherService.getWeather('London')
//   .then((data) => {
//     if (data) {
//       console.log(`Weather in London`)
//       console.log(`Temperature: ${data.tempCelsius}°C`)
//       console.log(`Weather: ${data.weatherDescription}`)
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching weather data:', error)
//   })
