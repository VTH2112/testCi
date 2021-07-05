class EmployeeManagement {
    // DOB : date of birth 
    constructor( name, taskslist) {
        this.name = name
        this.taskslist = taskslist
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTaskslist() {
        return this.taskslist;
    }
    setTaskslis(taskslist) {
        this.taskslist = taskslist;
    }

    displayInfo() {
        console.log(this.name);
        console.log(this.taskslist);
    };

}
export default EmployeeManagement;