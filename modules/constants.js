export const DEGREE = Math.PI/180
export const FRICTION = 0.7
export const FPS = 30
export const ROID_JAG = 0.44
export const ROID_START_SIZE = 100
export const ROID_START_SPEED = 50
export const ROID_STARTING_NUM = 6
export const ROID_VERTICES = 10
export const SHIP_BLINK_DURATION = 0.2
export const SHIP_EXPLODE_DURATION = 0.44
export const SHIP_INVISIBILTY_DURATION = 7
export const SHIP_THRUST = 5
export const SHIP_TURN_SPEED = 180
export const SHOW_COLLISION_BOUND = false

export function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
