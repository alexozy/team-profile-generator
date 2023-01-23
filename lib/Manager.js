const Employee = require('./Employee');

class Manager extends Employee {
    // this is a constructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    // Manager needs officeNumber
    constructor(name, id, email, officeNumber){
        super( name, id, email);
        
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole (){
        return "Manager";
    }
}
module.exports = Manager;