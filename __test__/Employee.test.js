const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "marcus";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("marcus", id, "marcus@marcus123.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "marcus@marcus123.com";
    const employee = new Employee("marcus", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("marcus", 1, "marcus@marcus123.com");
    expect(employee.getRole()).toBe(role);
  });