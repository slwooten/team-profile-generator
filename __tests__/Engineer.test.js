const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should require a GitHub username', () => {
            const engineer = new Engineer('Don', 4, 'Don@gmail.com', 'Don123');

            expect('github' in engineer).toBe(true);
        });
    });
    describe('getGithub', () => {
        it('should return the GitHub username of the Engineer', () => {
            const engineer = new Engineer('Don', 4, 'Don@gmail.com', 'Don123');
        
            expect(engineer.getGithub()).toBe('Don123');
        });
    });
});