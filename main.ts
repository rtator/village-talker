namespace SpriteKind {
    export const house = SpriteKind.create()
    export const villager = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.house, SpriteKind.house, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager, function (sprite, otherSprite) {
    if (mySprite.vx < 0) {
        mySprite.x += 10
    } else if (mySprite.vx > 0) {
        mySprite.x += -10
    } else if (mySprite.vy > 0) {
        mySprite.y += -10
    } else if (mySprite.vy < 0) {
        mySprite.y += 10
    }
    if (Math.percentChance(50)) {
        game.showLongText("hi!", DialogLayout.Bottom)
    } else if (Math.percentChance(50)) {
        game.showLongText("how are you doing?", DialogLayout.Bottom)
    } else if (Math.percentChance(50)) {
        game.showLongText("what's up?", DialogLayout.Bottom)
    } else if (Math.percentChance(50)) {
        game.showLongText("have a good day!", DialogLayout.Bottom)
    } else if (Math.percentChance(50)) {
        game.showLongText("hello.", DialogLayout.Bottom)
    } else {
        game.showLongText("leave me alone.", DialogLayout.Bottom)
        if (game.ask("ask whats going on?")) {
            game.showLongText("my...", DialogLayout.Bottom)
            game.showLongText("my...", DialogLayout.Bottom)
            game.showLongText("my...", DialogLayout.Bottom)
            game.showLongText("my fish is dead!", DialogLayout.Bottom)
            game.showLongText("waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!", DialogLayout.Bottom)
        }
    }
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . 2 f 2 f 2 f 2 f . . 
    . f f f f f f f f f f . 
    2 f 2 f 2 f 2 f 2 f 2 f 
    f f f f f f f f f f f f 
    2 f 2 f 2 f 2 f 2 f 2 f 
    2 2 2 2 2 2 2 2 2 2 2 2 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101030303030303010101010101010303030303050505030303030303010103050505030502050303050505030101030502050505050503030502050301010305050505030303030305050503010103030303030303030303030303030103030303030305050503030303030303030303030303050205030305050503030303030303030505050303050405030303030303030303030303030505050303030303030303050505030303030303030105050503030502050303050505030101050205030305050503030502050301010505050303050505030305050503010103030303030502050303030303030101010101030305050505030101010101`, img`
    2 2 2 2 . . . . . . 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . 2 2 2 . . . . . . 2 
    2 . 2 2 2 . 2 2 2 . . 2 2 2 . 2 
    2 . 2 2 2 . . . . . . 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . 2 2 2 . . 
    . . . . . . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    2 . . . . . 2 2 2 . . . . . . 2 
    2 2 2 2 . . 2 2 2 . . 2 2 2 . 2 
    2 2 2 2 . . . . . . . 2 2 2 . 2 
    2 . . . . . 2 2 2 . . . . . . 2 
    2 2 2 2 . . 2 2 2 . . 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath5,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
for (let index = 0; index < 8; index++) {
    mySprite2 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.house)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile2)
}
let mySprite3 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888afaa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa888faa8afaa8a8aa8888aa8aa8aa8aabbd
    dccaaf8f8fffaf8faffa88faa8fffafaf8ff8afff88aaccd
    bcbaafaf8faf8f8fafaa8afff8f8fafaf8f88af8fa8aabcb
    dbb88fff8fffafffafaa8afaf8fffafff8ff8afffa888bbd
    dbbaa8af8888aa8aa8aa8a8aa8a8aa8aa8af88f8aa8aabbd
    dccaa8ff8aa8aa8aa8888a8aa8a8888aa8ff8afffa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.house)
tiles.placeOnRandomTile(mySprite3, myTiles.tile3)
for (let index = 0; index < 4; index++) {
    mySprite4 = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.villager)
    tiles.placeOnRandomTile(mySprite4, sprites.castle.tilePath5)
}
for (let index = 0; index < 4; index++) {
    mySprite4 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f b 7 7 7 7 b f e f 
        e 4 f 7 7 7 7 7 7 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.villager)
    tiles.placeOnRandomTile(mySprite4, sprites.castle.tilePath5)
}
