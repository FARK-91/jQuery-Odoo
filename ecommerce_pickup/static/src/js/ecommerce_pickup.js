odoo.define('ecommerce_pickup.PickupOptions', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');

    publicWidget.registry.PickupOptions = publicWidget.Widget.extend({
        selector: '#pickup',
        events: {
            'click #pickup_form_pay': 'pickuPayEvent',
        },

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
                    var $modal = $('#NonStockModal')
                    $modal.modal('show');
                    // var pay = this.counter.appendTo(this.$el);
                }
            });

            return Promise.all([def]);
        },

        pickuPayEvent: function(e) {
            var payment = new publicWidget.registry.PaymentForm(this);
            console.log('payment')
            console.log(payment)
            // payment.payEvent()
        }
    });

    return publicWidget.registry.PickupOptions;
});