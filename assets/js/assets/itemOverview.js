var itemOverview = function(item) {
    console.log("----------------------------------------");
    console.log("\n\n");
    console.log("Item: " + item.product_name);
    if("description" in item) {
        console.log(item.description);
    }
    console.log("");
    console.log("Price: " + item.price);
    console.log("Quantity: " + item.stock_quantity);
}

// if(____ in item)

module.exports = itemOverview