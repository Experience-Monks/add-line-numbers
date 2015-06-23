var addLineNumbers = require('./')
var stdin = require('get-stdin')

stdin(function (body) {
  var src = addLineNumbers(body.toString())
  process.stdout.write(src + '\n')
})
