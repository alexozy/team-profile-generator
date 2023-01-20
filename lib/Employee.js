class Employee{
    // this is a contructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    constructor(name,role,id,email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;

    }

    // Employee should have getName, getID, getEmail,getRole
    
    getName(){
        return this.name;
    }

    getID (){
        return this.id;
    }

    getEmail (){
        return this.email;
    }
    
    getRole (){
        return this.role;
    }

}
module.exports = Employee