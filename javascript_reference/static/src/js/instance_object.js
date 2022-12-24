odoo.define('javascript_reference.Instance', function(require) {
    "use strict"

    var CrewMember = require('javascript_reference.CrewMember');
    var Counter = require('javascript_reference.WidgetExtend');
    var MyWidget = require('javascript_reference.CounterExtend');
    var FormController = require('web.FormController');

    var FormSaveButton = FormController.include({
        saveRecord: function() {
            var res = this._super.apply(this, arguments);

            const crew = new CrewMember('Renier Ferrer')
            console.log(crew.say('Voy a bailar....'))
            console.log(crew.dance())
            console.log(crew.sleep())

            // Create the instance
            var counter = new Counter(this, 14);
            // var myWidget = new MyWidget(this);
            console.log(counter)
            // console.log(myWidget)
            // Render and insert into DOM
            counter.appendTo(".o_control_panel");
            
            return res;
        }
    })

});