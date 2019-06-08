// Tests the functionality of customer, skipping through the login screen. 

itemList = require("./itemList")

global.user = {
    id: 0,
    name: "TestCustomer",
    type: "customer"
}

itemList();