const faker = require('faker/locale/en');

function populateObject(object, maxDepth, minDepth, maxPropertiesPerDepth, minPropertiesPerDepth, currentDepth) {
  const properties = Math.floor(Math.random() * (maxPropertiesPerDepth - minPropertiesPerDepth + 1)) + minPropertiesPerDepth;
  minDepth = minDepth > currentDepth ? minDepth : currentDepth;
  const depth = Math.floor(Math.random() * (maxDepth - minDepth + 1)) + minDepth;

  for (let i = 0; i < properties; i++) {
    if (currentDepth === depth) {
      object[faker.random.alphaNumeric()] = faker.random.alphaNumeric();
    } else {
      const property = faker.random.alphaNumeric()
      object[property] = {};
      populateObject(object[property], maxDepth, minDepth, maxPropertiesPerDepth, minPropertiesPerDepth, currentDepth + 1);
    }
  }
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
