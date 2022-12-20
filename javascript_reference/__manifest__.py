# -*- coding: utf-8 -*-
{
    'name': "Odoo 14 Javascript Reference",
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
    'depends': ["base", "web"],
    "qweb": [
        'static/src/xml/counter.xml',
    ],
    'data': [
        'views/assets.xml',
    ]
}
