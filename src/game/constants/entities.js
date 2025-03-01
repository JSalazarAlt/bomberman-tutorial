// CONTAINS CONSTANT VALUES REQUIRED ACROSS MULTIPLE ENTITIES

export const Direction = {
  UP: 'direction-up',
  DOWN: 'direction-down',
  LEFT: 'direction-left',
  RIGHT: 'direction-right',
}

// Provides a lookup map for the velocity values based on the direction
export const MovementLookup = {
  [Direction.LEFT]: {x: -1, y: 0},
  [Direction.RIGHT]: {x: 1, y: 0},
  [Direction.UP]: {x: 0, y: -1},
  [Direction.DOWN]: {x: 0, y: 1},
};

// Provides a lookup for the inverted navigation based on the direction
export const CounterDirectionsLookup = {
  [Direction.LEFT]: [Direction.DOWN, Direction.UP],
  [Direction.RIGHT]: [Direction.DOWN, Direction.UP],
  [Direction.UP]: [Direction.RIGHT, Direction.LEFT],
  [Direction.DOWN]: [Direction.RIGHT, Direction.LEFT],
};
