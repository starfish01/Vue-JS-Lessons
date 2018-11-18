var request = require('request');
var cheerio = require('cheerio');

// request('https://news.ycombinator.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

// request('https://news.ycombinator.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     $('span.comhead').each(function(i, element){
//       var a = $(this).prev();
//       console.log(a.text());
//     });
//   }
// });


//for ozbargin

request('https://www.ozbargain.com.au/', function(error, response,html){
    if(!error && response.statusCode == 200){
        var $ = cheerio.load(html)
        $('h2.title').each(function(i,element){
            //checks if its a deal
            var deal = $(this).parent().parent().hasClass('node-ozbdeal');
            //grabs title
            var title = $(this).data('title');
            //grabs description
            var description = $(this).siblings('div.content').children('p').text()
            //grabs link
            var link = $(this).children('a').attr('href')
            //grab expiry commentCount
            var comments = $(this).siblings('div.links').children().children().clone().children().remove().end().text().trim()
            //grab expirydate
            var expirydate = $(this).siblings('div.links').children().children().children().clone().children().remove().end().text().trim()

            //grab tags
            var tags =  $(this).siblings('div.links').children().html()
            // .clone().children().remove().end().text().trim()

            //probably could do something more interesting with this because
            //it also grabs in 7 days and out of stock and expired
            var infoTAG = $(this).children('span').text()
            // console.log(expired)
            //check if its a deal and not anything else
            if(deal && !infoTAG ){
                console.log('---------------')
                console.log(title)
                console.log(description)
                console.log(link)
                console.log(comments)
                console.log(expirydate)
                console.log(tags)
            }
        })
        
    }
})