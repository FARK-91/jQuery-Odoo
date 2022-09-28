# -*- coding: utf-8 -*-
{
    'name': "tutorial",

    'summary': """
        JS Odoo Framework learning""",

    'description': """
        This is an example application to learn the basics of the JS framework.
    """,

    'author': "An Awesome Developer",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '14.0.0.1',

    'application': True,

    # any module necessary for this one to work correctly
    'depends': ["base", "web"],
    "qweb": [
        'static/src/xml/tutorial_quiz.xml',
        'static/src/xml/counter.xml',
        'static/src/xml/quizSelection.xml',
    ],

    # # always loaded
    'data': [
        'views/assets.xml',
        'views/views.xml',
    ]
}
