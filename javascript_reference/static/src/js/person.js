odoo.define('javascript_reference.Person', function(require) {
    "use strict";
    
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