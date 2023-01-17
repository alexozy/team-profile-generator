

class Manager extends Employee{
    // this is a constructor with parameters of name, id, email. 
    // the 'this' will allow you to accept parameters for your constructor
    // Manager needs officeNumber
    constructor(name, id, email, officeNumber){
        this.name = name;
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
    
    getRole (){
        // they are asking it to return 'Manager'
        return "Manager";
    }

};