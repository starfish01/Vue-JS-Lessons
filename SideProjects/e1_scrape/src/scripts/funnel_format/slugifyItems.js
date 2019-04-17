var slugify = require('slugify')

export function slugFn(data) {

    return slugify(data, {
        replacement: '_',
        lower: true    
    }).replace(/[^\w\-]+/g, '')

}

