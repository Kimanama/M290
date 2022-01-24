// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */

function validateFormData(userObj) {

    // Check required fields
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("firstname", userObj.firstName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", userObj.lastName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("number", userObj.number);
    if (result.isNotValid) { return result; }


    //check length
    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("firstname", userObj.firstName, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname", userObj.lastName, 2, 50);
    if (result.isNotValid) { return result; }


    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }


    //check number syntax
    result = validateLib.checkNumber("number", userObj.number);
    if (result.isNotValid) { return result; }


    //all inputs are valid and isNotValid=false
    return false;
}
module.exports = {
    validateContact: validateFormData
}
