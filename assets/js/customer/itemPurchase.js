quantityUpdate = require("../sqlUpdate/quantityUpdate");
quantityRecord = require("../sqlUpdate/quantityRecord");

itemPurchase = function(item, quantity) {
    console.log("Item purchased!")

    // function to update quantity
    quantityUpdate(item, quantity);

};

module.exports = itemPurchase;