/**
 * @fileoverview typeof 不能用于对象和数组，请使用@p-der/type
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
      description: "typeof 不能用于对象和数组，请使用@p-der/type",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      typeofMessageId: 'typeof 不能用于对象和数组，请使用@p-der/type',
    },
  },

  create(context) {
    return {
      BinaryExpression: (node) => {
        const { operator, left, right} = node;
        if (
          (operator === '==' || operator === '===') && 
          left.type === "UnaryExpression" && 
          left.operator === 'typeof' && 
          right.type === 'Literal' &&
          right.value === 'object'
        ) {
            context.report({
              node,
              messageId: 'typeofMessageId',
            });
          } 
      }
    };
  },
};
