/**
 * @fileoverview instanceof操作符可能存在问题
 * @author p-der
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "instanceof操作符可能存在问题",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      instanceofMessageId: 'instanceof操作符可能存在问题'
    }
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      BinaryExpression: (node) => {
        const operator = node.operator;
        if(operator === 'instanceof') {
          context.report({
            node,
            messageId: "instanceofMessageId"
          })
        }
      }
    };
  },
};
