

var request = require('request');
var cheerio = require('cheerio');

var metadata = []
var buttonData = []


function scrapFn(website) {

    //to bypass security we use the proxy below
    //https://cors-anywhere.herokuapp.com/
    console.log(website)
    // return new Promise(function(res, rej){
    return request('https://cors-anywhere.herokuapp.com/' + website, function (error, response, html) {
        console.log('1')
        if (!error && response.statusCode == 200) {
            console.log('2')
            var $ = cheerio.load(html)

            // metadata.push(html)

            $('[data-formgroup-id]').each((i, el) => {

                let title;
                let type;
                let width;
                let elementID;

                // console.log($(el).first().attr('name'))

                if ($(el).first().attr('name') !== undefined && $(el).first().attr('name').includes("wysiwyg")) {

                    title = "wysiwyg"
                    type = "wysiwyg"
                    width = $(el).first().attr('class').substring(7, $(el).first().attr('class').length)
                    elementID = $(el).first().attr('data-formgroup-id')
                   
                } else {

                    title = $(el).find('label').first().text().replace(/(\r\n|\n|\r)/gm, "").trim()

                    if ($(el).children().html() !== '') {
                        if ($(el).children().next()[0].name !== undefined) {

                            if ($(el).children().next()[0].name === 'input') {
                                type = 'input';
                            } else if ($(el).children().next()[0].name === 'div') {
                                type = 'div';
                            } else if ($(el).children().next()[0].name === 'select') {
                                type = 'select';
                            } else if ($(el).children().next()[0].name === 'br') {
                                type = 'file';
                            }
                        }
                    }

                }


                buttonData.push({
                    title: title,
                    type: type,
                    width: width,
                    elementID:elementID
                })


                metadata.push($(el).find('label').first().text().replace(/(\r\n|\n|\r)/gm, "").trim())
            })

            // $('h2.title').each(function (i, element) {
            //     //checks if its a deal
            //     var deal = $(this).parent().parent().hasClass('node-ozbdeal');
            //     //grabs title
            //     var title = $(this).data('title');
            //     //grabs description
            //     var description = $(this).siblings('div.content').children('p').text()
            //     //grabs link
            //     var link = $(this).children('a').attr('href')
            //     var taggsArray = []
            //     $(this).siblings('div.links').children().find('li').each(function () {
            //         taggsArray.push($(this).text().trim())
            //     });
            //     var comments = taggsArray[0]
            //     var tag = taggsArray[1]
            //     var expirydate = taggsArray[2]
            //     if (expirydate === 'Freebie') {
            //         expirydate = taggsArray[3]
            //     }
            //     if (expirydate == undefined) {
            //         expirydate = 0
            //     }

            //     var infoTAG = $(this).children('span').text()

            //     if (deal) {
            //         var nextObj = {
            //             title,
            //             description,
            //             infoTAG,
            //             link,
            //             comments,
            //             tag,
            //             expirydate
            //         }
            //         metadata.push(nextObj)
            //     }
            // })

        }
    })


}



function data(val) { return val }


export { data, metadata, buttonData, scrapFn };

