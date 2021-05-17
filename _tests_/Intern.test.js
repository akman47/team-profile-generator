const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.name).toBe('Ruby');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});

test("gets intern's name", () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.getName()).toEqual(expect.stringContaining('Ruby'));
});

test("gets intern's id", () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test("gets intern's email", () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("get intern's role", () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});

test("get intern's school", () => {
    const intern = new Intern('Ruby', '4', 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});