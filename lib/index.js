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
module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs :{
        plugins: ["@p-der/eslint-plugin-utils"],
        rules: {
            "@p-der/utils/type-typeof-limit": 2,
            "@p-der/utils/type-instanceof-limit": 2,
            "@p-der/utils/no-same-function": 2,
        }
    }
}


