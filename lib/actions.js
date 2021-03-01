var pmx = require('pmx');
var _ = require('lodash');
const { exec } = require("child_process")

function initActions() {

  // List DBs
  pmx.action('RUN ANALYTIC', function (reply) {
    exec("/home/silacakpg/analytic-dhis.py", function (err, results) {
      if (err) {
        return reply(err);
      }
      reply(_.pluck(results));
    })
  });

}

function init() {
  initActions();
}

module.exports.init = init;