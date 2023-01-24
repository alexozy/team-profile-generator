// we would build this class the same as the 'employee' class; use super to copy parent constructor
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github= github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
};
module.exports = Engineer;


