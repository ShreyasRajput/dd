namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
	
})
let myCorg = corgio.create(SpriteKind.Player, 37, 70)
myCorg.follow()
myCorg.horizontalMovement()
myCorg.verticalMovement()
tiles.setTilemap(tiles.createTilemap(
            hex`1e00080006070707070707070707070707070707070707070707070707070707070501090909090909090909090909090909090909090909090909090909090801120909090d0b090909090909090909090909090909090909090909090801110a09090909090909090909090909090909090909090909090909090801090909090909090f0c100909090909090909090909090909090909090801090909090b0d0909090909090909090909090909090909090909090908010c17090909090909090909090909090909090909090909090909090908141414141616161616161616161616161616161616161616161616161616`,
            img`
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5,sprites.dungeon.floorLightMoss,sprites.dungeon.chestClosed,sprites.builtin.crowd3,sprites.builtin.brick,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.floorDark0],
            TileScale.Sixteen
        ))
myCorg.updateSprite()
info.setLife(3)
