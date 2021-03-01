var pmx = require('pmx');
var _ = require('lodash');
const { exec } = require("child_process")

function initActions() {

  // List DBs
  pmx.action('RUN ANALYTIC', function (reply) {
    exec("/usr/bin/python3.6 /home/silacakpg/analytic-dhis.py >> /home/silacakpg/analytic.log 2>&1 &", function (err, results) {
      if (err) {
        console.log(err)
        return reply(err);
      }
      console.log(results)
      reply(_.pluck(results));
    })
  });

}

function init() {
  initActions();
}

module.exports.init = init;