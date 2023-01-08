odoo.define('ecommerce_pickup.PickupOptions', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');
    var ajax = require('web.ajax');
    var location_id = 0
    var order_id = 0
    var isPickup = false

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

            $('#pickup_form_pay').click(function (ev) {
                self.pickuPayEvent(ev);
            });
            $('#o_payment_form_pay').click(function (ev) {
                if (isPickup) {
                    var storeData = self._storePickupLocation(order_id,location_id)
                    var storeData = Promise.all([storeData])
                    storeData.then(result => {
                        console.log('Handling result...');
                        console.log(result);
                    });
                    
                }
            });
            return Promise.all([def]);
        },

        /**
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
            if ((available_qty == undefined) || parseFloat(available_qty) < parseFloat(total_order_qty)){
                var $modal = $('#NonStockModal')
                $modal.modal('show');
                ev.currentTarget.value = undefined
            }else {
                isPickup = true
            }
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @private
         */

        _storePickupLocation: function(order, location) {
            return ajax.jsonRpc("/store/pickup", 'call', {
                'order_id': order,
                'location_id': location,
            }).then((data) => {
                if (data) {
                    console.log('RPC Call Success')
                    return data;
                }
            }).catch(e => {
                console.log('RPC Call Failed')
                return data;
            });
        },
        
        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

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