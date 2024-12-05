# Endpoints

## Q1.- Listar los datos de todas las oficinas.

```bash
ESTRUCTURA:
GET /api/oficinas/

URI:
http://localhost:3000/api/oficinas
```

## Q2.- Listar los envíos realizados en determinada oficina con estatus en tránsito.

```bash
ESTRUCTURA:
GET /api/oficinas/envios/transito/:oficina_id

URI:
http://localhost:3000/api/oficinas/envios/transito/oficinauno
```

## Q3.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/porTipo/:tipoEnvio

URI:
http://localhost:3000/api/oficinas/envios/porTIpo/terrestre
```

## Q4.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/envios/cliente/:curp_id

URI:
http://localhost:3000/api/oficinas/envios/cliente/CURP11111
```

## Q5.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/oficina/:oficina_id

URI:
http://localhost:3000/api/oficinas/envios/oficina/oficinados
```

## Q6.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/estatus/entregados

URI:
http://localhost:3000/api/oficinas/envios/estatus/entregados
```

## Q7.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/terrestres

URI:
http://localhost:3000/api/oficinas/envios/terrestres
```

## Q8.-

```bash
ESTRUCTURA:
GET /api/oficinas/envios/express/:oficina_id

URI:
http://localhost:3000/api/oficinas/envios/express/oficinados
```

## Añadir un nuevo cliente

```bash
ESTRUCTURA:
POST /api/clientes/
URI:
http://localhost:3000/api/clientes

BODY:
{
  "curp_id": "CURP77777",
  "nombres": "Juan",
  "apellidos": {
    "paterno": "Pérez",
    "materno": "García"
  },
  "email": "jp@gmail.com"
}
```

## Añadir un nuevo envío

```bash
ESTRUCTURA:
POST /api/oficinas/:oficina_id/envios/:curp_id

URI:
http://localhost:3000/api/oficinas/oficinatres/envios/CURP77777

BODY:
{
    "envio_id": "5678",
    "fecha_envio": "2024-12-05",
    "destino": "Ciudad X",
    "tipo_envio": {
        "descripcion": "terrestre",
        "precio_km": 10,
        "tiempo_entrega": "2 días"
    },
    "cliente": {
        "curp_id": "CURP77777",
        "nombre": "Juan",
        "apellidos": {
            "paterno": "Pérez",
            "materno": "García"
        },
        "email": "juan@example.com"
    },
    "peso": 5,
    "dimensiones": {
        "alto": 20,
        "ancho": 15,
        "profundidad": 10
    },
    "costo": 100,
    "estatus": "tránsito"
}

```

# Datos de prueba
```bash
use empresa
db.oficinas.insertMany(
	[
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
	]	
)

db.clientes.insertMany([
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
```