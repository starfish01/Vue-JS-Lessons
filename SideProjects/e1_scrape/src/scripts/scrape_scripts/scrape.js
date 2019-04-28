var request = require('request');
var cheerio = require('cheerio');

import * as validation from '../scrape_scripts/validation';
import {widthCalculate} from './widthFix';
import {hideShowBuilder} from './hideShow';
import {funnelMapper} from '../funnel_format/funnelMapper';

var metadata = []
var buttonData = []
var fieldData = []
var pages = []

function scrapFn(website) {

    //to bypass security we use the proxy below
    //https://cors-anywhere.herokuapp.com/

    return request.post({
        url: 'https://cors-anywhere.herokuapp.com/' + website,
        form: { 'foo': 'bar' },
        headers: {
            'User-Agent': 'Super Cool Browser' // optional headers
        }
    }, function (error, response, html) {
        console.log('1')
        if (!error && response.statusCode == 200) {
            console.log(website)
            console.log('2')
            var $ = cheerio.load(html)

            let validations = validation.validate(html)

            //items to be made required
            let requiredItems = validations.requiredItems;

            //hideshow array
            let hideShowArray = validations.hideShowArray;       

            $('div.page-header').first().text();

            let wholeTitle = $('div.page-header').first().text().trim()

            let pageNumber = wholeTitle.match(new RegExp("[0-9]+"))[0]

            let title = wholeTitle.slice(wholeTitle.match(new RegExp("[0-9]+")).length+1,wholeTitle.length).trim()

            let page = {
                pageNumber,
                title,
                content : []
            }


            $('fieldset').each((i, el) => {

                let id = $(el).attr('id').substring(9, $(el).attr('id').length)
                let title = $(el).children().first().text().trim().substring(4, $(el).text().trim().length)
                let positionOfGroup = pageNumber + "" + (i + 1);

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
                    let required;

                    let hideShows = [];

                    let options = [];
                    let allowOther;


                    let helpText;

                    let placeholder;

                    let wysiwygContent;


                    if ($(el).first().attr('name') !== undefined) {

                        title = "wysiwyg"
                        wysiwygContent = $(el).first().html().trim();
                        type = "wysiwyg"
                        width = $(el).first().attr('class').substring(7, $(el).first().attr('class').length)
                        elementID = $(el).first().attr('data-formgroup-id')

                    } else {

                                        
                        title = $(el).find('label').first().text().replace(/(\r\n|\n|\r)/gm, "").trim()


                        if(title.length === 0 ){
                            title = 'hidden_title'
                        }

                    

                        if ($(el).children().html() !== '') {


                            let typeOfField;
                            // NEED TO WORK HERE TO RESOLVE THE ISSUE

                            //hidden title fix
                            if($(el).children().next()[0] === undefined){
                                //has no title
                                typeOfField = $(el).children()[0].name

                            } else {
                                // does have title
                                typeOfField = $(el).children().next()[0].name
                                
                            }



                            if (typeOfField !== undefined) {
                                if (typeOfField === 'input') {

                                    type = 'singleLine';

                                    width = $(el).parent().attr('class').substring(7, $(el).parent().attr('class').length)

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    helpText = $(el).find('p.help-block').text()

                                    placeholder = $(el).children().next().attr('placeholder')

                                } else if (typeOfField === 'div') {

                                    let classString = $(el).children().next().attr('class')

                                    //radio
                                    if (classString.includes("radio")) {
                                        type = 'radio';

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        width = $(el).parent().attr('class').substring(7, $(el).parent().attr('class').length)

                                        helpText = $(el).find('p.help-block').text()

                                        $(el).children().next().children().each((i, el) => {

                                            //TODO - I think i need to allow other here

                                            options.push(
                                                {
                                                    title: $(el).text().trim(),
                                                    value: $(el).children().attr('value')
                                                }
                                            )
                                        })

                                    }

                                    //checkbox
                                    if (classString.includes("checkbox")) {
                                        type = 'checkbox';

                                        helpText = $(el).find('p.help-block').text()

                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        $(el).children().next().children().each((i, el) => {

                                            if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...') {

                                                options.push({
                                                    title: $(el).text().trim(),
                                                    value: $(el).children().attr('value')
                                                })
                                            }

                                            if ($(el).text().trim() === 'Other...') {
                                                allowOther = true;
                                            }

                                        })
                                    }

                                    //datepicker
                                    if (classString.includes("datepicker")) {
                                        type = 'datepicker';

                                        helpText = $(el).find('p.help-block').text()

                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        placeholder = $(el).find('input').attr('placeholder')

                                    }

                                } else if (typeOfField === 'select') {
                                    type = 'select';

                                    helpText = $(el).find('p.help-block').text()

                                    // console.log(title)

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    //get items
                                    $(el).children().next().children().each((i, el) => {
                                        if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...' && $(el).text().trim() !== '-- Select --') {
                                            options.push(
                                                {
                                                    title: $(el).text().trim(),
                                                    value: $(el).attr('value')
                                                }
                                            )
                                        }

                                        if ($(el).text().trim() === 'Other...') {
                                            allowOther = true;
                                        }
                                    })

                                    //if its an ajax select 
                                    if (options.length == 0) {

                                        let newURL = website.replace(/^https?\:\/\//i, "");
                                        let fullstopPosition = newURL.indexOf(".");
                                        let subdomain = newURL.substring(0, fullstopPosition)

                                        let callURL = subdomain + '.digistormenrol.com.au/ajax_app/formgroup_options/' + elementID

                                        request('https://cors-anywhere.herokuapp.com/' + callURL, function (error, response, html) {

                                            if (!error && response.statusCode == 200) {
                                                options.push(JSON.parse(html).results)
                                            }
                                        }
                                        )
                                    }

                                } else if (typeOfField === 'br') {
                                    type = 'file';

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    helpText = $(el).find('p.help-block').text()

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                } else if (typeOfField === 'textarea') {
                                    type = 'textarea';

                                    helpText = $(el).find('p.help-block').text()

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    placeholder = $(el).children().next().attr('placeholder')

                                }
                            }
                        }

                    }

                    //checks if element is required
                    if (requiredItems.indexOf(elementID) > -1) {
                        required = true
                    }


                    //  manages hide and shows
                    // it may be better to place in a group and then show and hide
                    hideShows = hideShowBuilder(elementID,hideShowArray)


                    //e2 only accepts widths of 3, 4, 6 and, 12
                    width = widthCalculate(width)

                    fieldGroup.fieldGroupfields.push({
                        elementID,
                        positionOfElement,

                        title,
                        type,
                        width,
                        required,

                        options,
                        allowOther,

                        helpText,
                        placeholder,

                        hideShows,

                        wysiwygContent
                    })

                })

                fieldData.push(fieldGroup)

            })

            page.content = fieldData

            pages.push(page)

        }

    })

}

function data(val) { return val }

export { data, metadata, buttonData, scrapFn, fieldData, pages };