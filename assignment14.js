/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/
const employees = [
{
  "first_name": "Sam",
  "department": "Tech",
  "designation": "Manager",
  "salary": 40000,
  "raise_eligible": true
},
{
  "first_name": "Mary",
  "department": "Finance",
  "designation": "Trainee",
  "salary": 18500,
  "raise_eligible": true
},
{
  "first_name": "Bill",
  "department": "HR",
  "designation": "Executive",
  "salary": 21200,
  "raise_eligible": false
}
]

  console.log("******PROBLEM 1******");
 console.log(employees);

/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/
 let Company = {
   "companyName": "TechStars",
   "website": "www.techstars.site",
   "employees": [
     {"first_name": "Sam",
     "department": "Tech",
     "designation": "Manager",
     "salary": 40000,
     "raise_eligible": true
   },
   {
     "first_name": "Mary",
     "department": "Finance",
     "designation": "Trainee",
     "salary": 18500,
     "raise_eligible": true
   },
   {
     "first_name": "Bill",
     "department": "HR",
     "designation": "Executive",
     "salary": 21200,
     "raise_eligible": false
   }
 ]
}
console.log("******PROBLEM 2******");
console.log(Company);


/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.

 **/

   const newHire = {
       "first_name": "Anna",
       "department": "Tech",
       "designation": "Executive",
       "salary": 25600,
       "raise_eligible": false
     }

  Company.employees.push(newHire);
   console.log("******PROBLEM 3******");
  console.log(employees, newHire);

   /**
    * Problem 4.
    *
    * Given the JSON for the company, calculate the total salary for all company employees.
    *
    * Print total salary to console.
    **/
let totalSalary = 0
  for (const index in employees) {
  totalSalary+=employees.salary;
}

  console.log("******PROBLEM 4******")
  console.log(totalSalary)

/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/

 for (const id in employees) {
   if (employees.raise_eligible){
     employees.salary += 1.1;
     employees.raise_eligible = false;
   }
 }
console.log("******PROBLEM 5******")
console.log(employees)


     /**
      * Problem 6.
      *
      * Some employees have decided to work from home. The following array indicates who is working from home.
      * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
      *
      * Working from home: ['Anna', 'Sam']
      *
      * Print updated JSON to console.
      **/

const workFromhome = ['Anna', 'Sam'];
for(const id in employees) {
  employees[id].wfh=workFromhome.includes(employees[id.firstName]);
}
console.log("******PROBLEM 6******")
console.log(newHire, "Sam")
