odoo.define('ecommerce_pickup.ClientAction', function (require) {
    'use strict'

    var ClientAction = require('stock_barcode.ClientAction');

    var CustomClientAction = ClientAction.include({
        _onIncrementLine: function(ev) {
            var res = this._super.apply(this, arguments);
            //PCI: I had to copy and paste the following 2 lines
            // Because i don't know how to get the values from the original
            // function.
            // There is some "qcontext" like in controllers?
            const id = ev.data.id;
            const line = this._getLines(this.currentState).find(l => id === (l.id || l.virtual_id));
            // Copy paste ends.
            var span = this.linesWidget.$el.find('div.d-flex.justify-content-between')[1].children[0]
            span.innerText = line.qty_done.toString() + '/' + line.product_uom_qty.toString()
            return res;
        }
    })
});