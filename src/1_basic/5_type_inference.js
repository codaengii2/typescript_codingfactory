"use strict";
/**
 * Type inference
 *
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;
booleanType = false;
// booleanType = 'false';
const constStringType = 'const string';
const constBooleanType = true;
let yuJin = {
    name: '안유진',
    age: 2003
};
let yuJin2 = {
    name: '안유진',
    age: 2003
};
yuJin2.name = '코드팩토리';
console.log(yuJin2);
