import EmployeeManagement from "./EmployeeManagement.js";

class Manager extends EmployeeManagement{
    constructor( name,taskslist,staffArr ) {
        super(name, taskslist,staffArr)
    }
    addEmployee(){
        this.staffArr.push(newstaff);
    }
}

export default Manager;