import axios from 'axios'
const getweatherResult = document.getElementById('getWeather')

getweatherResult.addEventListener('click', async () => {
  const cityValue = document.getElementById('city').value

  try {
    const serverResponse = await axios.get(`/weather?city=${cityValue}`)
    const weatherData = serverResponse.data

    document.getElementById('weatherResult').innerHTML = `
    <h3 class= "font-bold">The Weather in ${cityValue}</h3>
    <img class="item flex items-center" src="https://openweathermap.org/img/wn/${weatherData.weatherImg}@2x.png">
      <p>Temperature: ${weatherData.tempCelsius}°C</p>
      <p>Weather: ${weatherData.weatherDescription}</p>
    `
  } catch (error) {
    console.log('Error fetching weather data:', error)
    document.getElementById('weatherResult').innerHTML = `
      <p>Error fetching weather data. Please try again.</p>
    `
  }
})
