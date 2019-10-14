//const square = function (x) {
//    return x * x
//}

//const square = (x) => {
//    return x * x
//}

//const square = (x) => x * x

//console.log(square(3))

const event = {
    name: 'Aniversário de Felipe',
    guestList: ['Felipe', 'Paula', 'Juliana'],
    printEvent() {
        console.log('Lista do ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' vai ao ' + this.name)
        })
    }
}

event.printEvent()