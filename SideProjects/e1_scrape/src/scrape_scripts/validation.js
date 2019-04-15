var cheerio = require('cheerio');

export function validate(scrape){

    //items to be made required
    let requiredItems = [];

    //hideshow array
    let hideShowArray = [];

    var $ = cheerio.load(scrape)

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

    let data = {requiredItems,hideShowArray}

    return data
}