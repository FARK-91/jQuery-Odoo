odoo.define("oepetstore.Sample", function (require) {
    "use strict";
    // var rpc = require("web.rpc");
    // var utils = require('web.utils');
    // var Model = require('web.Model');
    // var QWeb = require('web.qweb');
    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var Class = require('web.Class');
    var Widget = require('web.Widget');
    var widget_registry = require('web.widget_registry');
    var Qweb = core.qweb;

    // Como crear un widget
    // var HomePage = Widget.extend({
    //     template: 'oepetstore.template',
    //     xmlDependencies: ['/oepetstore/static/src/xml/base_template.xml'],

    //     init: function(parent) {
    //         this._super(parent);
    //         console.log("Hello JS, I'm inside of init.");
    //     },

    //     start: function() {
    //         console.log("Hello JS, I'm inside of start.");
    //     },
    // });

    // var GreetingsWidget = AbstractAction.extend({
    //     className: 'oe_petstore_greetings',
    //     start: function() {
    //         this.$el.append("<div>We are so happy to see you again in this menu!</div>");
    //     },
    // });

    // var HomePage = AbstractAction.extend({
    //     hasControlPanel: true,
    //     start: function () {
    //         console.log("pet store home page loaded");
    //         this.$el.append("<div>Hello dear Odoo user!</div>");
    //         // this.$el.append(Qweb.render("HomePageTemplate"));
    //         console.log(this.getParent().$el);
    //         console.log(this.getChildren()[0].$el);
    //         // var greeting = new GreetingsWidget(this);
    //         // return greeting.appendTo(this.$el);
    //     },
    // });

    /*************************************************/

    var Widget = require('web.Widget');

    var HomePage = Widget.extend({
        template: 'oepetstore.template',
        xmlDependencies: ['/oepetstore/static/src/xml/base_template.xml'],
        events: {
            'click button': '_onClick',
        },
        init: function (params) {
            this._super(params);
            // this.count = params.count;
            this.count = 4;
        },
        _onClick: function () {
            this.count++;
            console.log(this.count)
            this.$('.val').text(this.count);
        },
    });

    // Create the instance
    // var counter = new HomePage({'count': 4});
    // // Render and insert into DOM
    // counter.appendTo(".some-div");


    /*************************************************/
    var MyClass = Class.extend({
        init: function (params) {
            this.name = params.name;
        },
        say_hello: function() {
            console.log("hello", this.name);
        },
    });

    var MySpanishClass = MyClass.extend({
        say_hello: function() {
            this._super();
            console.log("translation in Spanish: hola", this.name);
        },
    });

    // var my_object = new MyClass({'name': 'Bob'});
    var my_object = new MySpanishClass({'name': 'Bob'});
    my_object.say_hello();

    core.action_registry.add('petstore.homepage', HomePage);
    // core.action_registry.add('petstore.homepage', GreetingsWidget);
    // Como registrar un widget
    widget_registry.add('widget_homepage', HomePage);

    // return HomePage;
    return {
        HomePage: HomePage,
    };
});