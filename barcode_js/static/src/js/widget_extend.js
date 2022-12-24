odoo.define('barcode_js.CustomLinesWidget', function(require) {
    "use strict"

    var Widget = require('web.Widget');
    var Session = require('web.session');

    var Counter = Widget.extend({
        template: 'some.template',
        events: {
            'click button': '_onclick',
        },
        init: function(parent, value) {
            this._super(parent);
            this.count = value;
            this.data = [];
        },
        willStart: function () {
            var self = this;
            return this._super.apply(arguments).then(function() {
                self._rpc({
                    model: 'res.partner',
                    method: 'search_read',
                    fields: ['id','name', 'phone'],
                    context: self.context,
                    // domain: [['id','=',14]]
                }).then(function(result){
                    // console.log(result)
                    self.data = result
                })
            });
        },
        _onclick: function(e) {
            this.trigger_up("valuechange", {value: 22})
            this.count++;
            this.$('.val').text(this.count);
            const rec = [];
            for(let i=0;i<this.data.length;i++) {
                if(this.data[i].id === this.count) {
                    rec.push(this.data[i]);
                    break;
                }
            }
            // this.$('.phone').text(this.data[0]['phone']);
            this.$('.phone').text(rec[0]['phone']);
            console.log('Printing session values...')
            console.log(Session)
            
        }
    });

    return Counter;

});