# -*- coding: utf-8 -*-

from odoo import models, fields, api, _

class SaleOrder(models.Model):
    _inherit = 'sale.order'
    _description = 'Custom fields and functionalities in SO model.'

    pickup_from_store = fields.Many2one('stock.location',string="Pick up from store")