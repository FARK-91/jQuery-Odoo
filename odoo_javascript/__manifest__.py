{
    'name': 'odoo_javascript',
    'summary': '',
    'version': '13.0.1.0.0',
    'category': 'Extra Tools',
    'sequence': 1,
    'author': 'Renier Ferrer',
    'website': 'https://fark-91.github.io/Portafolio/',
    "depends": [
        'base',
        'sale_stock'
    ],
    "data": [
        'security/ir.model.access.csv',
        'views/templates.xml',
        'views/test_views.xml'
    ],
    'qweb': [
        # "static/src/xml/base_template.xml"
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
    "license": "AGPL-3",
}
