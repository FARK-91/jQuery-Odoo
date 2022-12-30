odoo.define('website_widget.WidgetTextArea', function(require) {
    "use strict"

    var publicWidget = require('web.public.widget');
    var wysiwygLoader = require('web_editor.loader');

    publicWidget.registry.EmailEditor = publicWidget.Widget.extend({
        selector: '#email_template',

        /**
         * @override
         */
        start: function() {
            var def = this._super.apply(this, arguments);
            if (this.editableMode) {
                return def;
            }

            $('#custom_email').change(function () {
                var checked = $(this).is(':checked');
                if (checked) {
                    $('.email_edit').show();
                }else {
                    $('.email_edit').hide();
                }
            });

            var $textarea = $('#email_template.o_wysiwyg_loader');
            var loadProm = wysiwygLoader.load(this, $textarea[0], {
                recordInfo: {
                    context: this._getContext(),
                },
            }).then(wysiwyg => {
                this._wysiwyg = wysiwyg;
            })

            return Promise.all([def, loadProm]);
        }
    });

    return publicWidget.registry.EmailEditor;
});