 // settings must be available in settings.js and included via
//   <IncludeURL>jsc://settings.js</IncludeURL>

function flatten(target, opts) {
  opts = opts || {};

  var delimiter = opts.delimiter || '.',
      maxDepth = opts.maxDepth,
      currentDepth = 1,
      output = {};
       
  function step(object, prev) {
    Object.keys(object).forEach(function(key) {
      var value = object[key],
          isarray = opts.safe && Array.isArray(value),
          type = Object.prototype.toString.call(value),
          isobject = (type === "[object Object]" || type === "[object Array]" ),
          newKey = prev ? prev + delimiter + key : key;

      if (!opts.maxDepth) {
        maxDepth = currentDepth + 1;
      }

      if (!isarray && isobject && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth;
        return step(value, newKey);
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output;
}

var flatObj = flatten(settings);

Object.keys(flatObj).forEach(function(key){
  context.setVariable('settings.' + key, flatObj[key]);
});