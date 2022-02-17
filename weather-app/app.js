const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d3e0712d4efe15438b81f277f73d3cd2&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is ' + response.body.current.precip + '% chance of rain.')
})