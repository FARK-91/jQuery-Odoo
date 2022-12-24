# -*- coding: utf-8 -*-
{
    'name': "Odoo 14 Javascript barcode",
    'summary': """
        JS Odoo Framework learning""",
    'description': """
        - This module follows Odoo base documentation.
        - https://www.odoo.com/documentation/14.0/fr/developer/reference/javascript/javascript_reference.html#overview
    """,
    'author': "Renier Ferrer",
    'website': "https://fark-91.github.io/Portafolio/",
    'category': 'Uncategorized',
    'version': '14.0.0.1',
    'application': False,
    'depends': ["base", "web", "stock_barcode"],
    "qweb": [
        'static/src/xml/CustomLinesWidget.xml',
    ],
    'data': [
        'views/assets.xml',
    ]
}
