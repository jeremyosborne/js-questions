var assert = require('assert')
var cheerio = require('cheerio')
var fs = require('fs')
var marked = require('marked')

var f = fs.readFileSync('questions.md', 'utf8')
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

console.log(questions)

// TODO: Output to CSV.
