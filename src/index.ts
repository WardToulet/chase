import Fastify from 'fastify';
import ejs from "ejs";
import path from 'path';

import FastifyStatic from '@fastify/static';
import FastifyView from '@fastify/view';
import FastifyFormBody from '@fastify/formbody';

import { Point, PointManager } from './point';
import { GameManager } from './game'
import { knex } from './database';

const pointManager = new PointManager();
const gameManager = new GameManager();

const fastify = Fastify();

fastify.get<{Params: { uuid: string }}>('/point/:uuid', async (req, res) => {
  const isRegistered = await pointManager.isRegistered(req.params.uuid);
  if (!isRegistered) {
    return res.view('register.ejs', { uuid: req.params.uuid });
  }

  const isRunning  = gameManager.isRunning;
  if (!isRunning) {
    return res.view('no-game.ejs');
  }

  return res.view('success.ejs', {
    title: 'Captured',
    msg: 'Go capture something else'
  });
})

fastify.post('/register', async (req, res) => {
  await pointManager.register(req.body as Point);
  return res.view('register-success.ejs', req.body as Point);
})

fastify.get('/point', async (req, res) => {
  return knex<Point>('Point');
})

fastify.register(FastifyFormBody);

fastify.register(FastifyStatic, {
  root: path.join(__dirname, 'static'),
});

fastify.register(FastifyView, {
  root: path.join(__dirname, 'views'),
  engine: { ejs }
})

// @ts-ignore
fastify.listen({ port: process.env.PORT || 8080 });
