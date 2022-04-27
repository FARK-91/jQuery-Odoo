odoo.define("odoo_javascript.Sample", function (require) {
    "use strict";
    // var rpc = require("web.rpc");
    // var utils = require('web.utils');
    // var Model = require('web.Model');
    // var QWeb = require('web.qweb');
    // var AbstractAction = require('web.AbstractAction');
    // var core = require('web.core');
    // var Class = require('web.Class');
    // var widget_registry = require('web.widget_registry');
    // var Qweb = core.qweb;

    /*************************************************/

    var Widget = require('web.Widget');

    var Counter = Widget.extend({
        template: 'odoo_javascript.template',
        // We use xmlDependencies when file upload from manifest is not needed
        xmlDependencies: ['/odoo_javascript/static/src/xml/base_template.xml'],
        events: {
            'click button': '_onClick',
        },
        init: function (params) {
            this._super(params);
            this.count = params.count;
        },
        _onClick: function () {
            this.count++;
            console.log(this.count)
            this.$('.val').text(this.count);
        },
    });

    // Create the instance
    var counter = new Counter({'count': 4});
    // Render and insert into DOM
    counter.appendTo(".o_web_client");
    console.log("Esto es una prueba de como instanciar un widget.")
    console.log(counter)

    // Inserting Widget in the DOM
    // appendTo(): inserts it as the last child of the target.
    // prependTo(): inserts it as the first child of the target.
    // insertAfter(): inserts it as the preceding sibling of the target.
    // insertBefore(): inserts it as the following sibling of the target.

    // Generic form tu create a widget:
    // var CorrectWidget = Widget.extend({
    //     start: function () {
    //         var self = this;
    //         return this._super.apply(arguments).then(function() {
    //             self.$el.hasClass(....) // this works, no promise is lost and the code executes in a controlled order: first super, then our code.
    //         });
    //     },
    // });

    /*************************************************/

    // Como registrar una Accion
    // core.action_registry.add('petstore.homepage', HomePage);
    // Como registrar un widget
    // widget_registry.add('widget_homepage', HomePage);

    // return {
    //     HomePage: HomePage,
    // };
});