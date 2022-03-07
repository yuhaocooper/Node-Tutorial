const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d3e0712d4efe15438b81f277f73d3cd2&query='+ latitude +','+ longitude +'&units=f'

    request({url: url, json:true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is ' + response.body.current.precip + '% chance of rain.')
        }
    }) 

}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = forecast