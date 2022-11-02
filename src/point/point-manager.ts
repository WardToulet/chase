import { knex } from '../database';
import { Point } from './point.interface'

export class PointManager {
  async register(point: Point) {
    await knex('Point').insert(point);
  }

  async isRegistered(uuid: string): Promise<boolean> {
    return (await this.getPointByUuid(uuid)) !== undefined;
  }

  async getPointByUuid(uuid: string): Promise<Point | undefined> {
    return await knex<Point>('Point')
      .where('uuid', uuid)
      .first();
  }
}
