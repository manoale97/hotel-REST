<h1>API REST</h1>
<h2>Ambiente de desarrollo</h2>
<p>-Clone el repositorio</p>
<p>-Cree su archivo .env (Puede encontrar la estructura al final de este archivo)</p>
<p>-Configure en su sistema un manejador de base de datos MySQL en el puerto 3306, puede usar clientes como LARAGON O WAMP para probar</p>
<p>-Ingrese al directorio en la consola y ejecute "npm run init-db" (si ya lo hizo previamente en la API GRAPHQL no hace falta hacerlo de nuevo)</p>
<p>-La inicializacion de la base de datos esta hecha con faker.js para crear 5000 usuarios, 500 habitaciones y 50000 reservas</p>
<p>-Una vez la inicializacion de la base de datos este correcta corra el comando "npm run dev"</p>
<p>-Ingrese al URL http://localhost:3306/api/{rutaNecesaria} (o el puerto que haya asignado en MYSQL)</p>
<p>-Las rutas se encuentran en el archivo server.js y en el directorio routes</p>
<br>
<br>
<h2>Ambiente con docker compose</h2>
<p>*****Importante debe tener instalado docker en su sistema*****</p>
<p>-Clone este repositorio junto con el repositorio de la API GRAPHQL</p>
<p>Link para el repositorio REST:</p>
<a href='https://github.com/manoale97/hotel-graphql.git'>API GRAPHQL</a>
<p>La estructura de carpetas debe quedar de esta manera:</p>
<img width="306" height="310" alt="Diagrama directorios" src="https://github.com/user-attachments/assets/7908f4cf-b545-4058-a915-4bb3042073e7" />
<p>-El archivo docker-compose.yml se encuentra en los dos repositorios, debe copiar este archivo al directorio principal</p>
<p>-Agregar los archivos .env en cada repositorio</p>
<p>-En la consola ingresamos al directorio principal</p>
<p>-Ejecutamos el docker compose con el comando: docker compose up</p>
<p>El sistema funcionará por defecto con el puerto 4000 a la API graphql, 3000 para REST y 3306 para MySQL</p>

<h3>Estructura archivo .env</h3>
******************************************
PORT=4000
JWT_SECRET=/*clave secreta que desee definir*/

# Configuración MySQL (misma BD que GRAPHQL)
DB_HOST=localhost
DB_PORT=3306
DB_USER=/*usuario mysql*/
DB_PASSWORD=/*password mysql*/
DB_NAME=/*nombre de la base de datos*/
DB_DIALECT=mysql
******************************************
