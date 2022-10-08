scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    game.splash("???", "Did the extraction work")
    game.splash("you", "what? ")
    game.splash("???", "you know what i mean")
    game.splash("you", "sorry, i dont")
    game.splash("???", "no matter. You wont last long anyhow")
    music.playMelody("B - B - B B B - ", 120)
    game.splash("you", "dang. they hung up")
    game.splash("you", "why did he say i wont last long?")
    game.splash("you", "...")
    game.splash("you", "i need to get out of here")
    tiles.setTileAt(tiles.getTileLocation(13, 28), assets.tile`myTile`)
    bonnie = sprites.create(img`
        ................................
        ......88888.......8888888.......
        .....888ff888...88888888888.....
        ....8888f.8888.8888...88888.....
        ...8888.f...888888......8888....
        ...888.ff...8888888.......88....
        ......ff...8ff88828.............
        .....ff....ff8888888............
        .....f....ff88888ff.............
        ....ff...ff888888.f.............
        ...ff....f.888888.ff............
        ...f.........8888..f............
        ............888888..............
        ...........8888888..............
        ..........888888888.............
        .........8888aaa8888............
        ........88888aaa8888............
        ........8888aaaaa8888...........
        ......8f8888aafaa88888..........
        ......8ff888aaaaa888888.........
        .....888.888aaaaa888888.........
        ....f888..88afaaa888888f8.......
        ....ff....88aaaaa8888.ff8.......
        ...88f....888aaa88888..88f......
        ...88f...8888aa88888....ff88....
        ..888f...88888888888.....888....
        ..888ff.88888888888......888....
        ..888.f.fff888.88ffff.....88....
        ......f.8fff8...ff8.f...........
        ........8f8.....8888ff..........
        .......8f88....88888............
        .......ff888...88888............
        `, SpriteKind.Enemy)
    tiles.placeOnTile(bonnie, tiles.getTileLocation(28, 21))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    kid.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e d e e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . 8 . 6 6 6 6 . 8 . . . . 
        . . . . f . 6 6 6 6 . f . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.getTileLocation(20, 28), true)
    tiles.setWallAt(tiles.getTileLocation(20, 19), true)
    for (let index = 0; index < 2; index++) {
        info.changeScoreBy(-1)
        pause(1000)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.getTileLocation(12, 28), true)
    tiles.setWallAt(tiles.getTileLocation(12, 29), true)
    for (let index = 0; index < 2; index++) {
        info.changeScoreBy(-1)
        pause(2000)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    kid.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . e e d d d d d e . . . . 
        . . . . e d f d f d d e . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 6 8 6 6 . . . . . . 
        . . . . . . 6 8 6 6 . . . . . . 
        . . . . . . 6 f 6 6 . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("ab", function () {
    tiles.placeOnTile(kid, tiles.getTileLocation(16, 30))
    tiles.setCurrentTilemap(tilemap`level1`)
    info.setScore(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    kid.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e d d d d d e e . . . . 
        . . . . e d d f d f d e . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 6 6 8 6 . . . . . . 
        . . . . . . 6 6 8 6 . . . . . . 
        . . . . . . 6 6 f 6 . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setWallAt(tiles.getTileLocation(12, 28), false)
    tiles.setWallAt(tiles.getTileLocation(12, 29), false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    kid.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . . d d f d f d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 f 6 6 6 6 . . . . 
        . . . . 6 . 6 6 6 6 . 6 . . . . 
        . . . . f . 6 f 6 6 . f . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("william", "...")
    game.splash("william", "how did you follow me here")
    game.splash("you", "i dont know... i just did")
    game.splash("william", "well, you shouldnt be here")
    game.splash("william", "i will send you back there")
    game.splash("william", "you will survive the night")
    game.splash("william", "then, call 777-777-777")
    game.splash("william", "ok, kid?")
    game.splash("you", "do i have to?")
    game.splash("afton", "you do not want to know what i will do to you if you do not.")
    game.splash("afton", "goodbye now")
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(kid, tiles.getTileLocation(16, 30))
    game.splash("system", "by the way, press b and a at the same time to skip all of the exposition")
    game.splash("system", "also, the game will not work if you do not press a+b, at any point")
    game.splash("system", "have a \"safe\" experience")
    game.splash("system", "and let the games begin")
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setWallAt(tiles.getTileLocation(20, 28), false)
    tiles.setWallAt(tiles.getTileLocation(20, 29), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("???", "hello little child")
    game.splash("william", "my name is afton, but you may call me \"william\"")
    game.splash("you", "where am i?")
    game.splash("william", "you are at my restaurant")
    game.splash("you", "then where is everybody?")
    game.splash("william", "...")
    game.splash("william", "they left long ago")
    game.splash("william", "but that is not important")
    game.splash("william", "may i tell you a secret?")
    game.splash("you", "sure...?")
    game.splash("william", "you are not leaving here alive")
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(kid, tiles.getTileLocation(7, 13))
    bonnie = sprites.create(img`
        ................................
        ......88888.......8888888.......
        .....888ff888...88888888888.....
        ....8888f.8888.8888...88888.....
        ...8888.f...888888......8888....
        ...888.ff...8888888.......88....
        ......ff...8ff88828.............
        .....ff....ff8888888............
        .....f....ff88888ff.............
        ....ff...ff888888.f.............
        ...ff....f.888888.ff............
        ...f.........8888..f............
        ............888888..............
        ...........8888888..............
        ..........888888888.............
        .........8888aaa8888............
        ........88888aaa8888............
        ........8888aaaaa8888...........
        ......8f8888aafaa88888..........
        ......8ff888aaaaa888888.........
        .....888.888aaaaa888888.........
        ....f888..88afaaa888888f8.......
        ....ff....88aaaaa8888.ff8.......
        ...88f....888aaa88888..88f......
        ...88f...8888aa88888....ff88....
        ..888f...88888888888.....888....
        ..888ff.88888888888......888....
        ..888.f.fff888.88ffff.....88....
        ......f.8fff8...ff8.f...........
        ........8f8.....8888ff..........
        .......8f88....88888............
        .......ff888...88888............
        `, SpriteKind.Player)
    tiles.placeOnTile(bonnie, tiles.getTileLocation(7, 3))
})
let bonnie: Sprite = null
let kid: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
tiles.setTileAt(tiles.getTileLocation(13, 36), assets.tile`myTile19`)
info.setScore(100)
kid = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e d e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 8 8 6 6 6 6 8 8 . . . . 
    . . . . 8 . 6 6 6 6 . 8 . . . . 
    . . . . f . 6 6 6 6 . f . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(kid, tiles.getTileLocation(16, 29))
scene.cameraFollowSprite(kid)
controller.moveSprite(kid, 50, 50)
for (let index = 0; index < 1; index++) {
    game.splash("wha-", "where am i?")
    game.splash(" is that the phone?", "maybe they have answers")
}
