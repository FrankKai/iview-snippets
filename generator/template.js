const template = `
    "{{tag}} {{type}}": {
        "prefix": ["i-{{tag}}-{{type}}"],
        "body": ["<{{tag}} type='{{type}}'></{{tag}}>"],
        "description": "iview {{tag}} {{type}}."
    },`;

const templateVModel = `
    "{{tag}} {{type}}": {
        "prefix": ["i-{{tag}}-{{type}}"],
        "body": ["<{{tag}} type='{{type}}' value=''></{{tag}}>"],
        "description": "iview {{tag}} {{type}}."
    },`;

const templateTip = `
    "{{tag}} {{type}}": {
        "prefix": ["i-{{tag}}-{{type}}"],
        "body": ["this.{{dollar_tag}}.{{type}}({ content: '' })"],
        "description": "iview {{tag}} {{type}}."
    },`;

const templateSlot = `
    "slot {{type}}": {
        "prefix": ["i-slot-{{type}}"],
        "body": ["<div slot='{{type}}'></div>"],
        "description": "iview slot {{type}}."
    },`;

exports.template = template;
exports.templateVModel = templateVModel;
exports.templateTip = templateTip;
exports.templateSlot = templateSlot;
