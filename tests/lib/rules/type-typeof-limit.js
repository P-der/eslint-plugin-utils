/**
 * @fileoverview typeof 不能用于对象和数组，请使用@p-der/type
 * @author p-der
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/type-typeof-limit"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = "typeof 不能用于对象和数组，请使用@p-der/type";

const ruleTester = new RuleTester();
ruleTester.run("type-typeof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: 'typeof a == "number"'
    },
    {
      code: 'a== "object"'
    }
  ],

  invalid: [
    {
      code: "typeof a === 'object'",
      errors: [{ message: msg }],
    },
    {
      code: 'typeof a == "object"',
      errors: [{ message: msg}]
    }
  ],
});
