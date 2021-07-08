# basic-react-project
### Proyecto de react básico sin el comando create-react-app.

Antes de iniciar tenemos que crear un repositorio en __Github__ o __Bitbucket__

## 1. INICIALIZAMOS EL PROYECTO
  npm init -y

## 2. INSTALACIÓN de React y ReactDOM
  npm install react react-dom --save

## 3. Instalación y configuración de Babel.
  npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

### 3.1 INSTALAR PLUGING COMPLEMENTARIO PARA TRADUCIR CLASES o FUNCIONES
  npm install babel-plugin-transform-class-properties --save-dev

### 3.2 CREARCIÓN DE ARCHIVO .babelrc EN RAÍZ
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "transform-class-properties"
    ]
  }

# 4. CONFIGURACION DE WEBPACK

