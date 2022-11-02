import { Point } from './point.interface'

export class PointManager {
  private points: Array<Point> = [];

  register(point: Point) {
    this.points.push(point);
  }

  doesExist(uuid: string): boolean {
    return this.points.some(p => p.uuid === uuid);
  }
}
