import { BasicGame } from './basic.game';
import { Game } from './game.interface';

/** Manages instances of the game **/
export class GameManager {
  private instance: Game | undefined = new BasicGame();

  /* Is there a game running at the moment */
  get isRunning(): boolean {
    return !!this.instance;
  }
}
