const user = require('../db/models').User;
const comment = require('../db/models').Comment;
const ResponseFormater = require('../core').ResponseFormater;
const {check , validationResult}  = require('express-validator');

module.exports = {
    async create(req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        return user
        .create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            birthday_date: req.body.birthdayDate,
            location: req.body.location
        })
        .then(user => res.status(201).json(ResponseFormater.build(
            user,
            "User entity created!",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormater.error(
            error,
            "Could not create user entity",
            "error"
        )))
    },
    async destroy (req, res) {
        console.log(req.params.userId);

        if (req.params.userId == null) {
            return res.status(404).json(
                ResponseFormater.error(
                    {},
                    "Param `userId` could not be blank!!",
                    400,
                    "error"
                )
            );
        }

        return user

        .findById(req.params.userId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormater.error(
                        {},
                        "Could not delete the user. User with ID " + req.params.userId + " not found!",
                        404,
                        "not found"
                    )
                );
            }

            return usr
            .destroy()
            .then(() => res.status(200).json(
                ResponseFormater.build(
                 {},
                 "User with ID " + req.params.userId + " deleted successfully!",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormater.build(
                 {},
                 "Something wrong!",
                 400,
                 "error"
               )
            ));
        });
    }
}
