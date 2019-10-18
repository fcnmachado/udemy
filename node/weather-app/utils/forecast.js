const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c1e5531969975918bc326ab354eb6324/' + latitude + ',' + longitude + `?&units=si`

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if (response.body.error){
            callback(`Unable to find location!`)
        }else{
            callback(error, response.body.currently)
        }
    })
}

module.exports = {
    forecast : forecast
}