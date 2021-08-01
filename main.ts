input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Silly)
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.slide.playUntilDone()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Angry)
    soundExpression.hello.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    soundExpression.mysterious.playUntilDone()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Confused)
    soundExpression.soaring.playUntilDone()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Meh)
    soundExpression.twinkle.playUntilDone()
})
