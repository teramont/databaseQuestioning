const fastify = require('fastify')({ logger: true });
const cors = require('fastify-cors');

fastify.register(cors, {
  origin: '*',
  methods: ['POST']
});

fastify.register(require('./api/singUp'));

fastify.listen(3001, (err, address) => {
  if (err) console.dir(err);
  else console.dir(address);
});
