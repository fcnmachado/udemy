console.log('Java script app.js file loaded!')

fetch('http://localhost:3000/weather?address=niteroi').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})