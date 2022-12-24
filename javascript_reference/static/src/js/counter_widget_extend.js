odoo.define('javascript_reference.CounterExtend', function(require) {
    "use strict"

    var Widget = require('web.Widget');
    var Counter = require('javascript_reference.WidgetExtend');

    var MyWidget = Widget.extend({
        custom_events: {
            valuechange: '_onValueChange'
        },
        start: function() {
            this.counter = new Counter(this);
            var def = this.counter.appendTo(this.$el);
            return Promise.all([def, this._super.apply(this, arguments)]);
        },
        _onValueChange: function(event) {
            console.log('Base Event system')
            console.log(event)
            console.log('El Id del registro anterior fue: ', event.data.val-1)
            console.log('El Id del proximo registro sera: ', event.data.val+1)
        }
    });

    return MyWidget;

});