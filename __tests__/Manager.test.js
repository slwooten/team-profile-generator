const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('init', () => {
        it('should require a officeNumber', () => {
            const manager = new Manager('John', 3, 'John@gmail.com', 1234);

            expect('officeNumber' in manager).toBe(true);
        });
    });
});