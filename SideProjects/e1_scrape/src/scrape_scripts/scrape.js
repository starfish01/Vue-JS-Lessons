var request = require('request');
var cheerio = require('cheerio');

import * as validation from '../scrape_scripts/validation';

var metadata = []
var buttonData = []
var fieldData = []

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
            console.log('2')
            var $ = cheerio.load(html)

            //items to be made required
            let requiredItems = [];

            //hideshow array
            let hideShowArray = [];

            console.log(validation.validate($).data.requiredItems)




            console.log(validation.validate(6))

            $('script').each((i, el) => {

                if ($(el).html().length !== 0) {
                    let scripts = $(el).html()
                    // console.log(scripts)

                    // var position = scripts.search('formgroup_ids')
                    // // console.log(position)

                    //can confirm this returns for singleline, datapicker, select
                    let firstSetOfRequired = scripts.match(new RegExp("formgroup_ids\[[0-9]+\]", "g"))
                    if (firstSetOfRequired !== null) {
                        firstSetOfRequired.forEach((el) => {
                            let item = el.match(RegExp("[0-9]+", "g"))
                            requiredItems.push(item[0])
                        })
                    }

                    let customJS = scripts.match(new RegExp("toggle_fields\\([1-9]+,", "g"))

                    // console.log(customJS)

                    if (customJS !== null) {
                        // console.log(customJS)

                        customJS.forEach((el) => {

                            // let some = String(scripts);

                            let startIndex = scripts.indexOf(el)
                            let searchString = scripts.slice(startIndex)
                            let endIndex = searchString.indexOf(')')

                            let toggle = scripts.slice(startIndex + 14, endIndex + startIndex)

                            toggle = toggle.replace(/'/g, "\"");

                            let firstComma = toggle.indexOf(',')

                            let firstCloseSquare = toggle.indexOf(']')
                            let secondComma = toggle.slice(firstComma, toggle.indexOf(','))

                            if (firstCloseSquare > secondComma) {
                                secondComma = toggle.slice(firstCloseSquare).indexOf(',') + firstCloseSquare
                            }

                            let endvalues = []

                            if (endvalues.indexOf('[') > -1) {
                                //dealing with an array of conditions
                                endvalues = endvalues.slice(secondComma + 1, toggle.length).replace(/\[/g, "").replace(/\]/g, "").trim().split(',')
                            } else {
                                //single
                                endvalues.push(toggle.slice(secondComma + 1, toggle.length).trim().replace(/\"/g, ""))
                            }

                            if (endvalues[0] === '"') {
                                //makes sure its not double quoted
                                endvalues = endvalues.slice(1, endvalues.length - 1)
                            }

                            let toBeTriggered = []

                            if (toggle.slice(firstComma + 1, secondComma).indexOf('[') > -1) {
                                //if an array create an array
                                toBeTriggered = toggle.slice(firstComma + 1, secondComma).trim().replace(/\[/g, "").replace(/\]/g, "").split(",")
                            } else {
                                //single item
                                toBeTriggered.push(toggle.slice(firstComma + 1, secondComma).trim())
                            }

                            let trigger = toggle.slice(0, firstComma)
                            // let toBeTriggered = toggle.slice(firstComma+1,secondComma).trim()
                            let triggerValues = endvalues

                            hideShowArray.push({
                                trigger,
                                toBeTriggered,
                                triggerValues
                            })


                        })
                    }

                }
            })



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
                    let required;

                    let hideShows = [];

                    let values = [];
                    let allowOther;


                    let helpText;
                    //looks like this
                    //<p class="help-block">Use format of <strong>Name, Age, Current School (if applicable)</strong>. New line per sibling.</p>

                    let placeholder;
                    //placeholder looks to be just an attribute
                    //placeholder="If applicable..."

                    let wysiwygContent;

                    //check if field is required
                    // if($(el).find('p').attr('class')){
                    //     console.log($(el).find('p').attr('class'))
                    // }

                    //This was part of the if but seems to have caused some issues
                    //&& $(el).first().attr('name').includes("wysiwyg")

                    if ($(el).first().attr('name') !== undefined) {

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

                                    helpText = $(el).find('p.help-block').text()

                                    placeholder = $(el).children().next().attr('placeholder')

                                } else if ($(el).children().next()[0].name === 'div') {

                                    let classString = $(el).children().next().attr('class')

                                    //radio
                                    if (classString.includes("radio")) {
                                        type = 'radio';

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        width = $(el).parent().attr('class').substring(7, $(el).parent().attr('class').length)

                                        helpText = $(el).find('p.help-block').text()

                                        $(el).children().next().children().each((i, el) => {

                                            //TODO - I think i need to allow other here

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

                                        helpText = $(el).find('p.help-block').text()

                                        width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                        elementID = $(el).first().attr('data-formgroup-id')

                                        $(el).children().next().children().each((i, el) => {

                                            if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...') {

                                                values.push({
                                                    title: $(el).text().trim(),
                                                    id: $(el).children().attr('value')
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

                                } else if ($(el).children().next()[0].name === 'select') {
                                    type = 'select';

                                    helpText = $(el).find('p.help-block').text()

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    //get items
                                    $(el).children().next().children().each((i, el) => {
                                        if ($(el).text().trim().length !== 0 && $(el).text().trim() !== 'Other...' && $(el).text().trim() !== '-- Select --') {
                                            values.push(
                                                {
                                                    title: $(el).text().trim(),
                                                    id: $(el).attr('value')
                                                }
                                            )
                                        }

                                        if ($(el).text().trim() === 'Other...') {
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

                                    elementID = $(el).first().attr('data-formgroup-id')

                                    helpText = $(el).find('p.help-block').text()

                                    width = $(el).parent().first().attr('class').substring(7, $(el).first().attr('class').length)

                                } else if ($(el).children().next()[0].name === 'textarea') {
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

                    //checks if it is conditionally displayed
                    hideShowArray.forEach((el) => {
                        el.toBeTriggered.forEach((data) => {
                            if (elementID == data) {
                                hideShows.push({ triggerValues: el.triggerValues })
                                hideShows.push({ trigger: el.trigger })
                            }
                        })
                    })


                    fieldGroup.fieldGroupfields.push({
                        elementID,
                        positionOfElement,

                        title,
                        type,
                        width,
                        required,

                        values,
                        allowOther,

                        helpText,
                        placeholder,

                        hideShows,

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