odoo.define('ecommerce_pickup.PickupOptions', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');
    var ajax = require('web.ajax');
    var location_id = 0
    var order_id = 0

    publicWidget.registry.PickupOptions = publicWidget.Widget.extend({
        selector: '#pickup',
        events: {
            'change #pickup_selection': 'pickSelection',
        },

        /**
         * @override
         */
         start: function() {
            self = this;
            var def = this._super.apply(this, arguments);
            if (this.editableMode) {
                return def;
            }
            console.log('prueba prueba prueba...!')

            $('#pickup_form_pay').click(function (ev) {
                self.pickuPayEvent(ev);
            });
            return Promise.all([def]);
        },

        /**
         * @private
         * @param {Event} ev
         */

        pickSelection: function(ev) {
            var option = ev.currentTarget.options[ev.currentTarget.selectedIndex];
            var total_order_qty = ev.currentTarget.dataset.totalqty
            order_id = ev.currentTarget.dataset.sale
            location_id = option.id
            var available_qty = option.dataset.qty
            console.log('Available QTY: ', available_qty)
            console.log('Total Order QTY: ', total_order_qty)
            if (available_qty == undefined || available_qty < total_order_qty){
                var $modal = $('#NonStockModal')
                $modal.modal('show');
            }
            return;
        },

        /**
         * @private
         * @param {Event} ev
         */

        pickuPayEvent: function(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            var $form = $('.o_payment_form')
            var payment = new publicWidget.registry.PaymentForm(this);
            payment.el = payment.target = payment.$el = $form
            console.log(order_id)
            console.log(location_id)
            ajax.jsonRpc("/store/pickup", 'call', {
                'order_id': order_id,
                'location_id': location_id,
            }).then((data) => {
                if (data) {
                    console.log('Success')
                }
            }).catch(e => {
                console.log('Failed')
            });
            return payment.payEvent(ev)
        }
    });

    return publicWidget.registry.PickupOptions;
});