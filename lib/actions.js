var pmx = require('pmx');
var _ = require('lodash');
const exec = require('./utils/exec.js')

function initActions() {

  // List DBs
  pmx.action('RUN ANALYTIC', function (reply) {
    exec("/usr/bin/python3.6 /home/silacakpg/analytic-dhis.py", function (err, out) {
      return err? reply(err.message): reply(out.replace(/\n/g,'<br/>'))
    })
  });

}

function init() {
  initActions();
}

module.exports.init = init;