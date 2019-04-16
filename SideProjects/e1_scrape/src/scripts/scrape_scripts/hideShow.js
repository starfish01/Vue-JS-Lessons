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

    return hideShows;
}