
use('empresa');

db.getCollection('oficinas').insertMany([
    {
        "oficina_id":"oficinauno",
        "nombre":"Oficina Tepic",
        "dirección":{
            "calle":"Av. Ignacio Allende",
            "numero":7,
            "ciudad":"Tepic",
            "cp":63000
        },
        "telefono":"3111234567",
        "email":"oficinaTepic@gmail.com",
        "envios":[
            {
                "envio_id":"01C11111",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinados",
                "tipo_envio":{
                    "descripcion":"terrestre",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP11111",
                    "nombres":"José Miguel",
                    "apellidos":{
                        "paterno":"Reyes",
                        "materno":"Delgado"
                        },
                    "email":"jmrd@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"tránsito"
            },
            {
                "envio_id":"02C11111",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinatres",
                "tipo_envio":{
                    "descripcion":"aereo",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP11111",
                    "nombres":"José Miguel",
                    "apellidos":{
                        "paterno":"Reyes",
                        "materno":"Delgado"
                        },
                    "email":"jmrd@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"pendiente"
            },
            {
                "envio_id":"01C22222",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinatres",
                "tipo_envio":{
                    "descripcion":"express",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP22222",
                    "nombres":"María Teresa",
                    "apellidos":{
                        "paterno":"López",
                        "materno":"Vizcaíno"
                        },
                    "email":"mtlv@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"entregado"
            },
            {
                "envio_id":"01C44444",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinados",
                "tipo_envio":{
                    "descripcion":"terrestre",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP44444",
                    "nombres":"Clara",
                    "apellidos":{
                        "paterno":"Zamudio",
                        "materno":"Guerrero"
                        },
                    "email":"czg@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"tránsito"
            }
        ]
    },
    {
        "oficina_id":"oficinados",
        "nombre":"Oficina Monterrey",
        "dirección":{
            "calle":"C. Aramberri",
            "numero":111,
            "ciudad":"Monterrey",
            "cp":64000
        },
        "telefono":"811234567",
        "email":"oficinaMonterrey@gmail.com",
        "envios":[
            {
                "envio_id":"02C22222",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinauno",
                "tipo_envio":{
                    "descripcion":"express",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP22222",
                    "nombres":"María Teresa",
                    "apellidos":{
                        "paterno":"López",
                        "materno":"Vizcaíno"
                        },
                    "email":"mtlv@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"pendiente"
            },
            {
                "envio_id":"03C22222",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinatres",
                "tipo_envio":{
                    "descripcion":"terrestre",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP22222",
                    "nombres":"María Teresa",
                    "apellidos":{
                        "paterno":"López",
                        "materno":"Vizcaíno"
                        },
                    "email":"mtlv@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"entregado"
            },
            {
                "envio_id":"02C44444",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinauno",
                "tipo_envio":{
                    "descripcion":"aereo",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP44444",
                    "nombres":"Clara",
                    "apellidos":{
                        "paterno":"Zamudio",
                        "materno":"Guerrero"
                        },
                    "email":"czg@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"tránsito"
            }
        ]
    },
    {
        "oficina_id":"oficinatres",
        "nombre":"Oficina Mérida",
        "dirección":{
            "calle":"C. 59",
            "numero":563,
            "ciudad":"Mérida",
            "cp":97000
        },
        "telefono":"999234567",
        "email":"oficinaMerida@gmail.com",
        "envios":[
            {
                "envio_id":"03C11111",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinados",
                "tipo_envio":{
                    "descripcion":"terrestre",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP11111",
                    "nombres":"José Miguel",
                    "apellidos":{
                        "paterno":"Reyes",
                        "materno":"Delgado"
                        },
                    "email":"jmrd@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"entregado"
            },
            {
                "envio_id":"01C33333",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinauno",
                "tipo_envio":{
                    "descripcion":"terrestre",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP33333",
                    "nombres":"Andrés",
                    "apellidos":{
                        "paterno":"Camacho",
                        "materno":"Murillo"
                        },
                    "email":"acm@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"pendiente"
            },
            {
                "envio_id":"02C33333",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinados",
                "tipo_envio":{
                    "descripcion":"express",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP33333",
                    "nombres":"Andrés",
                    "apellidos":{
                        "paterno":"Camacho",
                        "materno":"Murillo"
                        },
                    "email":"acm@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"entregado"
            },
            {
                "envio_id":"03C44444",
                "fecha_envio": "2024-11-01T00:00:00Z",
                "destino":"oficinauno",
                "tipo_envio":{
                    "descripcion":"aereo",
                    "precio_km": 5,
                    "tiempo_entrega":"2 días"
                },
                "cliente":{
                    "curp_id":"CURP44444",
                    "nombres":"Clara",
                    "apellidos":{
                        "paterno":"Zamudio",
                        "materno":"Guerrero"
                        },
                    "email":"czg@gmail.com"
                },
                "peso":"2 kg",
                "dimensiones": {"alto":30, "ancho":20, "profundidad":15},
                "costo":500,
                "estatus":"entregado"
            }
        ]
    }
])
db.getCollection('clientes').insertMany([
    {
		"curp_id":"CURP11111",
		"nombres":"José Miguel",
		"apellidos":{
			"paterno":"Reyes",
			"materno":"Delgado"
		},
		"email":"jmrd@gmail.com",
		"envios":[
			{
				"envio_id":"01C11111",
				"origen": "oficinauno",
				"destino": "oficinados",
				"tipo_envio":"terrestre",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"tránsito"
			},
			{
				"envio_id":"02C11111",
				"origen": "oficinauno",
				"destino": "oficinatres",
				"tipo_envio":"aereo",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"pendiente"
			},
			{
				"envio_id":"03C11111",
				"origen": "oficinatres",
				"destino": "oficinados",
				"tipo_envio":"terrestre",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"entregado"
			}
		]
	},
	{
		"curp_id":"CURP22222",
		"nombres":"María Teresa",
		"apellidos":{
			"paterno":"López",
			"materno":"Vizcaíno"
		},
		"email":"mtlv@gmail.com",
		"envios":[
			{
				"envio_id":"01C22222",
				"origen": "oficinauno",
				"destino": "oficinatres",
				"tipo_envio":"express",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"entregado"
			},
			{
				"envio_id":"02C22222",
				"origen": "oficinados",
				"destino": "oficinauno",
				"tipo_envio":"express",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"pendiente"
			},
			{
				"envio_id":"03C22222",
				"origen": "oficinados",
				"destino": "oficinatres",
				"tipo_envio":"terrestre",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"entregado"
			}
		]
	},
	{
		"curp_id":"CURP33333",
		"nombres":"Andrés",
		"apellidos":{
			"paterno":"Camacho",
			"materno":"Murillo"
		},
		"email":"acm@gmail.com",
		"envios":[
			{
				"envio_id":"01C33333",
				"origen": "oficinatres",
				"destino": "oficinauno",
				"tipo_envio":"terrestre",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"pendiente"
			},
			{
				"envio_id":"02C33333",
				"origen": "oficinatres",
				"destino": "oficinados",
				"tipo_envio":"express",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"entregado"
			}
		]
	},
	{
		"curp_id":"CURP44444",
		"nombres":"Clara",
		"apellidos":{
			"paterno":"Zamudio",
			"materno":"Guerrero"
		},
		"email":"czg@gmail.com",
		"envios":[
			{
				"envio_id":"01C44444",
				"origen": "oficinauno",
				"destino": "oficinados",
				"tipo_envio":"terrestre",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"tránsito"
			},
			{
				"envio_id":"02C44444",
				"origen": "oficinados",
				"destino": "oficinauno",
				"tipo_envio":"aereo",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"tránsito"
			},
			{
				"envio_id":"03C44444",
				"origen": "oficinatres",
				"destino": "oficinauno",
				"tipo_envio":"aereo",
				"fecha_envio": "2024-11-01T00:00:00Z",
				"peso": "2 kg",
				"dimensiones": {"alto":30, "ancho":20, "profundidad":15},
				"costo":500,
				"estatus":"entregado"
			}
		]
	}
])

//Q1. Listar los datos de todas las oficinas.
use('empresa');
const Q1 = db.getCollection('oficinas').find({}, {_id:0, envios:0});
console.log(Q1);

//Q2. Listar los envios realizados en determinada oficina con estatus en tránsito 
use('empresa');
db.getCollection('oficinas').aggregate([
    { $match: { oficina_id: "oficinauno" } }, 
    { $unwind: "$envios" },
    { $match: { "envios.estatus": "tránsito" } },
    { $project: { _id: 0, envio: "$envios" } }
  ]);

//Q3. Listar los envíos que utilizan un tipo específico de envío
use('empresa');
db.getCollection('oficinas').aggregate([
    { $unwind: "$envios" },
    { $match: { "envios.tipo_envio.descripcion": "terrestre" } },
    { $project: { _id: 0, envio: "$envios" } }
  ]);

//Q4. Listar los envíos realizados por un cliente en específico en todas las oficinas
use('empresa');
db.getCollection('oficinas').aggregate([
    { $unwind: "$envios" },
    { $match: { "envios.cliente.curp_id": "CURP11111" } },
    { $project: { _id: 0, envio: "$envios" } }
  ]);

//Q5. Listar los clientes que han realizado envíos en una determinada oficina
use('empresa');
db.getCollection('oficinas').aggregate([
    { $match: { oficina_id: "oficinauno" } }, 
    { $unwind: "$envios" },
    { $group: {
        _id: "$envios.cliente.curp_id",
        nombres: { $first: "$envios.cliente.nombres" },
        apellidos: { $first: "$envios.cliente.apellidos" },
        email: { $first: "$envios.cliente.email" }
      }
    }
  ]);

//Q6. Listar los envíos de todas las oficinas con estatus de entregado
use('empresa');
db.getCollection('oficinas').aggregate([
    { $unwind: "$envios" },
    { $match: { "envios.estatus": "entregado" } },
    { $project: { _id: 0, envio: "$envios" } }
  ]);

//Q7. Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas
use('empresa');
db.getCollection('oficinas').aggregate([
    { $unwind: "$envios" },
    { $match: { "envios.tipo_envio.descripcion": "terrestre" } },
    { $project: {
        _id: 0,
        cliente: "$envios.cliente",
        envio: "$envios"
      }
    }
  ]);

//Q8. Listar los clientes y sus envíos que se han remitido por el servicio express considerando una oficina en específico// Cambiar "CURP11111" por el CURP del cliente deseado
use('empresa');
db.getCollection('oficinas').aggregate([
    { $match: { oficina_id: "oficinauno" } }, 
    { $unwind: "$envios" },
    { $match: { "envios.tipo_envio.descripcion": "express" } },
    { $project: {
        _id: 0,
        cliente: "$envios.cliente",
        envio: "$envios"
      }
    }
  ]);