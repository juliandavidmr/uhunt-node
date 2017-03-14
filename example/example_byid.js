var uhunt = require("../lib/uhunt.lib");

// Get by id excercise
uhunt.byId(161).then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})