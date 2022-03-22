const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const employee = new Employee('Seth', 1, 'slwooten14@gmail.com');
            expect('name' in employee).toBe(true);
            expect('id' in employee).toBe(true);
            expect('email' in employee).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name of the Employee', () => {
            const employee = new Employee('Seth', 1, 'slwooten14@gmail.com');
        
            expect(employee.getName()).toBe('Seth');
        });
    });
    describe('getId', () => {
        it('should return the id of the Employee', () => {
            const employee = new Employee('Seth', 1, 'slwooten14@gmail.com');
        
            expect(employee.getId()).toBe(1);
        });
    });
    describe('getEmail', () => {
        it('should return the email of the Employee', () => {
            const employee = new Employee('Seth', 1, 'slwooten14@gmail.com');
        
            expect(employee.getEmail()).toBe('slwooten14@gmail.com');
        });
    });
})