# Cliente MQTT para inserción de datos en Supabase

TODO: Descripción del cliente.

## Instalación

TODO: El proceso de instalación es el siguiente.

## Variables de entorno

Las variables de entorno (`.env`) que se tienen que definir para que el programa funcione correctamente son las siguientes:

- `SB_URI` define la URI de la base de datos de Supabase.
- `SB_KEY` define la llave que provee Supabase para realizar conexiones.
- `BROKER_URI` define la URI del broker de MQTT que se está utilizando.
- `MQTT_TOPIC` define el tema al que se suscribe este cliente.

El archivo `.env` no viene incluido en el repositorio. Antes de ejecutar el cliente
se debe crear y configurar.

## Ejecución

Una vez creado el archivo `.env`, utiliza el siguiente comando para ejecutar el cliente:

```bash
deno task dev
```
