# Chaotizise
Tool to populate or create an object with random data.

## Install
```
$ npm install chaotizise
```

## Usage
```
const chaotizise = require('chaotizise');

const existingObject = {
    property1: 'asd',
    property2: 'ddd'
}

const options = {
    object: existingObject,
    maxDepth : 2,
    minDepth: 2,
    maxPropertiesPerDepth: 4,
    minPropertiesPerDepth: 4
};

//Add random properties to existing object
chaotizise(options);

//Create new random object with default settings
const newRandomObject = chaotizise();

console.log(JSON.stringify(existingObject, null, 2));
console.log(JSON.stringify(newRandomObject, null, 2));
```

## API
### chaotizise(options = {})

Returns an object with random properties with multiple nested random objects.

#### Options
##### object
Type: `Object`

Defines the object were the new properties will be added. If it's not specified, a new object will be created.

Example:
```js
const existingObject = {
    property1: 'asd',
    property2: 'ddd'
}

const options = {
    object: existingObject
};

chaotizise(options);
```

Output:
```
{
  "property1": "asd",
  "property2": "ddd",
  "f": {
    "u": {
      "p": "q",
      "s": "y"
    },
    "y": {
      "l": "o"
    },
    "p": {
      "e": "8",
      "w": "l"
    }
  }
}
```

##### maxDepth
Type: `Integer`

Defines the maximum amount of nested objects.

Example:
```js
const options = {
    maxDepth: 2
};

chaotizise(options);
```

Output:
```
{
  "q": {
    "g": "c",
    "c": "p",
    "x": "f"
  },
  "c": {
    "6": "7",
    "b": "p",
    "x": "e"
  }
}
```

>The depth will vary randomly between maxDepth and minDepth, if the desired output is a fixed depth set both values to the same number.

##### minDepth
Type: `Integer`

Defines the minimum amount of nested objects.

Example:
```js
const options = {
    minDepth: 2
};

chaotizise(options);
```

Output:
```
{
  "e": {
    "p": "j",
    "b": "4"
  },
  "z": {
    "2": {
      "n": "r",
      "v": "t",
      "d": "j"
    },
    "5": {
      "p": "s",
      "q": "n"
    }
  }
}
```

##### maxPropertiesPerDepth
Type: `Integer`

Defines the maximum amount of properties per level of depth.

Example:
```js
const options = {
    maxPropertiesPerDepth: 5
};

chaotizise(options);
```

Output:
```
{
  "7": {
    "6": "f",
    "a": "3",
    "e": "g"
  }
}
```

>The number of properties will vary randomly between maxPropertiesPerDepth and minPropertiesPerDepth, if the desired output is a fixed number of properties set both values to the same number.

##### minPropertiesPerDepth
Type: `Integer`

Defines the minimum amount of properties per level of depth.


Example:
```js
const options = {
    minPropertiesPerDepth: 2
};

chaotizise(options);
```

Output:
```
{
  "7": {
    "4": "7",
    "w": "a",
    "j": "j"
  },
  "k": {
    "v": "i",
    "b": "z",
    "m": "3"
  },
  "x": {
    "4": "g",
    "y": "8"
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
