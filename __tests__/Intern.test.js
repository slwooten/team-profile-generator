const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
        it('should require a school', () => {
            const intern = new Intern('Billy', 2, 'billy@gmail.com', 'UNC Charlotte');

            expect('school' in intern).toBe(true);
        });
    });
    describe('getSchool', () => {
        it('should return the school of the Intern', () => {
            const intern = new Intern('Billy', 2, 'billy@gmail.com', 'UNC Charlotte');

            expect(intern.getSchool()).toBe('UNC Charlotte');
        });
    });
});