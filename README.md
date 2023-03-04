## Versión de node lts 18.14.2

# Configuración del proyecto

Una vez clonado el repositorio del proyecto, lo abrimos con vs code y con la terminal integrada del editor escribimos el siguiente comando:

```
npm install ó npm i
```

Esto hara que se lea el archivo package.json de nuestro proyecto y instale todas las dependencias que utiliza el proyecto.

# Variables de entorno

El archivo .env.example como su nombre lo indica es un ejemplo de la configuración que debera llevar el archivo original .env, luego de realizar
el paso anterior se dirigen a la ráiz del proyecto y crean un archivo llamado .env y dentro de este copiaran los datos del archivo .env.example
para realizar la configuración correctamente, en este archivo se manejaran datos sencibles del proyecto es por eso que lo ignoramos en el archivo
.gitignore.

# Construcción del proyecto

Para realizar el build del proyecto debemos escribir el siguiente comando por terminal:

```
npm run build
```

Cuando este proceso finalice se vera reflejada la creación de una carpete llamada dist, en esta carpeta encontraremos nuestro proyecto "compilado" a javascript

# Ejecución del proyecto

Al momento de realizar la ejecución de nuestro servidor lo podremos hacer de dos maneras las cuales son las siguientes:

```
npm start
```

Este comando unicamente se utilizara cuando nuestro proyecto este en producción, por ultimo cuando estemos en el entorno de desarrollo utilizaremos el siguiente comando:

```
npm run dev
```

Este hára que nuestro proyecto se ejecute como desarrollo y tendremos un debbugin automatico del proyecto.
