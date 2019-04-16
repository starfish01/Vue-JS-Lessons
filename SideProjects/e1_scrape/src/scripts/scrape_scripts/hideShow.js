export function hideShowBuilder(elementID,hideShowArray){
    let hideShows = [];

    hideShowArray.forEach((el) => {
        el.toBeTriggered.forEach((data) => {
            if (elementID == data) {
                hideShows.push({ triggerValues: el.triggerValues })
                hideShows.push({ trigger: el.trigger })
            }
        })
    })

    if(elementID === '32610'){
        console.log(hideShows)
        console.log('yes')
        hideShowArray.forEach((el) => {
            el.toBeTriggered.forEach((data) => {
                console.log(data)
            })
        })

    }

    return hideShows;
}