

var request = require('request');
var cheerio = require('cheerio');

var metadata=[]


function scrapFn(){

//to bypass security we use the proxy below
//https://cors-anywhere.herokuapp.com/

request('https://cors-anywhere.herokuapp.com/https://www.ozbargain.com.au/', function(error, response,html){
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
                var nextObj = {
                    title,
                    description,
                    infoTAG,
                    link,
                    comments,
                    tag,
                    expirydate
                }
                metadata.push(nextObj)
            }
        }
        
        )
    }
})

}



function data(val){ return val }


export { data,metadata,scrapFn };

// export default metadata