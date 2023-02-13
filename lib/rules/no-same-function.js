/**
 * @fileoverview 不能有和utils同名的函数
 * @author p-der
 */
"use strict";

const { isExist } = require('../utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
// 可能会冲突的函数名
const limitList = ['truncate', 'range', 'pick', 'getParam'];

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "不能有和utils同名的函数",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noSameFunctionMessageId: '不能有和utils同名的函数'
    }
  },

  create(context) {
    function isInLimitList(funcName, node) {
      if(limitList.includes(funcName)) {
        context.report({
          node, 
          messageId: "noSameFunctionMessageId"
        })
      }
    }
    function check(node) {
      let funcName;
      if(isExist(node, 'parent', 'id', 'name')) {
        funcName= node.parent.id.name;
        isInLimitList(funcName, node.parent.id)
      }
      if(isExist(node, 'parent', 'key', 'name')) {
        funcName = node.parent.key.name
        isInLimitList(funcName, node.parent.key)
      }
      if(isExist(node, 'id', 'name')) {
        funcName = node.id.name
        isInLimitList(funcName, node.id)
      }
    }
    return {
      FunctionDeclaration: check,
      ArrowFunctionExpression: check,
      FunctionExpression: check
    }
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
    };
  },
};
