# training with unit test tools

## video 78 | skip, only, bail

```javascript
// alt: use --bail (or `npm test -- --bail`) to stop test when some case fail

describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('should happen', () => {});
    });

    // alt: context.only('Case 2', () => {})
    context('Case 2', () => {
      // alt: it.skip('should happen', () => {})
      it('should happen', () => {
        throw new Error('it was just a little mistake');
      });

      it('should happen again', () => {

      });
    });
  });
});
```

## video 79 | mocha hooks

```javascript
describe('Main', () => {
  // it runs once before the test
  before(() => {
    console.log('before');
  });

  // it runs once after the test
  after(() => {
    console.log('after');
  });

  // it runs every time, before every block
  beforeEach(() => {
    console.log('beforeEach');
  });

  // it runs every time, after every block
  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });
});
```

## video 80 | hooks in practice

```javascript
describe('Main', () => {
  let arr;

  // it runs once before the block
  before(() => {
    // ex: open a db connection
  });

  // it runs once after the block
  after(() => {
    // ex: close a db connection
  });

  // it runs every time, before every block
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // it runs every time, after every block
  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // === 4
  });

  it('should have a size of 2 when pop a value to the array', () => {
    arr.pop();
    console.log(arr.length); // === 2
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3); // true
  });
});
```

## video 81 | chai methods

```javascript
const { expect } = require('chai');

describe('Main', () => {
  let arr;

  // it runs once before the block
  before(() => {
    // open a db connection
  });

  // it runs once after the block
  after(() => {
    // close a db connection
  });

  // it runs every time, before every block
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // it runs every time, after every block
  afterEach(() => {

  });

  // smoke test
  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value to the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop from the array', () => (
    expect(arr.pop() === 3).to.be.true
  ));
});
```
