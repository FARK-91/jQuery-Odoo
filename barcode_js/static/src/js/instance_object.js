odoo.define('barcode_js.CustomLinesWidget', function(require) {
    "use strict"

    var LinesWidget = require('stock_barcode.LinesWidget');
    var core = require('web.core');
    var QWeb = core.qweb;
    console.log('CustomLinesWidget...')

    var CustomLinesWidget = LinesWidget.include({

        _renderLines: function () {
            console.log('_renderLines...')
            var res = this._super.apply(this, arguments);
            // console.log(this)
            // console.log(this.$el.filter('.o_barcode_lines_header'))
            // console.log(this.$el[2].lastChild.childNodes[1].childNodes[3])
            const targetElement = this.$el[2].lastChild.childNodes[1].childNodes[3]

            // Render and append the page summary.
            // var $header = this.$el.filter('.o_barcode_lines_header');
            // var $pageSummary = $(QWeb.render('stock_barcode_summary_template', {
            //     locationName: this.page.location_name,
            //     locationDestName: this.page.location_dest_name,
            //     nbPages: this.nbPages,
            //     pageIndex: this.pageIndex + 1,
            //     mode: this.mode,
            //     model: this.model,
            //     isPickingRelated: this.isPickingRelated,
            //     sourceLocations: this.sourceLocations,
            //     destinationLocations: this.destinationLocations,
            // }));
            // $header.append($pageSummary);
            // targetElement.prepend("<li>Prepended item</li>");
            var $header = targetElement;
            var $pageSummary = $(QWeb.render('custom_stock_barcode_summary_template', {
                title: "Nuevo elemento...!!!"
            }));
            $header.prepend($pageSummary)
            // $header.insertBefore($pageSummary);
            return res;
        }

    })

    // var FormSaveButton = FormController.include({
    //     saveRecord: function() {
    //         var res = this._super.apply(this, arguments);

    //         const crew = new CrewMember('Renier Ferrer')
    //         console.log(crew.say('Voy a bailar....'))
    //         console.log(crew.dance())
    //         console.log(crew.sleep())

    //         // Create the instance
    //         var counter = new Counter(this, 14);
    //         // var myWidget = new MyWidget(this);
    //         console.log(counter)
    //         // console.log(myWidget)
    //         // Render and insert into DOM
    //         counter.appendTo(".o_control_panel");
            
    //         return res;
    //     }
    // })

});