odoo.define("odoo_javascript.WidgetEventSystem", function (require) {
    "use strict";

    /*************************************************/

    var Widget = require('web.Widget');
    var Counter = require('odoo_javascript.Counter');

    var MyWidget = Widget.extend({
        custom_events: {
            valuechange: '_onValueChange'
        },
        start: function () {
            this.counter = new Counter({'count': 5});
            var def = this.counter.appendTo(this.$el);
            console.log("start start start start")
            return Promise.all([def, this._super.apply(this, arguments)]);
        },
        _onValueChange: function (val) {
            // do something with val
            alert("Esto es una captura de evento " + val)
            console.log("_onValueChange")
        },
    });

    console.log("Esto es una prueba de WidgetEventSystem")
    // var myWidget = new MyWidget(this);


    /*************************************************/

});