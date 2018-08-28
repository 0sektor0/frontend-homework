function get(object, propertiesString) {
    if(propertiesString == undefined)
        return undefined;

    let propertiesArray = propertiesString.split('.');

    let result = propertiesArray.some(function(property) {
        if(object == undefined)
            return true;

        object =  isNumeric(property) ? object = object[+property] :
        (object.hasOwnProperty(property)) ? object[property] :
        (property == "") ? object : undefined;

        return false;
    })

    return result ? undefined : object;
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}