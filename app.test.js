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
        expect(removeBMW('No')).toBe('No');
	});
});

describe('Testing return object function', () => {
    it('Print out name of object and ID', () => {
        expect (returnObjects(['world'])).toEqual([{name:'world', id:1}]);
    } )
})

describe('Testing return object function with multiple names', () => {
    it('Print out name of object and ID', () => {
		expect (returnObjects(['world','bmw','test'])).toEqual([{name:'world',id:1},{name:'bmw', id:2},{name:'test', id:3}]);
    } )
})

// Test function return objects