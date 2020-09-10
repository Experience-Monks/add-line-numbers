module.exports = addLineNumbers
function addLineNumbers (string, start, delim) {
  start = typeof start === 'number' ? start : 1
  delim = delim || ': '

  var lines = string.split(/\r?\n/)
  var totalDigits = String(lines.length + start - 1).length
  return lines.map(function (line, i) {
    var c = String(i + start)
    var digits = c.length
    var prefix = c.padStart(totalDigits - digits + 1, ' ')
    return prefix + delim + line
  }).join('\n')
}
