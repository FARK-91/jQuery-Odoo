# -*- coding: utf-8 -*-

import logging

from odoo import models, fields, api, _

class OdooTutorial(models.Model):
    _name = 'odoo.tutorial'
    _description = 'Odoo tutorial'

    name = fields.Char(string="Tutorial name", required=True)
    number_of_video = fields.Integer(string="Number of videos", required=True)