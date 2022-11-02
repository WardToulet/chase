"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const static_1 = __importDefault(require("@fastify/static"));
const view_1 = __importDefault(require("@fastify/view"));
const formbody_1 = __importDefault(require("@fastify/formbody"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const point_1 = require("./point");
const game_1 = require("./game");
const pointManager = new point_1.PointManager();
const gameManager = new game_1.GameManager();
const fastify = (0, fastify_1.default)();
fastify.get('/point/:uuid', (req, res) => {
    // Check if the point is known, if not we offer to register it
    if (!pointManager.doesExist(req.params.uuid)) {
        res.view('register.ejs', { uuid: req.params.uuid });
        return;
    }
    if (!gameManager.isRunning) {
        res.view('no-game.ejs');
        return;
    }
    res.send('Hello');
});
fastify.post('/register', (req, res) => {
    pointManager.register(req.body);
    res.view('register-success.ejs', req.body);
});
fastify.register(formbody_1.default);
fastify.register(static_1.default, {
    root: path_1.default.join(__dirname, 'static'),
});
fastify.register(view_1.default, {
    root: path_1.default.join(__dirname, 'views'),
    engine: { ejs: ejs_1.default }
});
fastify.listen({ port: 80 });
