var request = require('request');
var cheerio = require('cheerio');



export var ozSiteData = request('https://www.ozbargain.com.au/', function(error, response,html){
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
            var taggsArray = []
            $(this).siblings('div.links').children().find('li').each(function() {
               taggsArray.push($(this).text().trim()) 
            });
            var comments = taggsArray[0]
            var tag = taggsArray[1]
            var expirydate = taggsArray[2]
            if(expirydate === 'Freebie'){
                expirydate = taggsArray[3]
            }
            if(expirydate == undefined){
                expirydate = 0
            }
            
            var infoTAG = $(this).children('span').text()
            if(deal){
                var metadata ={
                    title,
                    description,
                    infoTAG,
                    link,
                    comments,
                    tag,
                    expirydate
                }
            }
            return metadata
        })
    }
})



