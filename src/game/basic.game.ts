import { Game } from './game.interface';

export class BasicGame implements Game {
  capture(uuid: string): void {
    throw new Error('Method not implemented.');
  }
}
