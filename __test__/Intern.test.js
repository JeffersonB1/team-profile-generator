const Intern = require('../lib/Intern');

test ('getting the school form getSchool', () => {
    const school = "hardvard university ";
    const employee = new Intern("pedro", 1, "pedro.ki@gmail.com", school);
    expect(employee.school).toBe(school);
});

test('Sets role with getRole', () => {
    const role = "Intern";
    const employee = new Intern('pedro', 1, "pedro.ki@gmail.com", "pedroski" );

    expect(employee.getRole()).toBe(role);
});