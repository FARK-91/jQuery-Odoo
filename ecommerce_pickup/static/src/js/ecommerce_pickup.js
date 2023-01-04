odoo.define('ecommerce_pickup.PickupOptions', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');

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
            var total_order_qty = ev.currentTarget.dataset.totalQty
            var available_qty = option.dataset.qty
            console.log(available_qty)
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
            return payment.payEvent(ev)
        }
    });

    return publicWidget.registry.PickupOptions;
});