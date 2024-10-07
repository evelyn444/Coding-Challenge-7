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
