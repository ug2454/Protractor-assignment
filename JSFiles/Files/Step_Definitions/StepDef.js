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
const assert_1 = __importDefault(require("assert"));
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
(0, cucumber_1.When)('Enter first and second number {string} {string}', { timeout: 60 * 1000 }, function (number1, number2) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, protractor_1.element)(protractor_1.by.model('first')).sendKeys(number1);
        yield protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.model('second')).sendKeys(number2);
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
(0, cucumber_1.Then)('the result should be {string} with {string}', { timeout: 60 * 1000 }, function (result_calc, table_expression) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.className('btn')).click();
        yield protractor_1.browser.sleep(9000);
        let output = (0, protractor_1.element)(protractor_1.by.cssContainingText('.ng-binding', result_calc));
        var expression = (yield (0, protractor_1.element)(protractor_1.by.xpath("(//tr[@class='ng-scope'])[1]/td[2]")).getText()).toString();
        protractor_1.browser.sleep(1000);
        console.log('EXPRESSION' + (yield expression));
        var result_table = (yield (0, protractor_1.element)(protractor_1.by.xpath("(//tr[@class='ng-scope'])[1]/td[3]")).getText()).toString();
        if ((yield output.getText()) == result_calc && table_expression == expression && (yield output.getText()) == result_table) {
            (0, assert_1.default)(true);
            console.log('matching' + result_calc);
            console.log('matching' + table_expression + '' + expression);
        }
        else {
            (0, assert_1.default)(false);
        }
    });
});
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZpbGVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFtRDtBQUNuRCwyQ0FBaUQ7QUFFakQsb0RBQTRCO0FBRTVCLElBQUEsZ0JBQUssRUFBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBZ0IsR0FBVTs7UUFDakYsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUN4QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsaURBQWlELEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLFVBQWdCLE9BQWMsRUFBRSxPQUFjOztRQUMxSCxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWxELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcs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