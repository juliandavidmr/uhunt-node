# uhunt

Get information of exercises from UVA Judge.

API Public: *http://uhunt.felix-halim.net/api*

## Install
```js
$ npm install uhunt
```

## Use

```js
// Get by id excercise
uhunt.byId("161").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

```js
// Get by number excercise
uhunt.byNum("100").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

```js
// Get data submissions from any user 
uhunt.getUserSubmission("339").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

```js
// Get list excersices
uhunt.list().then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})
```

#### In progress

Author: [@anlijudavid](https://github.com/juliandavidmr/)

**Pull requests accepted**

Licence MIT