music.play(music.tonePlayable(1320, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # #
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . # . # .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . # # .
    . # . . #
    . . . # .
    . . # . .
    . # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    # . . . #
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    . . . # .
    # # # # .
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . # . #
    # # . # #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    . . . # .
    # # # # .
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # . . # .
    # . . # .
    . # # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # . .
    # . . # .
    # . . # .
    # . . # .
    # # # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # . . # .
    # . . # .
    . # # . .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.pause(2000)
music.play(music.tonePlayable(1320, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.tonePlayable(1320, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.tonePlayable(1320, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
for (let index = 0; index < 10; index++) {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # # . . .
        # . # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
}
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    . . . # .
    # # # # .
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    . # # # .
    # . . # .
    # . . # .
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # . . # .
    # . . # .
    . # # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # . .
    # . . # .
    # . . # .
    # . . # .
    # # # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . # . #
    # # . # #
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
	
})
