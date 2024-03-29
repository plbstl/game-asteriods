export const DEGREE = Math.PI/180
export const FONT_SIZE = 40
export const FPS = 30
export const FRICTION = 0.7
export const GAME_LIVES = 5
export const MAX_TRAVEL_DISTANCE = 0.7
export const MUSIC_ON = true
export const LASER_EXPLODE_DURATION = 0.1
export const LASER_MAX = 10
export const LASER_SPEED = 500
export const ROID_JAG = 0.44
export const ROID_POINTS_LG = 20
export const ROID_POINTS_MD = 50
export const ROID_POINTS_SM= 100
export const ROID_START_SIZE = 100
export const ROID_START_SPEED = 50
export const ROID_STARTING_NUM = 1
export const ROID_VERTICES = 10
export const SAVE_KEY_SCORE = 'highscore'
export const SHIP_BLINK_DURATION = 0.2
export const SHIP_EXPLODE_DURATION = 0.44
export const SHIP_INVISIBILTY_DURATION = 7
export const SHIP_THRUST = 5
export const SHIP_TURN_SPEED = 180
export const SHOW_COLLISION_BOUND = false
export const SOUND_ON = true
export const TEXT_FADE_TIME = 2.6

export const score = { value: 0 }
export const highScore = { value: 0 }

export const ROID_SIZES = {
  sm: Math.ceil(ROID_START_SIZE / 8),
  md: Math.ceil(ROID_START_SIZE / 4),
  lg: Math.ceil(ROID_START_SIZE / 2),
  maxNum: 7, // 1lg -> 2md -> 4sm
}

export function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
