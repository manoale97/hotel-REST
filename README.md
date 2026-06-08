<h1>API REST</h1>
<p>-Clone el repositorio</p>
<p>-Configure en su sistema un manejador de base de datos MySQL en el puerto 3306, puede usar clientes como LARAGON O WAMP para probar</p>
<p>-Ingrese al directorio en la consola y ejecute "npm run init-db" (si ya lo hizo previamente en la API GRAPHQL no hace falta hacerlo de nuevo)</p>
<p>-La inicializacion de la base de datos esta hecha con faker.js para crear 5000 usuarios, 500 habitaciones y 50000 reservas</p>
<p>-Una vez la inicializacion de la base de datos este correcta corra el comando "npm run dev"</p>
<p>-Ingrese al URL http://localhost:3306/api/{rutaNecesaria} (o el puerto que haya asignado en MYSQL)</p>
<p>-Las rutas se encuentran en el archivo server.js y en el directorio routes</p>