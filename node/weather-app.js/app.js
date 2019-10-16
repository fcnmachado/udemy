const request = require('request')

const url = 'https://api.darksky.net/forecast/c1e5531969975918bc326ab354eb6324/37.8267,-122.4233'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmNubWFjaGFkbyIsImEiOiJjazFzZ3BoOXAwZnNoM25uc3M3Y3B3MHc2In0.RMGZ6Dwkl83oyy5KQc3LNg'

request({ url: url, json: true }, (error, response) => {

    if(error){
        console.log('Unable to connect to darksky')
    }else if(response.body.error){
        console.log(`Cant't get location`)
    }else{
        const temperature = response.body.currently.temperature
        const precipProbability = response.body.currently.precipProbability
        
        console.log(`It's currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
    }

})

request({url: geocodeURL, json: true}, (error, response) => {
    
    if(error){
        console.log('Unable to connect to geocode!')
    }else if(response.body.features.length === 0){
        console.log(`Can't get coordinates`)
    }else{
        const longitude = response.body.features[0].geometry.coordinates[0]
        const latitude = response.body.features[0].geometry.coordinates[1]
        console.log(`Latitude ${latitude}, longitude ${longitude}`)
    }
})