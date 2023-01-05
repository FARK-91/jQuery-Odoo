# -*- coding: utf-8 -*-

import json
import logging
# from datetime import datetime
from werkzeug.exceptions import Forbidden, NotFound

from odoo import fields, http, SUPERUSER_ID, tools, _
from odoo.http import request
# from odoo.addons.base.models.ir_qweb_fields import nl2br
# from odoo.addons.http_routing.models.ir_http import slug
# from odoo.addons.payment.controllers.portal import PaymentProcessing
# from odoo.addons.website.controllers.main import QueryURL
# from odoo.addons.website.models.ir_http import sitemap_qs2dom
# from odoo.exceptions import ValidationError
# from odoo.addons.portal.controllers.portal import _build_url_w_params
# from odoo.addons.website.controllers.main import Website
# from odoo.addons.website_form.controllers.main import WebsiteForm
# from odoo.osv import expression
_logger = logging.getLogger(__name__)
from odoo.addons.website_sale.controllers import main



class WebsiteSale(main.WebsiteSale):

    @http.route(['/shop/payment'], type='http', auth="public", website=True, sitemap=False)
    def payment(self, **post):
        """ Inherit base controller/payment method:
            - Queries created for fetch warehouses data.
        """
        res = super(WebsiteSale, self).payment(**post)
        order = request.website.sale_get_order()
        render_values = super(WebsiteSale, self)._get_shop_payment_values(order, **post)
        render_values['only_services'] = order and order.only_services or False
        if render_values['errors']:
            render_values.pop('acquirers', '')
            render_values.pop('tokens', '')

        # PCI: New code from here.
        pickups = []
        products = []
        total_order_qty = 0.0
        available_qty = 0.0
        internal_locations = request.env['stock.location'].search([('usage','=','internal')], order = 'name asc')
        order_lines = request.env['sale.order.line'].search([('order_id','=',order.id)])
        for lines in order_lines:
            products.append(lines.product_id.id)
            total_order_qty += lines.product_uom_qty
        if internal_locations:
            stock_quants = request.env['stock.quant'].search([('location_id','in',internal_locations.ids),('product_id','in',products)])
            for item in internal_locations:
                available_qty = 0.0
                quants = stock_quants.search([('location_id','=',item.id)])
                if quants:
                    for qty in quants:
                        for product in products:
                            if qty.product_id.id == product:
                                available_qty += qty.available_quantity
                pickups.append([item,item.get_warehouse(),available_qty])
        print(pickups)
        print(order)
        render_values['pickup_options'] = pickups
        render_values['order_id'] = order.id
        render_values['total_order_qty'] = total_order_qty

        return request.render("website_sale.payment", render_values)

    @http.route(['/store/pickup'], type='json', auth="user", website=True)
    def StorePickup(self, **kw):
        order_id = kw.get('order_id', False)
        location_id = kw.get('location_id', False)
        sale_obj = request.env['sale.order'].browse(int(order_id))
        try:
            sale_id = sale_obj.write({'pickup_from_store': int(location_id)})
            return json.dumps(True)
        except Exception as exception:
            _logger.warning(exception)
            return json.dumps(False)
        
        # if sale_id:
        #     return json.dumps(True)
        # else:
        #     _logger.warning(exception)
        #     return json.dumps(False)