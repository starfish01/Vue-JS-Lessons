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
                    
                    let workCustomJS =[];
                    if (customJS !== null) {
                        customJS.forEach((el)=>{

                            console.log(scripts.indexOf(el))

                           

                            
                            // console.log(scriptText.search(snip))

                            // console.log(scripts.search(el));

                            //active
                            let activeID = el.slice(14,el.length).slice(0, -1);
                            
                            //effected array

                            //array id

                            //condition single

                            //condition array

                            //build object and push

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
                                            if ($(el).text().trim() !== 'Other...') {
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


                    if (requiredItems.indexOf(elementID) > -1) {
                        required = true
                    }

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

