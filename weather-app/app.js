const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2]

if (!input) {
    console.log('Please provide location.')
} else{
    geocode(input, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
            })
    })
}