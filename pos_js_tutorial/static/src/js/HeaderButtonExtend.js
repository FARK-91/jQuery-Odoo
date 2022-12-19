odoo.define('pos_js_tutorial.HeaderButtonExtend', function (require) {
    'use strict'

    console.log('Extending POS Javascript')
    const HeaderButton = require('point_of_sale.HeaderButton');
    const { patch } = require('web.utils')

    patch(HeaderButton, 'pos_js_tutorial.HeaderButtonExtend', {
        onClick() {
            console.log('Este modulo fija un nuevo alert antes de cerrar la sesion del POS.');
            if (!this.confirmed) {
                alert('Please write you pin code before close session.')
                this.state.label = 'Confirm';
                this.confirmed = setTimeout(() => {
                    this.state.label = 'Close';
                    this.confirmed = null;
                }, 2000);
            } else {
                this.trigger('close-pos');
            }
        }
    })
}); 