var uhunt = require("../lib/uhunt.lib");

// Get by id excercise
uhunt.listSubmSpecificProblem([1342, 2702, 1700], new Date(2004, 12, 15), Date.now()).then((data) => {
    console.log(data);
}, error => {
    console.log("ERROR", error);
})