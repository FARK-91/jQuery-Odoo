odoo.define("odoo_javascript.WidgetEventSystem", function (require) {
    "use strict";

    console.log("**********************************")

    /*************************************************/

    var Widget = require('web.Widget');
    var Counter = require('odoo_javascript.Counter');

    var MyWidget = Widget.extend({
        start: function () {
            this.counter = new Counter(this);
            this.counter.on('valuechange', this, this._onValueChange);
            var def = this.counter.appendTo(this.$el);
            return Promise.all([def, this._super.apply(this, arguments)]);
        },
        _onValueChange: function (val) {
            // do something with val
            alert("Esto es una captura de evento " + val)
        },
    });

    console.log("Esto es una prueba de WidgetEventSystem")


    /*************************************************/

});