// we would build this class the same as the 'employee' class; use super to copy parent constructor
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor (name, role, id, email, github) {
        super(name, role, id, email);

        this.github= github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }
};
module.exports = Engineer;


