const { removeBMW, returnObjects } = require('./app');

describe('testing removeBMW()', () => {
	it('should throw an error if a parameter is invalid ', () => {
		expect(() => {
			removeBMW(100);
		}).toThrow('This program only works for text.');
	});
	it('should remove bmw', () => {
		expect(removeBMW('Nobmw')).toBe('No');
        expect(removeBMW('Nobmwbmwbmw')).toBe('No');
        expect(removeBMW('NobmwNobmwbmw')).toBe('NoNo');
        expect(removeBMW('NobmwNobmwNobmw')).toBe('NoNoNo');
		expect(removeBMW('NobmwNobmwNobmwNobmw')).toBe('NoNoNoNo');

	});
});

// Test function return objects