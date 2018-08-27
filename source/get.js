function get(object, property) {
    if(property == undefined || property == null)
        return undefined;

    var properties = property.split('.');

    for(var i = 1; i < properties.length; i++)
        if(object == undefined)
            return undefined;

        else if(isNumeric(properties[i]))
            object = object[+properties[i]];

        else if(object.hasOwnProperty(properties[i]))
            object = object[properties[i]];

        else if(properties[i] == "")
            continue;
            
        else
            return undefined;

    return object;
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}