setInterval(setClock, 1000)

const hourHand = document.querySelsctor('[data-hour-hand')
const minuteHand = document.querySelsctor('[data-minute-hand')
const secondHand = document.querySelsctor('[data-second-hand')

function setClock() {
    const surrentData = new Date()
    const secondsRatio = currenDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 60
    const hoursRatio = (minutesRatio + currentData.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hoursHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotaation', rotationRatio * 360)
}