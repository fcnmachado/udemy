const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())

data.name = 'Felipe'
data.planet = 'Mars'
data.age = 34

fs.writeFileSync('1-json.json', JSON.stringify(data))