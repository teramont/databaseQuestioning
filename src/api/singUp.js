const { registerUser } = require('../dataBase/authorization');
const { getHash } = require('../logic/authorization');

module.exports = (fastify, opts, done) => {
  fastify.post('/api/auth/signUp',
    { preHandler: [require('./checkForm')] },
    async (request, response) => {
      if (request.isValid) {
        const { body: user } = request;
        // add generate salt
        user.password = getHash(user.password, '');
        const id = await registerUser(user);
        response.send({
          registered: true,
          message: 'Congratulations, you have been registered',
          id
        });
      } else {
        response.send({
          registered: false,
          message: 'Registration failed',
          errors: request.errs
        });
      }
    });

  done();
};
