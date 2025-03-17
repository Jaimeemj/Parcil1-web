Primero se deben instalar las librerias bootstrap, react-router y React intl, usando estos comandos:
npm install react-router-dom --save
npm install react-bootstrap bootstrap
npm install react-intl --save
Sin embargo este ultimo no me sirvio por lo que use este: npm install react-intl --legacy-peer-deps 
para ignorar las restricciones de dependencias.
Una vez instaladas esas 3 librerias, se realiza el coamndo npm star, estando dentro de la carpeta del proyecto
usando el comando: npm start
Al realizarlo se abrirar la pagina del Login, la cual para acceder la unica restriccion es que la contraseña
sea de 8 caracteres.
Posteriormente se abrira el Home, el cual aparecen 3 objetos con sus respectivos textos.

Procesos de desarrollo:
Se eligio BrowserRoutes de la libreria de REACT para manejar las rutas de estas y hacer que la aplicacion cambie dinamicamente.
En el Login se uso navigate de REACT para redirijir al Home una vez se realice correctamente el Login.
Por ultimo, en el login se uso useState de react para manejar los estados del usuario y de la contraseña. 
Se eligio