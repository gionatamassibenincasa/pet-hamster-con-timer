input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    annoiato()
})
input.onGesture(Gesture.Shake, function () {
    triste()
})
function triste () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    timerAttivo = true
    istante = input.runningTime()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    felice()
})
function felice () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    timerAttivo = true
    istante = input.runningTime()
}
function annoiato () {
    timerAttivo = false
    basic.showIcon(IconNames.Asleep)
}
let istante = 0
let timerAttivo = false
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
annoiato()
basic.forever(function () {
    if (timerAttivo) {
        if (input.runningTime() - istante >= 5000) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
            annoiato()
        }
    }
})
