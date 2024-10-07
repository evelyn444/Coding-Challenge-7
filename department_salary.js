// Task 1: Create a Department Structure 
const company = {
    departments: [
        {
            departmentName: 'Marketing',
            employees: [
                {
                    name: 'Sarah',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Kyle',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Sam',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Katie',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates:[]
                        }
                    ]
                },
                {
                    name: 'Sky',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
// Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary (department) {
    let totalSalary = 0;

department.employees.forEach(function (employee){ // loops through employees
    totalSalary += employee.salary;

    employee.subordinates.forEach(function(subordinate){ // checking for subordinates and salaries
        totalSalary += subordinate.salary;

        totalSalary += calculateEmployeeSalary(subordinate); // if subordinate has employees then recursive
    });
});
console.log (`Total Salary for ${department.departmentName} : $${totalSalary}`); // pulls up marketing department salary
return totalSalary;
}

// checking salary of employee and subordinates
function calculateEmployeeSalary (employee) {
    let employeeTotal = employee.salary;
    employee.subordinates.forEach(function(subordinate){
        employeeTotal += calculateEmployeeSalary(subordinate);
    });
    return employeeTotal;
}

//testing for a department
const totalSalesSalary = calculateDepartmentSalary(company.departments [0]);
console.log (`Total Salary for the Sales Department: $${totalSalesSalary}`); // pulls up sales department salary
