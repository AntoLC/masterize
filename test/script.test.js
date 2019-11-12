const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesePuff.com',
    'disney.com',
    'dogpictures.com',
    'turlututu.com',
    'dogybag.com',
];
describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello');
    });
    
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com', 'dogybag.com']);
    });
    
    it('work undefined', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('not more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
}); 