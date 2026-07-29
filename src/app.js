import Player from './Player.js'
import Game from './Game/Game.js'
import { GameEnemyService } from './Game/GameEnemyService.js'
import { GameUI } from './Game/GameUI.js'
import Fighter from './Fighter.js'
import Star from './Star.js'
import mouse from './Mouse.js'
import { Thunder } from './Thunder.js'
import Enemy from './Enemy.js' 
import { Bullet } from './Bullet.js'


const root = document.getElementById('root')
window.root = root

const fighter = new Fighter()

const player = new Player({
  fighter,
})

const game = new Game({player})

if (import.meta.env.DEV) {
  window.game = game
}
