let x = randint(0, 360)
let score = 0
basic.showString("Go")
basic.forever(function () {
    if (x >= 0 && x < 90) {
        led.plot(4, 0)
    } else if (x >= 90 && x < 180) {
        led.plot(4, 4)
    } else if (x >= 180 && x < 270) {
        led.plot(0, 4)
    } else {
        led.plot(0, 0)
    }
    if (input.compassHeading() > x - 5 && false) {
        basic.showIcon(IconNames.Yes)
        score += 1
        basic.showNumber(score)
        score = 0
        x = randint(0, 360)
        basic.clearScreen()
        basic.showString("Go")
    }
})
