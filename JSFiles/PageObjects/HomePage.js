"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    constructor() {
        this.btnCustomerLogin = (0, protractor_1.element)(protractor_1.by.xpath("//button[text()='Customer Login']"));
        this.btnManagerLogin = (0, protractor_1.element)(protractor_1.by.xpath("//button[text()='Bank Manager Login']"));
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxJQUFJO0lBSWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO1FBQzlFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7Q0FDSjtBQVJELG9CQVFDIn0=