customerWelcome = require("../customer/customerWelcome")


var redirect = function() {
    // Load page here!
    console.log("Welcome, " + global.user.username + "!");
    

    if(global.type === "manager") {
        // manager launcher
    }
    else if(global.type === "supervisor") {
        // supervisor launcher
    }
    // else, return the customer view
    else {
        customerWelcome();
    }

}

module.exports = redirect;