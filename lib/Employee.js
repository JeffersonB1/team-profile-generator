class Employee {
    constructor(name =''){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        if (this.name) {
            return true;
        }
        return false;
    };

    getId () {
        return this.id;
    };

    getEmail () {
        return this.email;
    };

    getRole () {
        return 'Employee';
    };
    
}
module.exports = Employee;