odoo.define('javascript_reference.CrewMember', function(require) {
    "use strict"

    var Person = require('javascript_reference.Person');

    var Dancing = {
        dance: function() {
            console.log('I am dancing...');
        }
    }

    var CrewMember = Person.extend(Dancing, {
        sleep: function() {
            return this.say('ZzZ');
        }
    })

    return CrewMember;

});