function get(object, propertiesString) 
{
    if(propertiesString == undefined || !object)
        return undefined;

    let propertiesArray = propertiesString.split('.');

    propertiesArray.some(function(property) 
    {
        property = isNumeric(property) ? +property : property;

        if(object && !(!property && property !== 0))
            object = object[property];

        return !object;
    })

    return object;
}


function isNumeric(n) 
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}