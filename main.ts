function start_dialog() {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . . . . f b f . . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . f b 2 b f . . . . . 
        . . . c f f b 2 2 2 b f f c . . 
        . . c b b 2 2 2 2 2 2 2 b b c . 
        . . . c f f b 2 2 2 b f f c . . 
        . . . . . . f b 2 b f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . f b f . . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogFrame(img`
        ..ccfccffccffccffccccc..
        .c22cf22cf22cf22cfcc22c.
        f2222cf22cf22cf22cf2222f
        f2222ccffccffccffcc2222f
        fc22cbbbbbbbbbbbbbbc22cf
        ccfcbbbbbbbbbbbbbbbbccfc
        cfccbbbbbbbbbbbbbbbbcf2c
        fc2fbbbbbbbbbbbbbbbbf22f
        f22fbbbbbbbbbbbbbbbbf2cf
        c2fcbbbbbbbbbbbbbbbbccfc
        cfccbbbbbbbbbbbbbbbbcf2c
        fc2fbbbbbbbbbbbbbbbbf22f
        f22fbbbbbbbbbbbbbbbbf2cf
        c2fcbbbbbbbbbbbbbbbbccfc
        cfccbbbbbbbbbbbbbbbbcf2c
        fc2fbbbbbbbbbbbbbbbbf22f
        f22fbbbbbbbbbbbbbbbbf2cf
        c2fcbbbbbbbbbbbbbbbbccfc
        cfccbbbbbbbbbbbbbbbbcfcc
        fc22cbbbbbbbbbbbbbbc22cf
        f2222ccffccffccffcc2222f
        f2222fc22fc22fc22fc2222f
        .f22ccfc22fc22fc22fc22f.
        ..fffccffccffccffccfff..
        `)
    game.showLongText("Welcome, you arrived right on time. I am Livid, the Master of Shadows. This Orb you see, is Thorn, or what is left of him. In a way, I have to thank you for getting rid of him. I can now turn those Spirits into shadows of myself, identical to their creator. I respect you for making it to here, but I'll be your undoing.", DialogLayout.Bottom)
}
function choose_map() {
    map = randint(1, 4)
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (map == 2) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else if (map == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
    } else if (map == 4) {
        tiles.setCurrentTilemap(tilemap`level9`)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorClosedSouth)
}
function start_battle() {
    tiles.setCurrentTilemap(tilemap`level11`)
}
function summon_enemies() {
    skeleton_1 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_1, tiles.getTileLocation(16, 10))
    skeleton_1.follow(mySprite, 85)
    skeleton_2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_2, tiles.getTileLocation(12, 12))
    skeleton_2.follow(mySprite, 85)
    skeleton_3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_3, tiles.getTileLocation(20, 12))
    skeleton_3.follow(mySprite, 85)
    skeleton_4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_4, tiles.getTileLocation(10, 16))
    skeleton_4.follow(mySprite, 85)
    skeleton_5 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_5, tiles.getTileLocation(22, 16))
    skeleton_5.follow(mySprite, 85)
    skeleton_6 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_6, tiles.getTileLocation(12, 20))
    skeleton_6.follow(mySprite, 85)
    skeleton_7 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_7, tiles.getTileLocation(20, 20))
    skeleton_7.follow(mySprite, 85)
    skeleton_8 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(skeleton_8, tiles.getTileLocation(16, 22))
    skeleton_8.follow(mySprite, 85)
}
let skeleton_8: Sprite = null
let skeleton_7: Sprite = null
let skeleton_6: Sprite = null
let skeleton_5: Sprite = null
let skeleton_4: Sprite = null
let skeleton_3: Sprite = null
let skeleton_2: Sprite = null
let skeleton_1: Sprite = null
let map = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
choose_map()
summon_enemies()
