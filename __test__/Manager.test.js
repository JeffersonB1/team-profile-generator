const Manager = require('../lib/Manager');

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1738";
    const employee = new Manager("Mallory", 1, "mallory.faria@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

test('Sets role with getRole', () => {
    const role = "Manager";
    const employee = new Manager('marcus');

    expect(employee.getRole()).toBe(role);
});



