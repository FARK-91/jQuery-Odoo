{
    'name': 'Odoo Petstore - Javascript',
    'summary': '',
    'version': '13.0.1.0.0',
    'category': 'Extra Tools',
    'sequence': 1,
    'author': 'Portcities',
    'website': 'www.portcities.net',
    "depends": [
        'base',
        'sale_stock'
    ],
    "data": [
        'security/ir.model.access.csv',
        # 'data/petstore_data.xml',
        'data/oepetstore.message_of_the_day.csv',
        'views/templates.xml',
        'views/petstore.xml'
    ],
    'qweb': [
        "static/src/xml/base_template.xml"
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
    "license": "AGPL-3",
}
