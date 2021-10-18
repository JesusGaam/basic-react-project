# basic-react-project
### Proyecto de react básico sin el comando create-react-app.

Antes de iniciar tenemos que crear un repositorio en __Github__ o __Bitbucket__


## 1. INICIALIZAMOS EL PROYECTO
```
npm init -y
```

## 2. INSTALACIÓN de React y ReactDOM
```
npm install react react-dom --save
```

## 3. Instalación y configuración de Babel.
### 3.1 Instalación de Babel
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

### 3.2 Instalarción de plugin complementario para traducir la calses o funciones
```
npm install babel-plugin-transform-class-properties --save-dev
```

### 3.3 Creación del archivo de configuración _.babelrc_ en raíz
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "transform-class-properties"
  ]
}
```

## 4. CONFIGURACION DE WEBPACK
### 4.1 Instalamos webpack
```
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```
### 4.2 Creamos el archivo de configuración de webpack en raiz titulado ***webpack.config.js***

### 4.3 Insertamos el siguiente contenido en el archivo ***webpack.config.js***
```
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "projectName.bundle.js",
  },
  devServer: {
    port: 3001,
    open: false,
    injectClient: false, //(OPCIONAL) Evita que dev-server anteponta su entrada. Usada para leer las funciones de output.library
  },
  devtool: false,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

## 5. ESTRUCTURAR EL PROYECTO
* Crear la carpeta **public/**
* Crear archivo ***index.html*** dentro de **public/**
* Crear la carpeta **src/**
* Crear archivo principal de JavaScript ***index.js*** dentro de **src/** 
* Crear carpeta de **components/** dentro de **src/**
  * Crear encarpetado dentro de **components/** basados en atomic **design system**
    * tokes/
    * molecules/
    * organisms/
    * pages/

## 6 Creando nuestros archivos
### 6.1 Creación del componente principal ***Home.jsx***
Se crea el componente ***Home.jsx*** dentro del directorio *src/components/pages/*
Insertamos el siguiente contenido:
```
import React from "react";

const Home = () => {
  return (
    <>
      <h1> Hola Mundo! </h1>
    </>
  );
};

export default Home;
```

### 6.2 Creación del archivo HTML principal ***index.html***
Se crea el archivo ***index.html*** dentro del directorio *public/*
Hacemos la referencia por medio del id "app" para que busque y empujar nuestra aplicación.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

## 7 Creando nuestro servidor local
### 7.1 Instalarción de webpack
```
npm install webpack-dev-server --save-dev
```

### 7.2 Creación de scripts en nuestro ***package.json***
```
"scripts": {
  "start": "webpack-cli serve --mode development",
  "build": "webpack --mode production",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## 8 Instalación de Mobx
### 8.1 Se intalan la despendencias de MOBX para React
```
npm i mobx mobx-react
```

### 8.2 Se deshabilita el modo devtool
Agregar la propiedad devtool con valor false en ***webpack.config.js*** para ocultar los errores .map en el browser
```
devtool: false
```

## 8 Comandos para ejecutar la aplicación
* Develop 
  ```
  npm run build
  ```
* Production 
  ```
  npm run start
  ```