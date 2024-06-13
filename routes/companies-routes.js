const express = require('express')

const router = express.Router()

const companies = [
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 112,
        "companyName": "AFP RESERVAS S A",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 408,
        "companyName": "Banco Santa Cruz",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 76,
        "companyName": "Banreservas",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 91,
        "companyName": "Fripick",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 165,
        "companyName": "HUMANO SEGUROS",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 283,
        "companyName": "Ministerio de Economía, Planificación y Desarrollo",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 470,
        "companyName": "Ministerio de Industria, Comercio y Mipymes",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 400,
        "companyName": "PAGES BBDO SRL",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 387,
        "companyName": "PIANTINI BM CARGO SRL",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 334,
        "companyName": "Scotiabank",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 269,
        "companyName": "SEGUROS PEPIN",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 61,
        "companyName": "Sunix ",
        "businessTypeName": "Comida Empresarial"
    },
    {
        "showTaxAmountType": true,
        "showInsurance": false,
        "businessTypeId": 1,
        "companyId": 59,
        "companyName": "Tropigas Dominicana",
        "businessTypeName": "Comida Empresarial"
    }
  ]

router.get('/', (req, res, next) => {
   res.json(companies)
})

module.exports = router