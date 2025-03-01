import { Entity } from 'engine/Entity.js';
import { drawFrameOrigin } from 'engine/context.js';
import { animations, BombermanStateType, frames, WALK_SPEED } from 'game/constants/bomberman.js';
import { CounterDirectionsLookup, Direction, MovementLookup } from 'game/constants/entities.js';
import { FRAME_TIME, TILE_SIZE, HALF_TILE_SIZE, DEBUG } from 'game/constants/game.js';
import * as control from 'engine/inputHandler.js'
import { isZero } from 'game/utils/utils.js';
import { drawBox, drawCross } from 'game/utils/debug.js';
import { collisionMap, collisionTile } from 'game/constants/LevelData.js';

export class Bomberman extends Entity {

  image = document.querySelector('img#bomberman');

  id = 0;
  direction = Direction.DOWN;
  baseSpeedTime = WALK_SPEED;
  speedMultiplier = 1.2;
  animation = animations.moveAnimations[this.direction];
  collisionMap = [...collisionMap];

  constructor(position, time) {
    super({x: (position.x * TILE_SIZE) + HALF_TILE_SIZE, y: (position.y * TILE_SIZE) + HALF_TILE_SIZE});

    this.states = {
      [BombermanStateType.IDLE]: {
        type: BombermanStateType.IDLE,
        init: this.handleIdleInit,
        update: this.handleIdleState,
      },
      [BombermanStateType.MOVING]: {
        type: BombermanStateType.MOVING,
        init: this.handleMovingInit,
        update: this.handleMovingState,
      },
    },

    this.changeState(BombermanStateType.IDLE, time);
  }

  changeState(newState, time) {
    this.currentState = this.states[newState];
    this.animationFrame = 0; // To ensure we are always at the beginning of the amination
    this.animationTimer = time.previous + this.animation[this.animationFrame] + FRAME_TIME;

    this.currentState.init(time);
  }

  // Helper function which returns the value at the specified row and column position
  getCollisionTile(tile) {
    return this.collisionMap[tile.row][tile.column];
  }

  getCollisionCoords(direction) {
    switch(direction) {
      case Direction.UP:
        return [
          { row: Math.floor((this.position.y - 9) / TILE_SIZE), column: Math.floor((this.position.x - 8) / TILE_SIZE) },
          { row: Math.floor((this.position.y - 9) / TILE_SIZE), column: Math.floor((this.position.x + 7) / TILE_SIZE) },
        ];
      case Direction.LEFT:
        return [
          { row: Math.floor((this.position.y - 8) / TILE_SIZE), column: Math.floor((this.position.x - 9) / TILE_SIZE) },
          { row: Math.floor((this.position.y + 7) / TILE_SIZE), column: Math.floor((this.position.x - 9) / TILE_SIZE) },
        ];
      case Direction.RIGHT:
        return [
          { row: Math.floor((this.position.y - 8) / TILE_SIZE), column: Math.floor((this.position.x + 8) / TILE_SIZE) },
          { row: Math.floor((this.position.y + 7) / TILE_SIZE), column: Math.floor((this.position.x + 8) / TILE_SIZE) },
        ];
      default:
      case Direction.DOWN:
        return [
          { row: Math.floor((this.position.y + 8) / TILE_SIZE), column: Math.floor((this.position.x - 8) / TILE_SIZE) },
          { row: Math.floor((this.position.y + 8) / TILE_SIZE), column: Math.floor((this.position.x + 7) / TILE_SIZE) },
        ];
    }
  }

  shouldBlockMovement(tileCoords) {
    const tileCoordsMatch = tileCoords[0].column === tileCoords[1].column && tileCoords[0].row === tileCoords[1].row;
    const collisionTiles = [this.getCollisionTile(tileCoords[0]), this.getCollisionTile(tileCoords[1])];

    if (
      (tileCoordsMatch && collisionTiles[0] >= collisionTile.WALL) ||
      (collisionTiles[0] >= collisionTile.WALL && collisionTiles[1] >= collisionTile.WALL)) {
      return true;
    }
    return false;
  }

  // Notice we are spreading the MovementLookup object each time we use it because
  // we want to make a copy of it and not pass on its reference. Otherwise, this
  // could lead to all sorts of unwanted behavior.
  performWallCheck(direction) {
    const collisionCoords = this.getCollisionCoords(direction);

    if (this.shouldBlockMovement(collisionCoords)) return [this.direction, {x: 0, y: 0}]

    const counterDirections = CounterDirectionsLookup[direction];
    if (this.getCollisionTile(collisionCoords[0]) >= collisionTile.WALL) {
      return [counterDirections[0], { ...MovementLookup[counterDirections[0]] }];
    }

    if (this.getCollisionTile(collisionCoords[1]) >= collisionTile.WALL) {
      return [counterDirections[1], { ...MovementLookup[counterDirections[1]] }];
    }

    return [direction, { ...MovementLookup[direction] }];
  }


  getMovement() {
    if (control.isLeft(this.id)) {
      return this.performWallCheck(Direction.LEFT);
    } else if (control.isRight(this.id)) {
      return this.performWallCheck(Direction.RIGHT);
    } else if (control.isDown(this.id)) {
      return this.performWallCheck(Direction.DOWN);
    } else if (control.isUp(this.id)) {
      return this.performWallCheck(Direction.UP);
    }
    // By default we return the current direction and velocity object with zero values
    return [this.direction, {x: 0, y: 0}];
  }

  /*
  getMovement() {
    if (control.isLeft(this.id)) {
      return [Direction.LEFT, { x: -WALK_SPEED, y: 0 }];
    } else if (control.isRight(this.id)) {
      return [Direction.RIGHT, { x: WALK_SPEED, y: 0 }];
    } else if (control.isDown(this.id)) {
      return [Direction.DOWN, { x: 0, y: WALK_SPEED }];
    } else if (control.isUp(this.id)) {
      return [Direction.UP, { x: 0, y: -WALK_SPEED }];
    }

    return [this.direction, { x: 0, y: 0}];
  }
  */

  handleIdleInit = () => {
    this.velocity = {x: 0, y: 0};
  };

  handleMovingInit = () => {
    // To show the correct walking frame as soon as we transition to the moving state
    this.animationFrame = 1;
  };

  // Function to determine if the player is moving or idle based
  // on the current controls pressed at the time
  // Both functions "handleMovingState" and "handleIdleState" will call this function
  handleGeneralState = () => {
    const [direction, velocity] = this.getMovement();

    this.animation = animations.moveAnimations[direction];
    this.direction = direction;

    return velocity;
  };

  // Functions are left empty

  handleIdleState = (time) => {
    const velocity = this.handleGeneralState();
    if (isZero(velocity)) return;

    this.changeState(BombermanStateType.MOVING, time)
  };

  // Slight difference: We want to set the local velocity to the value return by the
  // 'handleGeneralState' because we are already in a moving state
  handleMovingState = (time) => {
    this.velocity = this.handleGeneralState();
    if (!isZero(this.velocity)) return;

    this.changeState(BombermanStateType.IDLE, time)
  };

  updatePosition(time) {
    this.position.x += (this.velocity.x * this.baseSpeedTime * this.speedMultiplier) * time.secondsPassed;
    this.position.y += (this.velocity.y * this.baseSpeedTime * this.speedMultiplier) * time.secondsPassed;

  }

  updateAnimation(time) {
    if (time.previous < this.animationTimer || isZero(this.velocity)) return;

    this.animationFrame += 1;
    if (this.animationFrame >= this.animation.length) this.animationFrame = 0;
    this.animationTimer = time.previous + (this.animation[this.animationFrame][1] * FRAME_TIME); // Here lied the error of the hyperactive Bomberman (this.animationTimer = time.previous + (this.animation[this.animationFrame[1] * FRAME_TIME]);)
  }

  update(time) {
    // Add your main update calls here
    this.updatePosition(time);
    this.currentState.update(time);
    this.updateAnimation(time);
  }

  draw(context, camera) {
    const [frameKey] = this.animation[this.animationFrame];
    const frame = frames.get(frameKey); // Get the frame details from the frame object

    drawFrameOrigin(
      context, this.image, frame,
      Math.floor(this.position.x - camera.position.x),
      Math.floor(this.position.y - camera.position.y),
      [this.direction === Direction.RIGHT ? -1 : 1, 1],
    );

    if (!DEBUG) return;

    drawBox(context, camera, [
      this.position.x - HALF_TILE_SIZE, this.position.y - HALF_TILE_SIZE, TILE_SIZE - 1, TILE_SIZE - 1,
    ], '#FFFF00');
    drawCross(context, camera, { x: this.position.x, y: this.position.y }, '#FFF');

  }
}
