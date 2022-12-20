odoo.define('javascript_reference.Person', function(require) {
    "use strict";

    console.log('person.js File loaded...')
    var Class = require('web.Class');

    var Person = Class.extend({
        init: function(name) {
            this.name = name
        },
        say: function(message) {
            return this.name + ': ' + message
        }
    })

    return Person;

});