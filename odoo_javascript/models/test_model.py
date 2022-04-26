from odoo import _, api, fields, models
import logging
_logger = logging.getLogger(__name__)


class TestModel(models.Model):
    _name = "test.model"

    @api.model
    def my_method(self):
        return {"hello": "world"}

    message = fields.Char()

class product(models.Model):
    _inherit = "product.product"

    max_quantity = fields.Float(string="Maximum Quantity")