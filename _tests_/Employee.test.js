const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jared', '1', 'email');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual('1');
    expect(employee.email).toEqual('email');
});

test("gets employee's name", () => {
    const employee = new Employee('Jared', '1', 'email');

    expect(employee.getName()).toEqual(expect.stringContaining('Jared'));
});

test("gets employee's id", () => {
    const employee = new Employee('Jared', '1', 'email');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee's email", () => {
    const employee = new Employee('Jared', '1', 'email');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get employee's role", () => {
    const employee = new Employee('Jared', '1', 'email');

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});