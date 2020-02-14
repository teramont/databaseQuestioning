const { checkUniqueEmail } = require('../dataBase/authorization');
const { validateForm } = require('../logic/authorization');

module.exports = async (request, response, done) => {
  const { body } = request;
  const emailUnique = await checkUniqueEmail(body.email);
  const formValid = Object.assign({}, validateForm(body), { emailUnique });
  request.errs = formValid;
  request.isValid = Object.values(formValid)
    .reduce((acc, cur) => acc && cur, true);

  done();
};
