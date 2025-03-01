export const collisionTile = {
  EMPTY: 0,
  WALL: 20,
  BLOCK: 30,
};

export const tileMap = [
  [29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 59, 30, 29],
  [29, 30, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 30, 29],
  [29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 29],
  [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
];

export const collisionMap = [
  [collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.EMPTY, collisionTile.WALL, collisionTile.WALL],
  [collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL, collisionTile.WALL],
];
