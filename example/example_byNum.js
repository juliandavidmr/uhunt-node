var uhunt = require("../lib/uhunt.lib");

// Get by number excercise
uhunt.byNum("100").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
});