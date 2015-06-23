var addLineNumbers = require('./')
var test = require('tape')

test('adds line numbers to a source string', function (t) {
  t.equal(addLineNumbers([
    'one',
    'is second'
  ].join('\r\n')), '1: one\n2: is second', 'return carriage')

  t.equal(addLineNumbers([
    'one',
    'is second'
  ].join('\n'), 0), '0: one\n1: is second', 'start offset')

  t.equal(addLineNumbers([
    'one',
    'is second'
  ].join('\n'), 0, '-'), '0-one\n1-is second', 'delim')

  t.equal(addLineNumbers([
    'one',
    'is second'
  ].join('\n'), 9, '-'), ' 9-one\n10-is second', 'padding')
  t.end()
})
