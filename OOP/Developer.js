import EmployeeManagement from "./EmployeeManagement.js";

class Developer extends EmployeeManagement{
    constructor( name,taskslist ) {
        super(name, taskslist)
    }
}

export default Developer;