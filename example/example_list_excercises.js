var uhunt = require("../lib/uhunt.lib");

// Get list excersices
uhunt.list().then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})