# NodeJS_example
Test repository with  node.JS

# que es npm?
npm (cuyas siglas originales significan Node Package Manager) es el sistema de gestión de paquetes y dependencias por defecto para Node.js, el entorno de ejecución de JavaScript

# npm init
cuando queremos iniciar un nuevo proyecto utilizamos npm init. ya que no hace todo automatico para el inicio de un MB

# Archivo packaje.json
dentro tenemos las configuraciones del proyecto, ahi vamos a entontrar una seccion llmada script, ahi podemos poner comandos como para iniciar los proyectos, hacer testeos o tirar errores. para asi tener mas control con el proyecto con su funcion.

# ejecucion de script 
para iniciar un script dentro ya definido se utiliza el comando npm run "npmbre del script", en este caso para iniciar el main.js, se usa "npm run empieza".
Si queremos decir que un archivo es el principal osea el main el que empieza todo podemos poner dentro del script el termino "start", esto lo que nos dice que el archivo que se ejecuta ahi seria el priincipal ya que dentor del paquete de node es como esta configurado. y para ejecutarlo en vez de "npm run .." se hace nomas "npm start"

# Modulos en Node.JS
Seria dividir todos el codigo en distintas funcion o archivos con funciones dentro (modulos), esto se hace en las prducciones a gran escala ya que al momento de ser un poryecto grande se necesitara que el codigo este ordenado y coherrente. para llmar los modulo pprimero hay que exportalos con "module.exports = {}" y luego importarlo dentro del archivo que queremos utilizar dichos modulos con const "nombre que queramos poonerle a modulo" = require("direccion del moduo"); 

# Manejo de archivos, que es fs
el fs seria para el manejo de archivo en general. como la creacion modificacion o la eliminacion de distintos arhchivos. 

# Sincornico y asincronico
En resumen sincronico es cuando se tiene que esperar la tarea que le e asignada antes de seguir con el resto de codigo.
Y asincornico es lo contrario que sincornico se puede hacer otras tareas mientras se termina este. osea que no se detiene el codigo
LUEGO VER UN VIDEO DE QUE ES SINCORNIO Y ASINCRONICO EN PROGRAMACION!!! 
