"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointManager = void 0;
class PointManager {
    constructor() {
        this.points = [];
    }
    register(point) {
        this.points.push(point);
    }
    doesExist(uuid) {
        return this.points.some(p => p.uuid === uuid);
    }
}
exports.PointManager = PointManager;
