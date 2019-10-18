const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
}else{
    geocode.geocode(address, (error, data) => {

        if(error){
           return console.log(error)
        }
    
        forecast.forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData.summary + `. It's currently ${forecastData.temperature} degrees out. There is a ${forecastData.precipProbability}% chance of rain.`)
        })
    })
    
}