# basic-react-project
### Proyecto de react básico sin el comando create-react-app.

# CREAR y CLONAR REPOSITORIO EN Github o Bitbucket

## 2. INICIALIZAMOS EL PROYECTO
  npm init -y

## 3. INSTALACIÓN de React y ReactDOM
  npm install react react-dom --save

## 4. Instalación y configuración de Babel.
  npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

### INSTALAR PLUGING COMPLEMENTARIO PARA TRADUCIR CLASES o FUNCIONES
  npm install babel-plugin-transform-class-properties --save-dev

### CREARCIÓN DE ARCHIVO .babelrc EN RAÍZ
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "transform-class-properties"
    ]
  }

# 5. CONFIGURACION DE WEBPACK

