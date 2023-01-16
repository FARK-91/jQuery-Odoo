odoo.define('barcode_improvements.CustomLinesWidget', function(require) {
    "use strict"

    var LinesWidget = require('stock_barcode.LinesWidget');
    var core = require('web.core');
    var QWeb = core.qweb;

    var CustomLinesWidget = LinesWidget.include({

        _renderLines: function () {
            this._super();
            const productLines = this.getProductLines(this.page.lines)
            let demandQty = 0
            let doneQty = 0
            productLines.forEach((item) => {
                demandQty = demandQty + item.product_uom_qty
                doneQty = doneQty + item.qty_done
            })

            var $header = this.$el.filter('.o_barcode_lines_header');
            var $pageSummary = $(QWeb.render('custom_stock_barcode_summary_template', {
                locationName: this.page.location_name,
                locationDestName: this.page.location_dest_name,
                nbPages: this.nbPages,
                pageIndex: this.pageIndex + 1,
                mode: this.mode,
                model: this.model,
                isPickingRelated: this.isPickingRelated,
                sourceLocations: this.sourceLocations,
                destinationLocations: this.destinationLocations,
                demandQty: demandQty,
                doneQty: doneQty
            }));
            $header.append($pageSummary);
            if($header[0].childNodes.length > 1){
                $header[0].childNodes[0].remove()
            }
        }

    })

});