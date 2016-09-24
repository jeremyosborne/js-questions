var assert = require('assert')
var cheerio = require('cheerio')
var csvStringify = require('csv-stringify')
var fs = require('fs')
var marked = require('marked')

var fileBasename = 'questions_batch5'

var f = fs.readFileSync(fileBasename + '.md', 'utf8')
var html = marked(f)
var $ = cheerio.load(html)

var questions = (function () {
  // Code blocks are equivalent two questions. Each question gets one code block.
  var code = $('code')
  // Meta is a structured ordered list containing unordered lists.
  var meta = $('ol')
  assert(code.length === meta.length, 'Need as many code blocks as meta blocks.')
  var questions = []
  for (var i = 0; i < code.length; i++) {
    var q = {}
    // Plain text.
    q.question = code.eq(i).text().trim()
    // Array of strings.
    q.answers = meta.eq(i).find('ul').eq(1).find('li').map(function (i, el) {
      return $(el).text()
    }).get()
    // Only certain options. TODO: Check valid.
    q.time = meta.eq(i).find('ul').eq(2).find('li').text()
    // Only certain options. TODO: Check valid.
    q.category = meta.eq(i).find('ul').eq(3).find('li').text()
    // Only certain options. TODO: Check valid.
    q.level = meta.eq(i).find('ul').eq(4).find('li').text()
    // Array of strings.
    q.tags = meta.eq(i).find('ul').eq(5).find('li').map(function (i, el) {
      return $(el).text()
    }).get()
    questions.push(q)
  }
  return questions
})()

// Current file Stats
// console.log(questions)
var stats = questions.reduce(function (stats, q) {
  if (stats[q.level]) {
    stats[q.level] += 1
  } else {
    stats[q.level] = 1
  }
  return stats
}, {})
console.log('** %s file Stats **', fileBasename + '.md')
for (var p in stats) {
  console.log('Level (%s): %s', p, stats[p])
}
console.log('Total questions:', questions.length)

// TODO: Output to CSV.

var records = (function (questions) {
  // Build in headers.
  var records = [['#', 'Question', 'Category', 'Level', 'Tags', 'Time', 'Answer Choices', 'IsAnswer']]
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i]
    // Answers beyond the first need their own records on their own lines with empty other columns.
    // In this structure, first answer is always correct, the rest are not.
    records.push([i, q.question, q.category, q.level, q.tags.join(', '), q.time, q.answers[0], 'Y'])
    for (var j = 1; j < q.answers.length; j++) {
      records.push(['', '', '', '', '', '', q.answers[j], 'N'])
    }
  }
  return records
})(questions)

csvStringify(records, function (err, csv) {
  if (err) {
    console.error('Something happened during csv processing:', err)
  }
  // console.log(csv)
  fs.writeFileSync(fileBasename + '.csv', csv)
})
