odoo.define("odoo_javascript.WidgetViewForm", function (require) {
    "use strict";

    /*************************************************/

    var Widget = require('web.Widget');
    var widget_registry = require('web.widget_registry');

    var Counter = Widget.extend({
        template: 'odoo_javascript.template2',
        xmlDependencies: ['/odoo_javascript/static/src/xml/base_template.xml'],
        events: {
            'click button': '_onClick',
        },
        init: function (params) {
            this._super(params);
            this.count = 8;
        },
        _onClick: function () {
            this.count++;
            console.log(this.count)
            this.$('.val').text(this.count);
        },
    });


    /*************************************************/

    // Como registrar un widget
    widget_registry.add('widget_homepage', Counter);

    return {
        Counter: Counter,
    };
});