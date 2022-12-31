odoo.define('ecommerce_pickup.PickupOptions', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');
    // var wysiwygLoader = require('web_editor.loader');

    publicWidget.registry.PickupOptions = publicWidget.Widget.extend({
        selector: '#pickup',

        /**
         * @override
         */
        start: function() {
            var def = this._super.apply(this, arguments);
            if (this.editableMode) {
                return def;
            }

            console.log('prueba prueba prueba...!')


            $('#pickup_selection').change(function (e) {
                // self = this;
                // self._rpc({
                //     model: 'stock.warehouse',
                //     method: 'search_read',
                //     fields: ['id','name', 'lot_stock_id'],
                //     context: self.context,
                //     // domain: [['id','=',params.id[0]]]
                // }).then(function(result){
                //     console.log(result)
                // })
                var option = this.options[this.selectedIndex];
                var total_order_qty = this.dataset.totalQty
                var available_qty = option.dataset.qty
                console.log(available_qty)
                if (available_qty == undefined || available_qty < total_order_qty){
                    $('#exampleModalLongTitle').modal('show');
                    // debugger
                }
            });
            return Promise.all([def]);
        }
    });

    return publicWidget.registry.PickupOptions;
});

// https://www.odoo.com/forum/help-1/create-popup-in-website-191760