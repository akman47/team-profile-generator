const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('email');
    expect(manager.office).toBe('office');
});

test("gets manager's name", () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.getName()).toEqual(expect.stringContaining('Bob'));
});

test("gets manager's id", () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test("gets manager's email", () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("get manager's role", () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});

test("get manager's office number", () => {
    const manager = new Manager('Bob', '2', 'email', 'office');

    expect(manager.officeNumber()).toEqual(expect.stringContaining(manager.office));
})