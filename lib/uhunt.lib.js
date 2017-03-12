var axios = require('axios');
var moment = require('moment');
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
  return new Promise((resolve, reject) => {
    request(uri_user_submissions + id_user).then(result => {
      var data = {
        name: result.name,
        uname: result.uname,
        subs: []
      }
      result.subs.map((item, index) => {
        data.subs.push({
          reference: item[0],
          problem: item[1],
          result: item[2] == 30 ? 
            'Compilation error' : item[2] == 40 ? 
              'Runtime error' : item[2] == 50 ? 
                'Time limit exceeded' : item[2] == 70 ? 
                  'Wrong answer' : item[2] == 80 ? 
                    'Presentation error' : item[2] == 90 ? 
                      'Accepted' : 'other',
          time: item[3],
          code: item[5] == 2 ? 'java' : item[5] == 5 ? 'c++11' : item[5] == 3 ? 'c++' : 'other',
          date: moment.unix(item[4]).toDate()
        });
      })
      return resolve(data);
    })
  });
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