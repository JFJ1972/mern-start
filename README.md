# mern-start


ToDoList_Mern Inicio

![TodoListMERN](https://user-images.githubusercontent.com/97111500/161640774-0fac92b1-0e9e-424e-825b-35b5030d067b.png)


Registro

![crearRegistro](https://user-images.githubusercontent.com/97111500/161640808-b6eec84e-6ab9-4992-ac64-abb4d80179bb.png)


Actualizar


![actualizar](https://user-images.githubusercontent.com/97111500/161640834-29ebb3ba-d2af-4c67-bd99-7b03678a37cd.png)

Eliminar 

![eliminarEditar](https://user-images.githubusercontent.com/97111500/161640861-739c189a-9882-440e-83e0-0041e8028e72.png)


## Instalación

Crear Atlas URI con estos parametros `server/config.env` Atlas URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/YourDataBaseName?retryWrites=true&w=majority
PORT=5000
```
Instalar dependencias:
```
cd server
npm install
npm start
```

Instalar dependencias del Web server
```
cd client
npm install
npm start
```

#### Tecnologías:

- MongoDB Atlas
- EXPRESS
- React
- Node
 
#### Styles: 
- Bootstrap


#### Deploy:

## [todolist MERN (FRONTEND) HEROKU](https://mern-start-client.herokuapp.com/)
___
## [todolist MERN (BACKEND) HEROKU](https://mern-start.herokuapp.com/)
1 crear cuenta en heroku<br/>
2 crear proyecto en heroku para la carpeta server, pasos segun video<br/>
El navegador debe dar respuesta error y  renderiza Cannot GET / <br/>
3 cambiar lineas de los 2 package.jason (CLIENTE Y SERVER) segun instrucciones del grupo de telegram. <br/>
3a-hacer los cambios en los tres archvos de la url <br/>
4 crear proyecto en heroku para la carpeta cliente, repetir proceso hecho para server. <br/>
4a instalar npm install serve --s <br/>

Los cambios son:<br/> 

Recordlist.js<br/>
Linea 28<br/>
const response = await fetch(`https://mern-start.herokuapp.com/record`,);<br/>
linea 47<br/>
await fetch(`https://mern-start.herokuapp.com/${id}`, {
     method: "DELETE"<br/>

En edit.js<br/>
Linea 17<br/>
const response = await fetch(`https://mern-start.herokuapp.com/record/${params.id.toString()}`);<br/>
Linea 56<br/>
await fetch(`https://mern-start.herokuapp.com/update/${params.id}`, <br/>

En create.js<br/>
Linea 26<br/>
await fetch("https://mern-start.herokuapp.com/record/add", <br/>

#### Recursos:
      MongoDB university.
      https://www.mongodb.com/es/languages/mern-stack-tutorial
      https://www.youtube.com/watch?v=kCjkOgbY9CY
      https://youtu.be/onqMMrGUzm4?t=245

&copy; Abril 5 de 2022



