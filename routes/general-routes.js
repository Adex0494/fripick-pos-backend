const express = require('express')

const router = express.Router()

const catalogs = {
    "catalogs": [
        {
            "id": 21802,
            "deliveryTypes": [
                {
                    "id": 2,
                    "name": "En Local",
                    "active": true,
                    "deliveryDateWithTime": "2019-05-15 23:59:00",
                    "deliveryDate": "15/05/2019",
                    "date": "11:59 PM"
                }
            ],
            "taxService": false,
            "items": [
                {
                    "tags": "agua,azul,verde",
                    "categoryColor": "",
                    "displayablePrice": "336.00 - 530.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": true,
                    "sku": "",
                    "id": 83272,
                    "categoryName": "",
                    "price": "336.00 - 530.00",
                    "name": "Combo PPP",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "100.00",
                    "taxTypes": [
                        "16.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 418306,
                    "categoryName": "",
                    "price": "100.00",
                    "name": "Fripick Edicion items",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "5.00",
                    "taxTypes": [],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 418312,
                    "categoryName": "",
                    "price": "5.00",
                    "name": "Prod 1 ",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "2,000.00",
                    "taxTypes": [],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 418315,
                    "categoryName": "",
                    "price": "2000.00",
                    "name": "Prod 2 ",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "80.00",
                    "taxTypes": [],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 418318,
                    "categoryName": "",
                    "price": "80.00",
                    "name": "Prod 3 ",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "36.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 418321,
                    "categoryName": "",
                    "price": "36.00",
                    "name": "Producto 18% ",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "1.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 555126,
                    "categoryName": "",
                    "price": "1.00",
                    "name": "prueba imagenes",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "5.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 591054,
                    "categoryName": "",
                    "price": "5.00",
                    "name": "Coca zero prueba",
                    "catalogId": 21802,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "1.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 21802,
                    "combo": false,
                    "sku": "",
                    "id": 603337,
                    "categoryName": "",
                    "price": "1.00",
                    "name": "choco b test product",
                    "catalogId": 21802,
                    "quantity": 0
                }
            ],
            "name": "18 Abril",
            "dateTimeClose": "2024-06-11 23:00:00.0",
            "active": true,
            "catalogTypeId": 2,
            "deliveryDate": "11/06/2024",
            "express": false
        },
        {
            "id": 25680,
            "deliveryTypes": [
                {
                    "id": 2,
                    "name": "En Local",
                    "active": true,
                    "deliveryDateWithTime": "2019-05-15 23:59:00",
                    "deliveryDate": "15/05/2019",
                    "date": "11:59 PM"
                }
            ],
            "taxService": false,
            "items": [
                {
                    "tags": "agua,azul,verde",
                    "categoryColor": "",
                    "displayablePrice": "336.00 - 530.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 25680,
                    "combo": true,
                    "sku": "",
                    "id": 83272,
                    "categoryName": "",
                    "price": "336.00 - 530.00",
                    "name": "Combo PPP",
                    "catalogId": 25680,
                    "quantity": 0
                },
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "169.49",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 25680,
                    "combo": false,
                    "sku": "",
                    "id": 456365,
                    "categoryName": "",
                    "price": "169.49",
                    "name": "Test 25",
                    "catalogId": 25680,
                    "quantity": 0
                }
            ],
            "name": "Test 25",
            "dateTimeClose": "2024-06-11 23:00:00.0",
            "active": false,
            "catalogTypeId": 2,
            "deliveryDate": "11/06/2024",
            "express": false
        },
        {
            "id": 29489,
            "deliveryTypes": [
                {
                    "id": 2,
                    "name": "En Local",
                    "active": true,
                    "deliveryDateWithTime": "2019-05-15 23:59:00",
                    "deliveryDate": "15/05/2019",
                    "date": "11:59 PM"
                }
            ],
            "taxService": false,
            "items": [
                {
                    "tags": "",
                    "categoryColor": "",
                    "displayablePrice": "100.00",
                    "taxTypes": [
                        "18.00"
                    ],
                    "catalogIdAsInt": 29489,
                    "combo": false,
                    "sku": "",
                    "id": 539539,
                    "categoryName": "",
                    "price": "100.00",
                    "name": "Catalogos nuevo",
                    "catalogId": 29489,
                    "quantity": 0
                }
            ],
            "name": "Catalogos nuevo",
            "dateTimeClose": "2024-06-11 23:00:00.0",
            "active": false,
            "catalogTypeId": 2,
            "deliveryDate": "11/06/2024",
            "express": false
        }
    ],
    "currentDateTime": "2024/06/11 09:51:13"
}

const latestItems = [
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "100.00",
        "taxTypes": [
            "16.00"
        ],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 418306,
        "categoryName": "",
        "price": "100.00",
        "name": "Fripick Edicion items",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "5.00",
        "taxTypes": [],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 418312,
        "categoryName": "",
        "price": "5.00",
        "name": "Prod 1 ",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "2,000.00",
        "taxTypes": [],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 418315,
        "categoryName": "",
        "price": "2000.00",
        "name": "Prod 2 ",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "80.00",
        "taxTypes": [],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 418318,
        "categoryName": "",
        "price": "80.00",
        "name": "Prod 3 ",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "36.00",
        "taxTypes": [
            "18.00"
        ],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 418321,
        "categoryName": "",
        "price": "36.00",
        "name": "Producto 18% ",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "1.00",
        "taxTypes": [
            "18.00"
        ],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 555126,
        "categoryName": "",
        "price": "1.00",
        "name": "prueba imagenes",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "5.00",
        "taxTypes": [
            "18.00"
        ],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 591054,
        "categoryName": "",
        "price": "5.00",
        "name": "Coca zero prueba",
        "catalogId": 21802,
        "quantity": 0
    },
    {
        "tags": "",
        "categoryColor": "",
        "displayablePrice": "1.00",
        "taxTypes": [
            "18.00"
        ],
        "catalogIdAsInt": 21802,
        "combo": false,
        "sku": "",
        "id": 603337,
        "categoryName": "",
        "price": "1.00",
        "name": "choco b test product",
        "catalogId": 21802,
        "quantity": 0
    }
]

const benefits = {
    "discountDate": "01/07/2024",
    "benefitsOrder": [
        {
            "id": "2722",
            "amount": "3000.00",
            "benefitType": "limiteDeCredito",
            "order": "1"
        }
    ],
    "catalogTypeId": 2,
    "deliveryDate": "11/06/2024",
    "benefits": [
        {
            "id": 1,
            "name": "Limite de Crédito",
            "cssClass": "limiteDeCredito",
            "balances": [
                {
                    "amount": "3000.00",
                    "name": "Balance Disponible",
                    "cssClass": "balanceDisponible"
                },
                {
                    "amount": "0.00",
                    "name": "Balance en Transito",
                    "cssClass": "balanceTransito"
                },
                {
                    "amount": "0.00",
                    "name": "Balance Consumido",
                    "cssClass": "balanceConsumido"
                }
            ]
        }
    ],
    "availableBalance": 3000,
    "creditLimitIsDaily": false
}

const combos = [
    {
        "combo": [
            {
                "id": 83272,
                "sections": [
                    {
                        "sectionId": 317539,
                        "additional": true,
                        "name": "Adicional",
                        "products": [
                            {
                                "id": 418312,
                                "price": "200.00",
                                "additional": false,
                                "name": "Prod 1 "
                            }
                        ]
                    },
                    {
                        "sectionId": 317542,
                        "additional": false,
                        "name": "S2",
                        "products": [
                            {
                                "id": 418321,
                                "price": "36.00",
                                "additional": false,
                                "name": "Producto 18% "
                            },
                            {
                                "id": 418324,
                                "price": "44.00",
                                "additional": false,
                                "name": "Producto 16% "
                            },
                            {
                                "id": 418327,
                                "price": "180.00",
                                "additional": false,
                                "name": "Producto No "
                            }
                        ]
                    },
                    {
                        "sectionId": 317545,
                        "additional": false,
                        "name": "S1",
                        "products": [
                            {
                                "id": 418306,
                                "price": "150.00",
                                "additional": false,
                                "name": "Fripick Edicion items"
                            },
                            {
                                "id": 418309,
                                "price": "100.00",
                                "additional": false,
                                "name": "Pechuga de Pollo "
                            }
                        ]
                    }
                ],
                "price": "336.00 - 530.00",
                "name": "Combo PPP",
                "taxTypes": [
                    "18.00"
                ],
                "applyServiceTax": false
            }
        ]
    }
]

router.get('/categories', (req, res, next) => {
    res.json({message: 'Categories'})
})

router.get('/companyBranchId', (req, res, next) => {
    res.json({"companyBranchId": 3283})
})

router.get('/catalogs', (req, res, next) => {
    res.json(catalogs)
})

router.get('/latestItems', (req, res, next) => {
    res.json(latestItems)
})

router.get('/benefits', (req, res, next) => {
    res.json(benefits)
})

router.get('/combo/:id', (req, res, next) => {
    const theCombo = combos.find(combo => combo.combo[0].id == req.params.id)
    res.json(theCombo?.combo[0])
})


module.exports = router