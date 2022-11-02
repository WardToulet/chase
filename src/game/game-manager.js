"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
/** Manages instances of the game **/
class GameManager {
    /* Is there a game running at the moment */
    get isRunning() {
        return !!this.instance;
    }
}
exports.GameManager = GameManager;
