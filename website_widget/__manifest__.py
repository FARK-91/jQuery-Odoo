# -*- coding: utf-8 -*-
{
    'name': "Website Widget Custom Module",
    'summary': """
        Learning: How to create a website widget.""",
    'description': """
        - New JS custom module for website.
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
