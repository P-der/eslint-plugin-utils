/**
 * @fileoverview eslint plugin for utils
 * @author p-der
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    plugins: ['@p-der/utils'],
    rules: {
        "@p-der/utils/type-typeof-limit": 'error',
        "@p-der/utils/type-instanceof-limit": 'error',
        "@p-der/utils/no-same-function": 'error',
    }
}


