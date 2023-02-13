/**
 * @fileoverview instanceof操作符可能存在问题
 * @author p-der
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/type-instanceof-limit"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const msg = 'instanceof操作符可能存在问题';

const ruleTester = new RuleTester();
ruleTester.run("type-instanceof-limit", rule, {
  valid: [{ code: 'typeof "String"' }],

  invalid: [
    {
      code: '"test2" instanceof String',
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});
