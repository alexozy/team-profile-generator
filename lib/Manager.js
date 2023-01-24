const Employee = require('./Employee');

class Manager extends Employee {
    // this is a constructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    // Manager needs officeNumber
    constructor(name, email, id, officeNumber){
        super( name, email, id);
        
        this.officeNumber = officeNumber;
    }
    
    // getOfficeNumber(){
    //     return this.officeNumber;
    // }
    
    getRole (){
        return "Manager";
    }
}

module.exports = Manager;