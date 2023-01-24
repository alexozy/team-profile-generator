class Employee{
    // this is a constructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

    // Employee should have getName, getID, getEmail,getRole
    
    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    
    getRole(){
        return 'Employee';
    }

};

module.exports = Employee;