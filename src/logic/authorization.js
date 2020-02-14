const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = {

  getHash(password, salt) {
    return crypto.createHash('sha256')
      .update(password + salt)
      .digest('hex');
  },

  validateForm(form) {
    // maybe need check SQL injections
    const { email, password, name, surname, age } = form;
    const emailRegEx = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
    return {
      validEmail: emailRegEx.test(email),
      validPassword: password > 6,
      validName: true, // prospect
      validSurname: true, // prospect
      validAge: age >= 16
    };
  }

};
