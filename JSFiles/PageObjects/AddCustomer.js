"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addcustomer = void 0;
const protractor_1 = require("protractor");
class Addcustomer {
    constructor() {
        this.addcustomerLink = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(text(),'Add Customer')]"));
        this.firstName = (0, protractor_1.element)(protractor_1.by.model("fName"));
        this.lastName = (0, protractor_1.element)(protractor_1.by.model("lName"));
        this.postCode = (0, protractor_1.element)(protractor_1.by.model("postCd"));
        this.AddcustomerButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[text()='Add Customer']"));
    }
}
exports.Addcustomer = Addcustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9BZGRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBT3BCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUVsRixDQUFDO0NBQ0o7QUFmRCxrQ0FlQyJ9