// CONTAINS CONSTANT VALUES REQUIRED FOR BOMBERMAN

import { Direction } from "./entities.js";

export const WALK_SPEED = 40;

// STATE TYPES
// -----------
export const BombermanStateType = {
  IDLE: 'idle',
  MOVING: 'moving',
};

// ANIMATION FRAMES
// ----------------
// Each frame includes:
// - Key String: Named key string for identifying purposes (e.g., idle-down)
// - Dimensions Array: Array of dimensions for the section where the frame is defined
// - Offset Array: X and Y origin offset
export const frames = new Map([
  ['idle-down', [[4, 5, 17, 22], [8, 15]]],
  ['move-down-1', [[30, 5, 17, 22], [7, 15]]],
  ['move-down-2', [[61, 5, 17, 22], [9, 15]]],
  ['idle-side', [[79, 5, 18, 22], [7, 15]]],
  ['move-side-1', [[104, 5, 17, 21], [8, 15]]],
  ['move-side-2', [[129, 5, 18, 22], [8, 15]]],
  ['idle-up', [[154, 4, 17, 22], [8, 15]]],
  ['move-up-1', [[180, 4, 17, 21], [7, 15]]],
  ['move-up-2', [[211, 4, 17, 22], [9, 15]]],
  ['idle-down-left', [[5, 55, 17, 20], [6, 15]]],
  ['idle-up-left', [[30, 55, 17, 20], [6, 15]]],
])

// ANIMATION FRAME SEQUENCES
// -------------------------
// Lists the animation frame sequences.
// Note that the sequences are put under a "moveAnimations" property since
// we will be adding other types of animations later on
// Each sequence frame holds the unique animation key string from the "frame"
// object and a number of frames this animations will be on screen for.
export const animations = {
  moveAnimations: {
    [Direction.LEFT]: [
      ['idle-side', 8], ['move-side-1', 8], ['idle-side', 8], ['move-side-2', 8],
    ],
    [Direction.RIGHT]: [
      ['idle-side', 8], ['move-side-1', 8], ['idle-side', 8], ['move-side-2', 8],
    ],
    [Direction.UP]: [
      ['idle-up', 8], ['move-up-1', 8], ['idle-up', 8], ['move-up-2', 8],
    ],
    [Direction.DOWN]: [
      ['idle-down', 8], ['move-down-1', 8], ['idle-down', 8], ['move-down-2', 8],
    ],
  }
}
