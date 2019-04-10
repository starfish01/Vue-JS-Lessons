var request = require('request');
var cheerio = require('cheerio');

var metadata = []
var buttonData = []
var fieldData = []

function scrapFn(website) {

    //to bypass security we use the proxy below
    //https://cors-anywhere.herokuapp.com/
    // console.log(website)
    // return new Promise(function(res, rej){
    return request('https://cors-anywhere.herokuapp.com/' + website, function (error, response, html) {
        console.log('1')
        if (!error && response.statusCode == 200) {
            console.log('2')
            var $ = cheerio.load(html)

            $('fieldset').each((i, el) => {

                let id = $(el).attr('id').substring(9, $(el).attr('id').length)
                let title = $(el).children().first().text().trim().substring(4, $(el).text().trim().length)
                let positionOfGroup = (i + 1) * 10;

                let fieldGroup = {
                    id,
                    positionOfGroup,
                    title,
                    fieldGroupfields: []
                }


                $(el).children().find('[data-formgroup-id]').each((i, el) => {

                    let elementID;
                    let positionOfElement = (i + 1) * 10;

                    let title;
                    let type;
                    let width;

                    let values = [];
                    let allowOther;


                    let helpText;
                    //looks like this
                    //<p class="help-block">Use format of <strong>Name, Age, Current School (if applicable)</strong>. New line per sibling.</p>

                    let placeholder;
                    //placeholder looks to be just an attribute
                    //placeholder="If applicable..."


                    let wysiwygContent;

                    if ($(el).first().attr('name') !== undefined && $(el).first().attr('name').includes("wysiwyg")) {

                        title = "wysiwyg"
                        wysiwygContent = $(el).first().html().trim();
                        type = "wysiwyg"
                        width = $(el).first().attr('class').substring(7, $(el).first().attr('class').length)
                        elementID = $(el).first().attr('data-formgroup-id')

                    } else {

                        title = $(el).find('label').first().text().replace(/(\r\n|\n|\r)/gm, "").trim()

                        if ($(el).children().html() !== '') {
                            if ($(el).children().next()[0].name !== undefined) {
                                if ($(el).children().next()[0].name === 'input') {

                                    type = 'singleLine';
                                    width = $(el).parent().attr('class').substring(7, $(el).parent().attr('class').length)
                                    elementID = $(el).first().attr('data-formgroup-id')

                                } else if ($(el).children().next()[0].name === 'div') {

                                    let classString = $(el).children().next().attr('class')
                                    //console.log($(el).children().next().attr('class'))

                                    //radio
                                    if (classString.includes("radio")) {
                                        type = 'radio';
                                        $(el).children().next().children().each((i, el) => {
                                            values.push(
                                                {
                                                    title: $(el).text().trim(),
                                                    id: $(el).children().attr('value')
                                                }
                                            )
                                        })
                                    }

                                    //checkbox
                                    if (classString.includes("checkbox")) {
                                        type = 'checkbox';

                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        $(el).children().next().children().each((i, el) => {

                                            if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...') {

                                                values.push({
                                                    title: $(el).text().trim(),
                                                    id: $(el).children().attr('value')
                                                })
                                            }
                                            if ($(el).text().trim() !== 'Other...') {
                                                allowOther = true;
                                            }
                                        })
                                    }

                                    //datepicker
                                    if (classString.includes("datepicker")) {
                                        type = 'datepicker';

                                        //need to capture width
                                        //console.log($(el).parent().first().attr('class'))
                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)




                                        elementID = $(el).first().attr('data-formgroup-id')

                                    }

                                } else if ($(el).children().next()[0].name === 'select') {
                                    type = 'select';

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)


                                    elementID = $(el).first().attr('data-formgroup-id')

                                    $(el).children().next().children().each((i, el) => {
                                        if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...' && $(el).text().trim() !== '-- Select --') {
                                            values.push(
                                                {
                                                    title: $(el).text().trim(),
                                                    id: $(el).attr('value')
                                                }
                                            )
                                        }


                                        if ($(el).text().trim() !== 'Other...') {
                                            allowOther = true;
                                        }
                                    })

                                    //if its an ajax select 
                                    if (values.length == 0) {

                                        let newURL = website.replace(/^https?\:\/\//i, "");
                                        let fullstopPosition = newURL.indexOf(".");
                                        let subdomain = newURL.substring(0, fullstopPosition)

                                        let callURL = subdomain + '.digistormenrol.com.au/ajax_app/formgroup_options/' + elementID

                                        request('https://cors-anywhere.herokuapp.com/' + callURL, function (error, response, html) {

                                            if (!error && response.statusCode == 200) {
                                                values.push(JSON.parse(html).results)
                                            }
                                        }
                                        )
                                    }

                                } else if ($(el).children().next()[0].name === 'br') {
                                    type = 'file';
                                    //need to capture width
                                        // console.log($(el).parent().first().attr('class'))
                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                }
                            }
                        }

                    }

                    fieldGroup.fieldGroupfields.push({
                        elementID,
                        positionOfElement,

                        title,
                        type,
                        width,

                        values,
                        allowOther,

                        wysiwygContent
                    })

                })


                fieldData.push(fieldGroup)

            })


        }
    })


}



function data(val) { return val }


export { data, metadata, buttonData, scrapFn, fieldData };

