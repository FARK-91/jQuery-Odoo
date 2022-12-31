# -*- coding: utf-8 -*-
{
    'name': "Ecommerce Pickup",
    'summary': """
        New feature pickup option in ecommerce.""",
    'description': """
        - New pickup option in ecommerce confirm step.
    """,
    'author': "Renier Ferrer",
    'website': "",
    'category': 'Uncategorized',
    'version': '14.0.0.1',
    'application': False,
    'depends': ["base", "web_editor", "website_sale"],
    "qweb": [
        # 'static/src/xml/lines_widget.xml',
    ],
    'data': [
        'views/assets.xml',
        'views/templates.xml',
    ]
}
