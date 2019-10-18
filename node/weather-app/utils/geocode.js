const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmNubWFjaGFkbyIsImEiOiJjazFzZ3BoOXAwZnNoM25uc3M3Y3B3MHc2In0.RMGZ6Dwkl83oyy5KQc3LNg'

    request({url: url, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length === 0) { 
            callback('Unable to find location. Try another search!', undefined)
        }else{
            const coordinates = {
                longitude: response.body.features[0].geometry.coordinates[0],
                latitude: response.body.features[0].geometry.coordinates[1],
                location: response.body.features[0].place_name
            }
            callback(error, coordinates)
        }
    })
}

module.exports = {
    geocode: geocode
}