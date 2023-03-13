# Cliente MQTT para inserción de datos en Supabase

El presente programa funciona como un cliente MQTT el cual se suscribe a un tópico especificado en un bróker público de Hive MQ. 
Este es notificado por el bróker MQTT al momento de este último recibir un mensaje proveniente de otro cliente publicista. 
Después, los datos de los mensajes son almacenados en una base de datos alojada en Supabase.


## Instalación

TODO: El proceso de instalación es el siguiente.
Se instala el cliente de supabase mediante el CLI vía "npm install @supabase/supabase-js".
Se importan las librerías correspondientes al cliente mqtt de Deno y el cliente de Supabase.

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
## Información Extra

La base de datos alojada en Supabase está compuesta de nueve campos, estos son: id, estampa de tiempo, id de la estación, nombre de la estación
y las variables climáticas: temperatura, humedad relativa, presión atmosférica, velocidad del viento y humedad del suelo.
La URI se obtiene a partir de acceder a las opciones del proyecto en el dashboard de proyecto de Supabase -> opciones del proyecto -> opciones de la API -> URL
La llave de acceso pública (KEY) se obtienen a partir de la siguiente ruta: dashboard de proyecto -> opciones del proyecto -> opciones de la API -> Project API keys -> anon public
