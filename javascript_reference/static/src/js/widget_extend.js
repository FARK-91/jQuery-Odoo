odoo.define('javascript_reference.WidgetExtend', function(require) {
    "use strict"

    var Widget = require('web.Widget');

    var WidgetExtend = Widget.extend({
        template: 'some.template',
        events: {
            'click button': '_onclick',
        },
        init: function(parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onclick: function() {
            this.count++;
            this.$('.val').text(this.count);
        }
    });

    return WidgetExtend;

});