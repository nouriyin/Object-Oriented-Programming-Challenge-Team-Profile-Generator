const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Intialization', () => {
        it("should create an employee object ", () => {

            const employee = ('name', 123, 'employee@email.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe('addName', () => {
        it('should get the employee name', () => {
            const Employee = new Employee('name', 123, 'employee@gmail.com');
            expect(employee.addName()).equal(expect.any(String));
        });
    });

    describe('addId', () => {
        it('should get the employee id', () => {
            const Employee = new Employee('name', 123, 'employee@gmail.com');
            expect(employee.addId()).equal(expect.any(Number));
        });
    });

    describe('addEmail', () => {
        it('should get the employee email', () => {
            const Employee = new Employee('name', 123, 'employee@gmail.com');
            expect(employee.addEmail()).equal(expect.any(String));
        });
    });