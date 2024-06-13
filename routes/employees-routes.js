 const express = require('express')

 const router = express.Router()

 const employees = [
       {
           "id": "266296",
           "identificationCode": "22782742",
           "companyAccount": false,
           "name": "\t User - Tarjeta De  Regalo Corpo",
           "employeeCode": "5s1dv0s"
       },
       {
           "id": "256714",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion - Farmacia ",
           "employeeCode": "123221"
       },
       {
           "id": "262866",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion  Test",
           "employeeCode": "91023912"
       },
       {
           "id": "243805",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion - Combustible",
           "employeeCode": "7189634562"
       },
       {
           "id": "243835",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Asignacion - Comida",
           "employeeCode": "456494564"
       },
       {
           "id": "256660",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion - Farmacia S.fripick",
           "employeeCode": "H8392J3"
       },
       {
           "id": "256753",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion - Combustible S.fripick",
           "employeeCode": "19320391"
       },
       {
           "id": "256615",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion - Comida S.fripick",
           "employeeCode": "9q09w9e8"
       },
       {
           "id": "262470",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion 2  - Farmacia",
           "employeeCode": "12903j19021"
       },
       {
           "id": "262472",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion 3  - Farmacia S.fripick",
           "employeeCode": "n12n9i3n12"
       },
       {
           "id": "243838",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria - Comida",
           "employeeCode": "147852369"
       },
       {
           "id": "256663",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria  - Farmacia S.fripick",
           "employeeCode": "H78WJ"
       },
       {
           "id": "243881",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria - Combustible",
           "employeeCode": "5646465445"
       },
       {
           "id": "256756",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria - Combustible S.fripick",
           "employeeCode": "hJKA831"
       },
       {
           "id": "256717",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria - Farmacia ",
           "employeeCode": "12321er"
       },
       {
           "id": "256618",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Asignacion Diaria  - Comida S.fripick",
           "employeeCode": "ji39i23"
       },
       {
           "id": "263844",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta  Empresa Prod",
           "employeeCode": "05dv"
       },
       {
           "id": "256795",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Combustible",
           "employeeCode": "CU84920"
       },
       {
           "id": "256798",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Comida",
           "employeeCode": "CU837839"
       },
       {
           "id": "256654",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Comida S.fripick",
           "employeeCode": "H2J3H2"
       },
       {
           "id": "256747",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Farmacia ",
           "employeeCode": "j1k2491824"
       },
       {
           "id": "256708",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Farmacia S.fripick",
           "employeeCode": "3419204"
       },
       {
           "id": "256792",
           "identificationCode": "",
           "companyAccount": true,
           "name": "Cuenta Empresa - Combustible S.fripick",
           "employeeCode": "CU83932"
       },
       {
           "id": "306736",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Fripick Supermercado",
           "employeeCode": "d2c20bnm05"
       },
       {
           "id": "298924",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Fripick Id Igual  25/5/2021 #3",
           "employeeCode": "51adf0"
       },
       {
           "id": "298915",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Fripick Id Igual  25/5/2021 #2",
           "employeeCode": "02c0sd"
       },
       {
           "id": "269359",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Iser Farmacia Tarjeta De Regalo  Regresion 12/11/2020. S.fripick",
           "employeeCode": "51d5s1d"
       },
       {
           "id": "254872",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Jose Enrique Garcia Riva",
           "employeeCode": "234982934"
       },
       {
           "id": "243998",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Lim / Sub / Asignacion / Asig Diaria - Comida",
           "employeeCode": "65465456484845165"
       },
       {
           "id": "243995",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Lim / Sub / Asignacion / Asig Diaria - Combustible",
           "employeeCode": "85965412365"
       },
       {
           "id": "243826",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Comida",
           "employeeCode": "74185296"
       },
       {
           "id": "243799",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Combustible",
           "employeeCode": "748596464654"
       },
       {
           "id": "256759",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Combustible S.fripick",
           "employeeCode": "gh920192"
       },
       {
           "id": "256720",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Farmacia ",
           "employeeCode": "jj12k38"
       },
       {
           "id": "256621",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Comida S.fripick",
           "employeeCode": "hi3902"
       },
       {
           "id": "256666",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito - Farmacia  S.fripick",
           "employeeCode": "j23k40"
       },
       {
           "id": "256627",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito Cero - Comida S.fripick",
           "employeeCode": "fh39102"
       },
       {
           "id": "256672",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito Cero - Farmacia",
           "employeeCode": "h32j3j"
       },
       {
           "id": "256678",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito Cero - Farmacia S.fripick",
           "employeeCode": "j292j23"
       },
       {
           "id": "256765",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Credito Cero - Combustible S.fripick",
           "employeeCode": "j3j2j3h4"
       },
       {
           "id": "256624",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario - Comida S.fripick",
           "employeeCode": "0301"
       },
       {
           "id": "243829",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario - Comida",
           "employeeCode": "74185236"
       },
       {
           "id": "243802",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario - Combustible",
           "employeeCode": "745648413"
       },
       {
           "id": "256762",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario - Combustible S.fripick",
           "employeeCode": "2223223233"
       },
       {
           "id": "374328",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario  21/4/2022",
           "employeeCode": "as31a3d20c3"
       },
       {
           "id": "256723",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Limite Diario - Farmacia ",
           "employeeCode": "0f0g021"
       },
       {
           "id": "298367",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Mismo  Fripick Id",
           "employeeCode": "1213654789a"
       },
       {
           "id": "256657",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Ordenar Por Otro - Comida S.fripick",
           "employeeCode": "H932049"
       },
       {
           "id": "256750",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Ordenar Por Otro - Farmacia",
           "employeeCode": "21o230912"
       },
       {
           "id": "256711",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Ordenar Por Otro - Farmacia S.fripick",
           "employeeCode": "1hj23j12"
       },
       {
           "id": "254722",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Prueba 151",
           "employeeCode": "dfvdf"
       },
       {
           "id": "256636",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sin Sub - Comida S.fripick",
           "employeeCode": "j2i2ij32"
       },
       {
           "id": "250369",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sin Sub - Farmacia",
           "employeeCode": "8091223"
       },
       {
           "id": "256774",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sin Sub - Combustible S.fripick",
           "employeeCode": "jjk2k22k2"
       },
       {
           "id": "256687",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sin Sub - Farmacia S.fripick",
           "employeeCode": "j38hk2"
       },
       {
           "id": "256768",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub % - Combustible S.fripick",
           "employeeCode": "JAJKDI203"
       },
       {
           "id": "243814",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub %  - Combustible",
           "employeeCode": "1564864546"
       },
       {
           "id": "243844",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub %  - Comida",
           "employeeCode": "78945621"
       },
       {
           "id": "256630",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub % - Comida S.fripick",
           "employeeCode": "j120312"
       },
       {
           "id": "256681",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub % - Farmacia S.fripick",
           "employeeCode": "h2k340"
       },
       {
           "id": "256726",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub % - Farmacia ",
           "employeeCode": "007jk3"
       },
       {
           "id": "243989",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub % 2 - Comida ",
           "employeeCode": "74859652"
       },
       {
           "id": "266082",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub 65 - Comida",
           "employeeCode": "1j230j1k2"
       },
       {
           "id": "256741",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Farmacia ",
           "employeeCode": "998209312"
       },
       {
           "id": "256702",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Farmacia S.fripick",
           "employeeCode": "ert2312"
       },
       {
           "id": "256786",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Combustible S.fripick",
           "employeeCode": "HJ38KJ"
       },
       {
           "id": "243847",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Comida",
           "employeeCode": "95175468"
       },
       {
           "id": "243823",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Combustible",
           "employeeCode": "12569548751"
       },
       {
           "id": "256648",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado - Comida S.fripick",
           "employeeCode": "H34H2"
       },
       {
           "id": "244004",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Combinado 2 - Comida 2",
           "employeeCode": "354856213"
       },
       {
           "id": "243820",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis - Combustible",
           "employeeCode": "963147546"
       },
       {
           "id": "243850",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis - Comida",
           "employeeCode": "7412589632"
       },
       {
           "id": "256699",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis % - Farmacia S.fripick",
           "employeeCode": "hh4j324"
       },
       {
           "id": "254913",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis % - Comida",
           "employeeCode": "171283712"
       },
       {
           "id": "256783",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis % - Combustible S.fripick",
           "employeeCode": "ADS5464"
       },
       {
           "id": "256645",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis % - Comida S.fripick",
           "employeeCode": "H2321J"
       },
       {
           "id": "256738",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis % - Farmacia ",
           "employeeCode": "mkji2k12"
       },
       {
           "id": "256642",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis Monto - Comida S.fripick",
           "employeeCode": "D3243F"
       },
       {
           "id": "256735",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis Monto - Farmacia ",
           "employeeCode": "12381242"
       },
       {
           "id": "256696",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis Monto - Farmacia S.fripick",
           "employeeCode": "jaksj3423"
       },
       {
           "id": "256780",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub E Itbis Monto - Combustible S.fripick",
           "employeeCode": "hr3234"
       },
       {
           "id": "256639",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Itbis  - Comida S.fripick",
           "employeeCode": "h34j234"
       },
       {
           "id": "256732",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Itbis - Farmacia ",
           "employeeCode": "293J49K3"
       },
       {
           "id": "243817",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Itbis - Combustible",
           "employeeCode": "4564651821"
       },
       {
           "id": "256693",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Itbis - Farmacia S.fripick",
           "employeeCode": "j1o230821"
       },
       {
           "id": "256777",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Itbis - Combustible S.fripick",
           "employeeCode": "FG5645"
       },
       {
           "id": "243811",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Combustible",
           "employeeCode": "123564564"
       },
       {
           "id": "256729",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Farmacia",
           "employeeCode": "2391202"
       },
       {
           "id": "243841",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Comida",
           "employeeCode": "74158296321"
       },
       {
           "id": "256771",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Combustible S.fripick",
           "employeeCode": "19203901"
       },
       {
           "id": "243992",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto  - Comida 2",
           "employeeCode": "4654645646"
       },
       {
           "id": "256633",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Comida S.fripick",
           "employeeCode": "h8392j3h"
       },
       {
           "id": "256684",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Sub Monto - Farmacia S.fripick",
           "employeeCode": "k94k30"
       },
       {
           "id": "306725",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Super Mercado Cuenta Empresa",
           "employeeCode": "hn5fgf1"
       },
       {
           "id": "256651",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Comida S.fripick",
           "employeeCode": "G5YJJH"
       },
       {
           "id": "256744",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Farmacia",
           "employeeCode": "hj392034"
       },
       {
           "id": "256705",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Farmacia S.fripick",
           "employeeCode": "33E343"
       },
       {
           "id": "256789",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Combustible S.fripick",
           "employeeCode": "NMJH234"
       },
       {
           "id": "243832",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Comida",
           "employeeCode": "9512364"
       },
       {
           "id": "243808",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tarjeta De Regalo - Combustible",
           "employeeCode": "15694845613"
       },
       {
           "id": "269362",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Tipo Monto -  Farmacia S.fripick",
           "employeeCode": "s2d1ds"
       },
       {
           "id": "301728",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Todos Los Beneficios  Tipo Monto",
           "employeeCode": "sd2c05d"
       },
       {
           "id": "254916",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User  Corpo 25/6/2020",
           "employeeCode": "51sf51dsf"
       },
       {
           "id": "264212",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User -  Contratista S.fripick",
           "employeeCode": "fh2"
       },
       {
           "id": "264216",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User -  Contratistas",
           "employeeCode": "23s5dv"
       },
       {
           "id": "267367",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Asignacion S.fripick",
           "employeeCode": "515ds0fd"
       },
       {
           "id": "262862",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Farmacia  Tarjeta Regalo S.fripikc 20/8/2020",
           "employeeCode": "jdfnbf5"
       },
       {
           "id": "262859",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Farmacia Asignacion S.fripikc 20/8/2020",
           "employeeCode": "05ds10v"
       },
       {
           "id": "269991",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Tarjeta De  Regalo 19/11/20",
           "employeeCode": "2d10vd"
       },
       {
           "id": "266297",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Tarjeta De  Regalo Corpo 2",
           "employeeCode": "5d1fvd"
       },
       {
           "id": "264209",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User - Varias  Tarjetas De Regalo",
           "employeeCode": "251sd0f"
       },
       {
           "id": "262746",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Asignacion  Diaria Farmacia",
           "employeeCode": "0s50dv"
       },
       {
           "id": "262869",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Asignacion  Diaria Farmcia #2",
           "employeeCode": "02dc"
       },
       {
           "id": "262856",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Asignacion  Diaria Farmacia 26/8/2020",
           "employeeCode": "202d0v"
       },
       {
           "id": "262776",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Farmacia 20/8/2020",
           "employeeCode": "20s20cdc"
       },
       {
           "id": "262745",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Farmacia Regresion 24/8/2020 S.fripick",
           "employeeCode": "202dc0sd"
       },
       {
           "id": "262832",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Limite Asignacion Diaria +  Limite - Farmcia S.fripikc",
           "employeeCode": "20d2cvsd"
       },
       {
           "id": "263909",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Movil Regresion 15/9/2020",
           "employeeCode": "20sd2c0"
       },
       {
           "id": "263979",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User Tarjeta De Regalo  De 10 Pesos",
           "employeeCode": "20sdfv"
       },
       {
           "id": "264249",
           "identificationCode": "",
           "companyAccount": false,
           "name": "User- Prueba Contratista",
           "employeeCode": "20s2fv"
       },
       {
           "id": "298927",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Usuario  Cedula",
           "employeeCode": "20dcn"
       },
       {
           "id": "362415",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Usuario  Test2522022",
           "employeeCode": "Test2522022"
       },
       {
           "id": "298933",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Usuario  Cedula 3",
           "employeeCode": "919-4305434-3"
       },
       {
           "id": "567203",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Usuario Periodo 10 Y 25",
           "employeeCode": "010-2544589-5"
       },
       {
           "id": "567798",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Usuario Quincenal 15 Y 30",
           "employeeCode": "018-4375649-3"
       },
       {
           "id": "264215",
           "identificationCode": "",
           "companyAccount": false,
           "name": "Visitante Efectivo",
           "employeeCode": "1823h912381h"
       }
   ]

 router.get('/', (req, res, next) => {
    res.json(employees)
 })

 module.exports = router