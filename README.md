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


## 3. CONFIGURACION DE WEBPACK
### 3.1 Instalamos webpack
```
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```
### 3.2 Creamos el archivo de configuración de webpack en raiz titulado ***webpack.config.js***

### 3.3 Insertamos el siguiente contenido en el archivo ***webpack.config.js***
```
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    open: false,
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
          loader: 'babel-loader',
        options: {}
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
      template: "./public/index.ejs",
    }),
  ],
};
```


## 4. Instalación y configuración de Babel.
### 4.1 Instalación de Babel
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

### 4.2 Instalación de plugin complementario para traducir la calses o funciones
```
npm install babel-plugin-transform-class-properties --save-dev
```
### 4.2.1 Agregar propiedades en el Loader de ***babel-loader***  ***Webpack***
```
options = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    'transform-class-properties',
  ]
}
```
### 4.3 Instalación de plugin complementario para compatibilidad con **Async y Await**
```
npm i -D @babel/runtime @babel/plugin-transform-runtime
```
### 4.3.1 Agregar propiedades en el Loader de ***babel-loader***  ***Webpack***
```
options.plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true
    }
  ]
]
```

## 5. ESTRUCTURAR EL PROYECTO
* Crear la carpeta **public/**
* Crear archivo ***index.ejs*** dentro de **public/**
* Crear la carpeta **src/**
* Crear archivo principal de JavaScript ***index.js*** dentro de **src/** 
* Crear carpeta de **components/** dentro de **src/**
  * Crear encarpetado dentro de **components/** basados en atomic **design system**
    * atoms/
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

### 6.2 Creación del archivo HTML principal ***index.ejs***
Se crea el archivo ***index.html*** dentro del directorio *public/*
Hacemos la referencia por medio del id "app" para que busque y empujar nuestra aplicación.
```
<!DOCTYPE html>
<html lang="es-MX">
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

## 8 Configuración de SCSS
### 8.1 Se intalan las despendencias de NPM 
```
npm i -D css-loader sass sass-loader mini-css-extract-plugin
```

### 8.2 Se agrega el loader en web ***webpack.config.js***
Se importa el plugin, posteriormente se agregan las reglas del loader y se agrega el plugin para exportar el archivo de CSS
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.rules = [
  {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader"
    ],
  }
];
plugins = {
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
}
```

## 9 Configuración de Loader para imagenes SVG
### 9.1 Se intalan las despendencias de NPM 
```
npm i -D svg-url-loader
```

### 8.2 Se agrega el loader en web ***webpack.config.js*** dentro del array en ***module.rules***
```
module.rules = [
  {
    test: /\.svg$/,
    use: ["svg-url-loader"],
  }
];
```

## 10 Configuración Alias en ***webpack.config.js***
### 10.1 Se agrega el objeto ***alias*** dentro de  ***resolve*** y se agregan los alias que se requieran para el pryecto
```
resolve.alias = {
  '@': path.resolve(__dirname, 'src'),
};
```

### 10.1 Se crea el archivo ***jsconfig.json*** en raiz de proyecton para visual studio code reconozca los alias. En el objeto ***compilerOptions.paths*** se definen los mismos alias que en ***webpack***
```
{
  "compilerOptions": {
    "target": "es2017",
    "allowSyntheticDefaultImports": false,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## 11 Configuración de Jest
### 11.1 Se intalan las despendencias de NPM 
```
npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event react-scripts
```

### 11.2 Se agregan los comandos para ejecutar las pruebas 
```
"scripts": {
  "test": "react-scripts test --watchAll"
}
```

### 11.3 En dado caso de agregar alias en webpack es necesario especificarlos en el objeto ***jest***
```
"jest": {
  "moduleNameMapper": {
    "@/(.*)": "<rootDir>/src/$1"
  }
};
```

### 11.4 Se crea un archivo de variables de entorno generico ***.env*** en raiz del proyecto
```
SKIP_PREFLIGHT_CHECK=true
```

### 11.5 Se crea el archivo de configuración para jest ***src/setupTests.js*** para importar jest-dom en todos los archivos de pruebas
```
import '@testing-library/jest-dom';
```

## 12 Configuración de VARIABLES DE ENTORNO
### 12.1 Se intalan las despendencias de NPM 
```
npm i -D dotenv
```

### 12.2 Se importa ***dotenv*** y ***webpack*** para el uso del plugin
```
const webpack = require("webpack");
const dotenv = require('dotenv');
```
### 12.3 Se agregan las siguientes funciones para obtener las variables de entorno
```
const getEnvKeys = env => {
  const mode = env.WEBPACK_BUILD ? 'production' : 'development';
  const fileEnv = dotenv.config({ path: `./.env.${getEnvType(env)}` }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  envKeys['process.env.MODE'] = JSON.stringify(getEnvType(env));
  envKeys['process.env.NODE_ENV'] = JSON.stringify(mode);
  console.log("VARIABLES DE ENTORNO", envKeys);

  return envKeys
}

const getEnvType = env => {
  return env.PROD? 'production' : env.DEV? 'development' : 'qa' 
}
```
### 12.4 Se importa el plugin dentro del objeto ***plugins***
```
plugins = [
  new webpack.DefinePlugin(getEnvKeys(env)),
]
```
### 12.5 Se crean los archivos de variables de entorno en la raíz del proyecto
* .env.development
* .env.production
* .env.qa

### 12.6 Se actualizan los comandos para ejecutar el proyecto
```
"scripts": {
  "start": "webpack-cli serve --mode development --env DEV",
  "build": "webpack --mode production --env QA",
  "build:qa": "webpack --mode production --env QA",
  "build:prod": "webpack --mode production --env PROD",
}
```


## 13 Instalación de Mobx
### 13.1 Se intalan la despendencias de MOBX para React
```
npm i mobx mobx-react
```

### 13.2 Se deshabilita el modo devtool
Agregar la propiedad devtool con valor 'source-map' en ***webpack.config.js*** para ocultar los errores .map en el browser
```
devtool: 'source-map',
```

## 14 Comandos para ejecutar la aplicación
* Develop 
  ```
  npm run build
  ```
* Production 
  ```
  npm run start
  ```