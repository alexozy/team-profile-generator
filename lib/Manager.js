const Employee = require('./Employee');

class Manager extends Employee {
    // this is a constructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    // Manager needs officeNumber
    constructor(name, id, email, officeNumber){
        // this copies the parameters from Employee. pulls copy from parent constructor
        super( name, id, email);
        
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole (){
        // they are asking it to return 'Manager'
        return "Manager";
    }
}
module.exports = Manager;