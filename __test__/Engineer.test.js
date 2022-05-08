const Engineer = require('../lib/Engineer');

test("Ability to set github username using constructor function", () => {
    const github = "pedroski ";
    const employee = new Engineer("pedro", 1, "pedro.ki@gmail.com", github);
    expect(employee.github).toBe(github);
  });

test('Sets role with getRole', () => {
    const role = "Engineer";
    const employee = new Engineer('pedro', 1, "pedro.ki@gmail.com", "pedroski" );

    expect(employee.getRole()).toBe(role);
});