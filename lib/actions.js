var pmx = require('pmx');
var _ = require('lodash');
const { exec } = require("child_process")

function initActions() {

  // List DBs
  pmx.action('RUN ANALYTIC', function (reply) {
    exec("/usr/bin/python3.6 /home/silacakpg/analytic-dhis.py", function (err, stdout, stderr) {
      reply({err,stdout,stderr})
    })
  });

}

function init() {
  initActions();
}

module.exports.init = init;