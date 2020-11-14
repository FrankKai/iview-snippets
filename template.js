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

exports.template = template;
exports.templateVModel = templateVModel;