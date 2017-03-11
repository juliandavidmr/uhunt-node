var uhunt = require("../lib/uhunt.lib");

// Get data submissions from any user 
uhunt.getUserSubmission("339").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})