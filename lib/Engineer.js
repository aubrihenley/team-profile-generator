// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

const { ENGINE_METHOD_RAND } = require('constants');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer  