var axios = require('axios');
var moment = require('moment');
var uri_base = "http://uhunt.felix-halim.net/api";
var uri = `${uri_base}/p/id/`;
var uri_num = `${uri_base}/p/num/`;
var uri_user_submissions = `${uri_base}/subs-user/`;
var uri_list_excercises = `${uri_base}/p`;
var uri_list_subss_specific_prob = (problems_ids, start_date_unix, end_date_unix) => `${uri_base}/p/subs/${problems_ids}/${start_date_unix}/${end_date_unix}`; // Submissions to Specific Problems

/**
 * To view specific problem by {problem-id}.
 * @param {Number} id_excers ID Excersice
 */
module.exports.byId = function (id_excers) {
  if (Number.isNaN(id_excers)) {
    return Promise.reject("A number type parameter is required")
  }
  return request(uri + parseInt(id_excers));
};

/**
 * Get data Excersice by Number
 * @param {Number} num_excer Number excersice
 */
module.exports.byNum = function (num_excer) {
  if (Number.isNaN(num_excer)) {
    return Promise.reject("A number type parameter is required")
  }
  return request(uri_num + parseInt(num_excer));
};

/**
 * Get data user by ID
 * @param {Number} id_user ID User 
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

/**
 * Submissions to Specific Problems
 * @param {[]} problems_ids   List problems ids 
 * @param {Date} start_date Date initial date format 
 * @param {Date} end_date   Date end date format
 */
module.exports.listSubmSpecificProblem = function (problems_ids, start_date, end_date) {
  if (!Array.isArray(problems_ids)) {
    if (Number.isNaN(problems_ids)) { // returns true if the variable does NOT contain a valid number
      return Promise.reject("problems_ids is invalid");
    }
  }
  if (!moment(start_date).isValid()) {
    return Promise.reject("'start_date' is invalid");
  }
  if (!moment(end_date).isValid()) {
    return Promise.reject("'end_date' is invalid");
  }
  // http://uhunt.felix-halim.net/api/p/subs/1342,2702,1700,2225,1852,1423,1567,3540,3661,2481/1360753885/1361358685
  return request(
    uri_list_subss_specific_prob(
      problems_ids.join(','),
      moment(start_date).unix(),
      moment(end_date).unix()
    )
  );
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