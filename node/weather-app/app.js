const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
}else{
    geocode.geocode(address, (error, {latitude, longitude, location}) => {

        if(error){
           return console.log(error)
        }
    
        forecast.forecast(latitude, longitude, (error, {summary, temperature, precipProbability}) => {
            if (error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(summary + `. It's currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
        })
    })
    
}