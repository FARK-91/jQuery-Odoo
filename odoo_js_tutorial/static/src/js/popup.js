odoo.define('odoo_js_tutorial.tutorialPopup', function (require) {
    'use strict'

    console.log('popup.js loaded')
    var FormController = require('web.FormController');

    var ExtendFormController = FormController.include({
        saveRecord: function() {
            // console.log('saveRecord');
            var res = this._super.apply(this, arguments);

            function parseURLParams(url) {
                var queryStart = url.indexOf("?") + 1,
                    queryEnd = url.indexOf("#") + 1 || url.length + 1,
                    query = url.slice(queryStart, queryEnd - 1),
                    pairs = query.replace(/\+/g, " ").split("&"),
                    parms = {}, i, n, v, nv;

                if (query === url || query === "") return;

                for (i = 0; i < pairs.length; i++) {
                    nv = pairs[i].split("=", 2);
                    n = decodeURIComponent(nv[0]);
                    v = decodeURIComponent(nv[1]);

                    if (!parms.hasOwnProperty(n)) parms[n] = [];
                    parms[n].push(nv.length === 2 ? v : null);
                }
                return parms;
            }

            if (this.modelName == 'odoo.tutorial') {
                var url = window.location.href;
                var page_url = url.replace('#','?');
                var params = parseURLParams(page_url)
                console.log(params)
                if (params.debug != 'undefined' && params.debug != null) {
                    params['id'] = [params.cids[0]]
                }
                // this.do_notify('Success', 'Record Saved');
                self = this;
                self._rpc({
                    model: 'odoo.tutorial',
                    method: 'search_read',
                    fields: ['id','name', 'number_of_video'],
                    context: self.context,
                    domain: [['id','=',params.id[0]]]
                }).then(function(result){
                    console.log(result)
                    if (result[0]['number_of_video'] == 0) {
                        self.do_notify('Warning', 'Number of video is 0...');
                    }
                })
            }
            return res;
        }
    })
}); 