import { Given, When, Then, Before} from "cucumber"
import { browser, element, by } from "protractor"

import assert from "assert";

Given('I launch the url {string}', { timeout: 60 * 1000 }, async function (url) {
    await browser.get(url).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(5000)
    })
})

When('Enter first and second number {int} {int}', { timeout: 60 * 1000 }, async function (number1, number2) {
    element(by.model('first')).sendKeys(number1);
    await browser.sleep(2000);
    element(by.model('second')).sendKeys(number2);
 
});

When('select the {string}', { timeout: 60 * 1000 }, async function (operator) {
    await browser.sleep(2000);
    element(by.model("operator")).click()
    await browser.sleep(2000);
    var allOptions = element.all(by.options('value for (key, value) in operators'));
    
    if (operator == "ADDITION") {
        console.log('ADDITION'+allOptions.get(0).getText())
        allOptions.get(0).click();
    }
    else if (operator == "DIVISION") {
        allOptions.get(1).click();
    }
    else if (operator == "MODULO") {
        allOptions.get(2).click();
    }
    else if (operator == "MULTIPLICATION") {
        allOptions.get(3).click();
    }
    else if (operator == "SUBTRACTION") {
        allOptions.get(4).click();
    }



    
});



Then('the result should be {string}', { timeout: 60 * 1000 }, async function (result_calc) {
    console.log('INSIDE THEN1');
    await browser.sleep(2000);
    console.log('INSIDE THEN2');
    element(by.className('btn')).click();
    await browser.sleep(9000);
    console.log('INSIDE THEN3');
    // let output = element(by.xpath('(//h2[@class=\'ng-binding\'])[1]'));
    let output = element(by.cssContainingText('.ng-binding', result_calc));
    console.log('INSIDE THEN4');
    if (await output.getText() == result_calc) {
        assert(true)
        console.log('matching'+result_calc)
    }
    else {
        assert(false)
    }
   
});


Before(async function () {
    await browser.manage().deleteAllCookies();
})

