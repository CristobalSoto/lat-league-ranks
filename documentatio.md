# Documentación de Endpoints - ms-xperian-util

## Actividades

### Actividad 1: Endpoint CEDU0102 - Cédulas Estado

#### Aspectos Generales

La información básica del endpoint es la siguiente:

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta el estado de cédulas de identidad |
| **Path** | /api/xperian/cedulas/estado/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "180521690" |
| serie | String | Número de serie de la cédula | "522886621" |

**Ejemplo:**
json
{
    "rut": "180521690",
    "serie": "522886621"
}



---

### Actividad 2: Endpoint IRUT0202 - Morosidades

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de morosidades |
| **Path** | /api/xperian/morosidades/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "130053157" |

**Ejemplo:**
json
{
    "rut": "130053157"
}



---

### Actividad 3: Endpoint IRUT0502 - Quiebras

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de quiebras |
| **Path** | /api/xperian/quiebras/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "533106293" |

**Ejemplo:**
json
{
    "rut": "533106293"
}



---

### Actividad 4: Endpoint IRUT0702 - Infracciones Laborales

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de infracciones laborales |
| **Path** | /api/xperian/infracciones-laborales/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "271066252" |

**Ejemplo:**
json
{
    "rut": "271066252"
}



---

### Actividad 5: Endpoint IRUT1503 - Deuda Leasing

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de deuda leasing |
| **Path** | /api/xperian/deuda-leasing/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "269513950" |

**Ejemplo:**
json
{
    "rut": "269513950"
}



---

### Actividad 6: Endpoint IRUT1202 - Protestos Impagos

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de protestos impagos |
| **Path** | /api/xperian/protestos-impagos/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "130053157" |

**Ejemplo:**
json
{
    "rut": "130053157"
}



---

### Actividad 7: Endpoint IRUT1603 - Deudas

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de deudas |
| **Path** | /api/xperian/deudas/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "26452007K" |

**Ejemplo:**
json
{
    "rut": "26452007K"
}



---

### Actividad 8: Endpoint IRUT8202 - Protestos Vigentes

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de protestos vigentes |
| **Path** | /api/xperian/protestos-vigentes/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "113639202" |

**Ejemplo:**
json
{
    "rut": "113639202"
}



---

### Actividad 9: Endpoint SNCR0501 - Protestos en Trámite

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información de protestos en trámite |
| **Path** | /api/xperian/protestos-en-tramite/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "162465007" |

**Ejemplo:**
json
{
    "rut": "162465007"
}



---

### Actividad 10: Endpoint SNCR4401 - Directorio Full

#### Aspectos Generales

| **Componente** | **Valor** |
| --- | --- |
| **Descripción** | Consulta información del directorio full |
| **Path** | /api/xperian/directorio-full/obtener |
| **Método http** | POST |

#### Request a Experian

#### Request al ms-xperian-util

**Headers**

| **Key** | **Value** |
| --- | --- |
| Accept | application/json |
| Content-Type | application/json |
| Reference-Operation | operation |
| Reference-Service | service |
| application-id | WSB |
| authority | api-dsr01.bci.cl |
| channel | 980 |
| origin-addr | cloud |

**Body**

| **Parámetro** | **Tipo** | **Descripción** | **Ejemplo** |
| --- | --- | --- | --- |
| rut | String | RUT sin puntos ni guión | "101871436" |

**Ejemplo:**
json
{
    "rut": "101871436"
}



---

## Notas Adicionales

Todos los endpoints requieren autenticación OAuth2 Bearer token
El microservice actúa como proxy hacia los servicios de Experian
Las respuestas son devueltas tal como las proporciona Experian (raw response