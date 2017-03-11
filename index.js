var uhunt = require("./lib/uhunt.lib");

uhunt.byId("161").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})