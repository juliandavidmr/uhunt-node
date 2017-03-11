var axios = require('axios');
var uri = "http://uhunt.felix-halim.net/api/p/id/";
var uri_num = "http://uhunt.felix-halim.net/api/p/num/";
var uri_user_submissions = "http://uhunt.felix-halim.net/api/subs-user/";
var uri_list_excercises = "http://uhunt.felix-halim.net/api/p";

/**
 * Get data Excersice by ID
 * @param id_excers ID Excersice
 */
module.exports.byId = function (id_excers) {
  return request(uri + id_excers);
};

/**
 * Get data Excersice by Number
 * @param num_excer Number excersice
 */
module.exports.byNum = function (num_excer) {
  return request(uri_num + num_excer);
};

/**
 * Get data user by ID
 * @param id_user ID User 
 */
module.exports.getUserSubmission = function (id_user) {
  return request(uri_num + id_user);
};

/**
 * Get list excersices
 */
module.exports.list = function () {
  return request(uri_list_excercises);
};

function request(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url)
      .then(function (response) {
        // console.log(response);
        return resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        return reject(error);
      });
  });
}