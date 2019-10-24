const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c1e5531969975918bc326ab354eb6324/' + latitude + ',' + longitude + `?&units=si`

    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if (body.error){
            callback(`Unable to find location!`)
        }else{
            const forecast = `${body.currently.summary}. It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.` 
            callback(error, forecast)
        }
    })
}

module.exports = {
    forecast : forecast
}