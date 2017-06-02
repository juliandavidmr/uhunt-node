# uhunt

[![Greenkeeper badge](https://badges.greenkeeper.io/juliandavidmr/uhunt-node.svg)](https://greenkeeper.io/)

Get information of exercises from UVA Judge and uHunt.

API Public: *http://uhunt.felix-halim.net/api*

## Install
```js
$ npm install uhunt --save
```

## Use

### Specific problem
```js
// Get by id excercise
uhunt.byId(161).then((data) => {
    console.log(data);
/* =>
{ pid: 161,
  num: 225,
  title: 'Golygons',
  ce: 98,
  re: 164,
  tle: 297,
  mle: 1,
  wa: 1077,
  ac: 618,
  rtl: 3000,
  ... }
*/
}, error => {
    console.log(error);
})
```

```js
// Get by number excercise
uhunt.byNum(100).then((data) => {
    console.log(data);
/* =>
{ pid: 36,
  num: 100,
  title: 'The 3n + 1 problem',  
  ce: 113277,
  re: 68349,
  ole: 323,
  tle: 59086,
  mle: 5209,
  wa: 275293,
  pe: 5049,
  ac: 195269,
  rtl: 3000,
  ... }
*/
}, error => {
    console.log(error);
})
```

### User submissions
```js
// Get data submissions from any user 
uhunt.getUserSubmission(339).then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

### Problem List
Returns the list of problems at UVa in array format.
```js
// Get list excersices
uhunt.list().then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

### Submissions to Specific Problems

To view submissions to specific problems on a given submission date range. Note that the submissions are returned in no particular order.
```js
uhunt.listSubmSpecificProblem([1342, 2702, 1700], new Date(2004, 12, 15), Date.now()).then((data) => {
    console.log(data);
/*
[{  sid: 3308738,
    uid: 1137,
    pid: 1342,
    ver: 50,
    lan: 3,
    run: 10096,
    mem: 0,
    rank: -1,
    sbt: 1108576139,
    name: 'Hubert Hwang',
    uname: 'antimatter' },
  ...
]
*/
}, error => {
    console.log("ERROR", error);
})
```

### _In progress_

Author: [@anlijudavid](https://github.com/juliandavidmr/)

**Pull requests accepted**

Licence MIT