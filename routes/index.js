
const userController = require('../controllers').users
const { body, validationResult } = require('express-validator');

module.exports = (app) => {

  /**
   * Route for create new User
   */
  app.post(
    '/api/v1/users', 
    body("firstName").not().isEmpty().withMessage('Param firstName could be empty!'),
    body("lastName").not().isEmpty().withMessage('Param lastName could be empty!'),
    body("birthdayDate").not().isEmpty().withMessage('Param birthdayDate could be empty!'),
    body("location").not().isEmpty().withMessage('Param location could be empty!'),
    userController.create
  );

  /**
   * Route for delete the User by :userId
   */
  app.delete('/api/v1/users/:userId', userController.destroy);
}
