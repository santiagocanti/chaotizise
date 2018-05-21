const faker = require('faker/locale/en');

function populateObject(object, maxDepth, minDepth, maxPropertiesPerDepth, minPropertiesPerDepth, currentDepth) {
  const properties = randomBetween({ min: minPropertiesPerDepth, max: maxPropertiesPerDepth });
  minDepth = minDepth > currentDepth ? minDepth : currentDepth;
  const depth = randomBetween({ min: minDepth, max: maxDepth });
  const propertyLength = randomBetween({ min: 1, max: 5 });

  for (let i = 0; i < properties; i++) {
    if (currentDepth === depth) {
      const propertyValueLength = randomBetween({ min: 1, max: 5 });
      object[faker.random.alphaNumeric(propertyLength)] = faker.random.alphaNumeric(propertyValueLength);
    } else {
      const property = faker.random.alphaNumeric(propertyLength);
      object[property] = {};
      populateObject(object[property], maxDepth, minDepth, maxPropertiesPerDepth, minPropertiesPerDepth, currentDepth + 1);
    }
  }
}

function randomBetween({min, max}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chaotizise(options = {}) {
  let object = options.object ? options.object : {};
  const maxDepth = options.maxDepth ? options.maxDepth : 3;
  const minDepth = options.minDepth ? options.minDepth : 1;
  const maxPropertiesPerDepth = options.maxPropertiesPerDepth ? options.maxPropertiesPerDepth : 3;
  const minPropertiesPerDepth = options.minPropertiesPerDepth ? options.minPropertiesPerDepth : 1;

  if (typeof object !== 'object') {
    throw new Error(`The object passed must be a valid object, ${typeof object} found instead`);
  }

  const notANumberInOps = typeof maxDepth !== 'number' ||
    typeof minDepth !== 'number' ||
    typeof maxPropertiesPerDepth !== 'number' ||
    typeof minPropertiesPerDepth !== 'number';

  if (notANumberInOps) {
    throw new Error('If maxDepth, minDepth, maxPropertiesPerDepth or minPropertiesPerDepth are in the options they must be integers');
  }

  populateObject(object, maxDepth, minDepth, maxPropertiesPerDepth, minPropertiesPerDepth, 1);
  return object;
}


module.exports = chaotizise;
