import Fastify from 'fastify';

import FastifyStatic from '@fastify/static';
import FastifyView from '@fastify/view';
import FastifyFormBody from '@fastify/formbody';

import ejs from "ejs";
import path from 'path';

import { Point, PointManager } from './point';
import { GameManager } from './game'

const pointManager = new PointManager();
const gameManager = new GameManager();

const fastify = Fastify();

fastify.get<{Params: { uuid: string }}>('/point/:uuid', (req, res) => {
  // Check if the point is known, if not we offer to register it
  if (!pointManager.doesExist(req.params.uuid)) {
    res.view('register.ejs', { uuid: req.params.uuid })
    return;
  }

  if (!gameManager.isRunning) {
    res.view('no-game.ejs');
    return;
  }

  res.send('Hello');
})

fastify.post('/register', (req, res) => {
  pointManager.register(req.body as Point);
  res.view('register-success.ejs', req.body as Point);
})

fastify.register(FastifyFormBody);
fastify.register(FastifyStatic, {
  root: path.join(__dirname, 'static'),
});
fastify.register(FastifyView, {
  root: path.join(__dirname, 'views'),
  engine: { ejs }
})

fastify.listen({ port: Number(process.env.PORT) });
