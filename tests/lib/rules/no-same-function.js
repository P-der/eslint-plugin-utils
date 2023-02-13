/**
 * @fileoverview 不能有和utils同名的函数
 * @author p-der
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-same-function"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-same-function", rule, {
  valid: [{ code: 'function aaa() {}' }],

  invalid: [
    {
      code: 'function truncate() {}',
      errors: [
        {
          messageId: "noSameFunctionMessageId",
        },
      ],
    },
    {
      code: 'function range() {}',
      errors: [
        {
          messageId: "noSameFunctionMessageId",
        },
      ],
    },
    {
      code: 'function pick() {}',
      errors: [
        {
          messageId: "noSameFunctionMessageId",
        },
      ],
    },
    {
      code: 'function getParam() {}',
      errors: [
        {
          messageId: "noSameFunctionMessageId",
        },
      ],
    },
  ],
});
