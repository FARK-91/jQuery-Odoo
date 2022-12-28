# -*- coding: utf-8 -*-
{
    'name': "Barcode Workflow Improvements",
    'summary': """
        Barcode General Improvements""",
    'description': """
        - New element added in barcode pciking UI.
        - [QTY Done] / [QTY Demand]
    """,
    'author': "Renier Ferrer",
    'website': "",
    'category': 'Uncategorized',
    'version': '14.0.0.1',
    'application': False,
    'depends': ["base", "web", "stock_barcode"],
    "qweb": [
        'static/src/xml/lines_widget.xml',
    ],
    'data': [
        'views/assets.xml',
    ]
}
