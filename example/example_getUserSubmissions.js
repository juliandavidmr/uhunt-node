var uhunt = require("../lib/uhunt.lib");

// Get data submissions from any user 
uhunt.getUserSubmission("706667").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})