# Randomize Array
JavaScript method taking an array and returning a new array with randomly reordered values.

## Usage
UMD-wrapped for convenience. `require`, `define`, or call globally.

```javascript
var array = [1,2,3];
var newArray = randomizeArray(array);
// returns [2,1,3] or some variation of those three values.
// it’s random.
```

Returns a new array or undefined if the incoming argument is not a valid array.

## Tests
```bash
npm test
```

## Contact
Written by Matthew Smith

- Twitter: [@niftinessafoot](http://www.twitter.com/niftinessafoot)
- Web: [www.niftinessafoot.com](http://www.niftinessafoot.com/)

## License
MIT