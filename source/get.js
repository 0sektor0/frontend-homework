function get(object, propertiesString) 
{
    if(propertiesString == undefined || !object)
        return undefined;

    let propertiesArray = propertiesString.split('.');

    let result = propertiesArray.some(function(property) 
    {
        object = getNestedProperty(object, property)
        return !object;
    })

    return object;
}


function isNumeric(n) 
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function tryConvertToNumeric(n) {
    return isNumeric(n) ? +n : n;
} 


function getNestedProperty(object, property) {
    property = tryConvertToNumeric(property);

    return (!object || (!property && property !== 0)) ? object :
    (object.hasOwnProperty(property)) ? object[property] : undefined;
}