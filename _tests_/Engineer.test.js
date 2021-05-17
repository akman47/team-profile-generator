const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.name).toBe('Larry');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.getName()).toEqual(expect.stringContaining('Larry'));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("get engineer's role", () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});

test("get engineer's github username", () => {
    const engineer = new Engineer('Larry', '3', 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});