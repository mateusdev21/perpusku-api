module.exports = (app) => {
    const users = require('../controllers/user.controller');
    const register = require('../controllers/register.controller');
    const login = require('../controllers/login.controller');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.get('/:id', users.findOne);
    router.post('/', users.create);
    router.put('/:id', users.update);
    router.delete('/:id', users.delete);

    router.post('/register', register);
    router.post('/login', login);

    app.use('/api/users', router);
}