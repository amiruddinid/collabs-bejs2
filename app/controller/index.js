const login = require('./api/login');
const users = require('./users')
const register = require('./register')
const accounts = require('./accounts');

module.exports = {
    users,
    login,
    register,
    accounts
}