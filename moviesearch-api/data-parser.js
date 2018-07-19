const cheerio = require('cheerio');

function parser(html) {
  const $ = cheerio.load(html);
  const $resultSection = $('.article .findSection').first();
  const $movieList = $resultSection.find('.findResult .result_text').toArray();
  return $movieList.map(elem =>
    $(elem)
      .contents()
      .not($(elem).children('small'))
      .text()
      .trim()
  );
}

module.exports = parser;
