"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// import chai from "chai";
// import { Home } from "../../PageObjects/HomePage";
// import { Addcustomer } from "../../PageObjects/AddCustomer";
const assert_1 = __importDefault(require("assert"));
// var expect = chai.expect;
// let objHome = new Home();
// let objAddCustomer = new Addcustomer();
(0, cucumber_1.Given)('I launch the url {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(5000);
            });
        });
    });
});
(0, cucumber_1.When)('Enter first and second number {int} {int}', { timeout: 60 * 1000 }, function (number1, number2) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, protractor_1.element)(protractor_1.by.model('first')).sendKeys(number1);
        yield protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.model('second')).sendKeys(number2);
        // await objHome.btnManagerLogin.click();
        // //await browser.sleep(5000)
    });
});
(0, cucumber_1.When)('select the {string}', { timeout: 60 * 1000 }, function (operator) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.model("operator")).click();
        yield protractor_1.browser.sleep(2000);
        var allOptions = protractor_1.element.all(protractor_1.by.options('value for (key, value) in operators'));
        if (operator == "ADDITION") {
            console.log('ADDITION' + allOptions.get(0).getText());
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
});
// When('I give the customer details {string}, {string},{string}', { timeout: 60 * 1000 }, async function (fname, lname, postcode) {
//     await objAddCustomer.firstName.sendKeys(fname);
//     await objAddCustomer.lastName.sendKeys(lname);
//     await objAddCustomer.postCode.sendKeys(postcode);
//     await browser.sleep(5000)
// });
// When('I click on Add customer button', { timeout: 60 * 1000 }, async function () {
//     await objAddCustomer.AddcustomerButton.click();
//     await browser.sleep(5000)
// });
(0, cucumber_1.Then)('the result should be {string}', { timeout: 60 * 1000 }, function (result_calc) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('INSIDE THEN1');
        yield protractor_1.browser.sleep(2000);
        console.log('INSIDE THEN2');
        (0, protractor_1.element)(protractor_1.by.className('btn')).click();
        yield protractor_1.browser.sleep(9000);
        console.log('INSIDE THEN3');
        // let output = element(by.xpath('(//h2[@class=\'ng-binding\'])[1]'));
        let output = (0, protractor_1.element)(protractor_1.by.cssContainingText('.ng-binding', result_calc));
        console.log('INSIDE THEN4');
        if ((yield output.getText()) == result_calc) {
            (0, assert_1.default)(true);
            console.log('matching' + result_calc);
        }
        else {
            (0, assert_1.default)(false);
        }
        // try {
        //     await browser.switchTo().alert().getText().then(function (popupmessage) {
        //         console.log(popupmessage)
        //         browser.switchTo().alert().accept();
        //         expect(popupmessage).to.include('Customer added successfully with customer id')
        //     })
        // } catch (error) {
        //     console.log("Exception in Alert: " + error);
        //     expect(true).to.equal(false);
        // }
    });
});
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
// After(async function (scenario) {
//     if (scenario.result.status === Status.FAILED) {
//         const screenshot = await browser.takeScreenshot();
//         this.attach(screenshot, "image/png")
//     }
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFtRDtBQUNuRCwyQ0FBaUQ7QUFDakQsMkJBQTJCO0FBQzNCLHFEQUFxRDtBQUNyRCwrREFBK0Q7QUFDL0Qsb0RBQTRCO0FBQzVCLDRCQUE0QjtBQUU1Qiw0QkFBNEI7QUFDNUIsMENBQTBDO0FBQzFDLElBQUEsZ0JBQUssRUFBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFDMUUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUN4QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsMkNBQTJDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLFVBQWdCLE9BQU8sRUFBRSxPQUFPOztRQUN0RyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FB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