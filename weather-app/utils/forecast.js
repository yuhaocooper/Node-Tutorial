const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d3e0712d4efe15438b81f277f73d3cd2&query='+ latitude +','+ longitude +'&units=f'

    request({url, json:true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is ' + body.current.precip + '% chance of rain.')
        }
    }) 

}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = forecast