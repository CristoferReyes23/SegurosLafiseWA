# React + TypeScript + Vite

#### Pasos para probar el proyecto.

1. Renombrar el archivo env.develop a env.local
2. Asignar los valores de las variables de entorno del archivo env.local
3. npm install
4. npm run dev

En la consola de la aplicacion se mostrara un enlace a este sitio, si accede aparecera un loading page y luego aparecera un texto que dice unauthorized.

> ```
> Local:   http://localhost:5173/
> ```

Para tener acceso a la aplicacion se debe agregar los siguientes parametros a la URL (a y b son requeridos pero el valor puede ser aleatorio):

> ```
> http://localhost:5173/?a=asdas&b=asdkasjdhasjkd
> ```

#### Estructura de archivo

```
index.html
package.json
env.local
public
   |-- vite.svg
src
   |-- App.tsx
   |-- assets
   |   |-- images
   |   |-- react.svg
   |   |-- styles
   |-- main.tsx
   |-- modules
   |   |-- ModuleName
   |   |   |-- components
   |   |   |-- utils
   |   |   |-- view
   |-- routes
   |   |-- routes.tsx
   |-- shared
   |   |-- apis
   |   |-- components
   |   |-- hooks
   |   |-- models
   |   |-- services
   |   |-- utils
   |-- views
tsconfig.json
tsconfig.node.json
vite.config.ts
```

Las pantallas de la aplicacion se encuentran divididas en modulos, los cuales estan compuestos de componentes, vistas  y utilidades. Cada modulo cuenta con servicio y api lo cual se encarga de la logica del negocio.

#### Librerias implementadas.

1. React router dom (control de rutas)
2. Formik (controlador de estado del formulario)
3. Yup (esquemas de validacion de formulario)
4. React-boostrap (estilos)
5. React-Imask (input con control de mascaras)
