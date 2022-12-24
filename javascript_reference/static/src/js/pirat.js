odoo.define('javascript_reference.Pirat', function(require) {
    "use strict"

    var Person = require('javascript_reference.Person');

    var Pirate = Person.extend({
        // redefine the say method
        say: function(message) {
            var msg = this._super.apply(this, arguments);
            return msg + ', yarr!'
        }
    })

    return Pirate;

});