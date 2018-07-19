const { send } = require('micro');
const { router, get } = require('microrouter');
const fetch = require('node-fetch');

async function getMovies(req, res) {
  send(res, 200, {});
}

const info = (req, res) => send(res, 200, 'Movie Search Api Service');
const notfound = (req, res) => send(res, 404, 'Not found Route');

module.exports = router(
  get('/api/imdb/search/:title', getMovies),
  get('/', info),
  get('*', notfound)
);
