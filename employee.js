//////////////////////////////////EMPLOYEES
function Employee () {
  this.firstName = "",
  this.lastName = ""
}

function Clinician (x) {
  this.jobType = "Clinician",
  this.expertise = x //registered nurse, xray technician, pediatrician
}

function Operations (y) {
  this.jobType = "Operations",
  this.responsibility = y //Payroll, purchasing, compliance
}

//////////////////////////////////DEPARTMENTS
function Department () {
  this.deptName = ""
}

function FieldOffice (z) {
  this.deptName = "Field Office",
  this.location = z
}

function Headquarters (a) {
  this.deptName = "Headquarters",
  this.location = a
}

Clinician.prototype = new Employee();
Operations.prototype = new Employee();
FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();

var employee1 = new Clinician("Pedicatrician");
employee1.firstName = "Marie";
employee1.lastName = "Gordon";
employee1.deptName = "Pediatrics";
employee1.location = "Nashville";
console.log("Employee 1: ", employee1);

var employee2 = new Clinician("XRay Technician");
employee2.firstName = "Taylor";
employee2.lastName = "Owens";
employee2.deptName = "Obstetrics";
employee2.location = "Hendersonville";
console.log("Employee 2: ", employee2);

var employee3 = new Operations("Payroll");
employee3.firstName = "Harold";
employee3.lastName = "Smith";
employee3.location = new FieldOffice("Franklin");
employee3.location.deptName = "Headquarters";
console.log("Employee 3: ", employee3);

var employee4 = new Operations("Compliance");
employee4.firstName = "Maximus";
employee4.lastName = "Assante";
employee4.location = new FieldOffice("Franklin");
employee4.location.deptName = "Headquarters";
console.log("Employee 4: ", employee4);

console.log(`${employee1.firstName} ${employee1.lastName} works in ${employee1.deptName}, in the ${employee1.location} ${employee1.location.deptName} location, and is specializes as a ${employee1.expertise}.`);
console.log(`${employee2.firstName} ${employee2.lastName} works in ${employee2.deptName}, in the ${employee2.location} ${employee2.location.deptName} location, and is specializes as a ${employee2.expertise}.`);
console.log(`${employee3.firstName} ${employee3.lastName} works in ${employee3.jobType}, in the ${employee3.location.location} ${employee3.location.deptName} location, and is responsible for ${employee3.responsibility}.`);
console.log(`${employee4.firstName} ${employee4.lastName} works in ${employee4.jobType}, in the ${employee4.location.location} ${employee4.location.deptName} location, and is responsible for ${employee4.responsibility}.`);
