<!-- TOC -->

- [1. Istruzioni per la corretta installazione di Laravel](#1-istruzioni-per-la-corretta-installazione-di-laravel)
  - [1.1. Mi posiziono all'interno della *path* del progetto](#11-mi-posiziono-allinterno-della-path-del-progetto)
  - [1.2. Init npm](#12-init-npm)
  - [1.3. Install Laravel](#13-install-laravel)
  - [1.4. Creo il file webpack (ni per windows)](#14-creo-il-file-webpack-ni-per-windows)
  - [1.5. All'interno del file *webpack.mix.js* descriviamo a Laravel cosa deve compilare e dove salvare](#15-allinterno-del-file-webpackmixjs-descriviamo-a-laravel-cosa-deve-compilare-e-dove-salvare)
  - [1.6. creiamo una cartella denominata **src** con al suo interno un file denominato **app.js** e un'altro **app.scss**](#16-creiamo-una-cartella-denominata-src-con-al-suo-interno-un-file-denominato-appjs-e-unaltro-appscss)
  - [1.7. compiliamo](#17-compiliamo)
  - [1.8. Per mantenere in ascolto laravel ad ogni nostra modifica nel css](#18-per-mantenere-in-ascolto-laravel-ad-ogni-nostra-modifica-nel-css)
- [2. installazione laravel Windows scorciatoia](#2-installazione-laravel-windows-scorciatoia)
- [3. Nuovo Pc](#3-nuovo-pc)
  - [3.1. .](#31-)
  - [3.2. .](#32-)

<!-- /TOC -->

# 1. Istruzioni per la corretta installazione di Laravel

[Stand-alone-projects-laravel](https://laravel-mix.com/docs/6.0/installation#stand-alone-projects)

## 1.1. Mi posiziono all'interno della *path* del progetto
   - cd my-app

## 1.2. Init npm
   - npm init -y

## 1.3. Install Laravel
   - npm install laravel-mix --save-dev

## 1.4. Creo il file webpack (ni per windows)
   - ni webpack.mix.js 

## 1.5. All'interno del file *webpack.mix.js* descriviamo a Laravel cosa deve compilare e dove salvare
    
    let mix = require( 'laravel-mix' );
    mix.js( 'src/app.js', 'dist/' ).sass( 'src/app.scss', 'dist/' );
    .options({processCssUrls: false});

## 1.6. creiamo una cartella denominata **src** con al suo interno un file denominato **app.js** e un'altro **app.scss**
    - mkdir src 
    - cd src 
    - ni app.js
    - ni app.scss
    >Ricorda di tornare nella *path* principale -cd..-

## 1.7. compiliamo
    - npx mix
    >Attenzione alla fine ci richiede di compilare nuovamente
    *Finished. Please run Mix again.*

## 1.8. Per mantenere in ascolto laravel ad ogni nostra modifica nel css
   - npx mix watch

# 2. installazione laravel Windows scorciatoia

 npm init -y; npm install laravel-mix --save-dev; npx mix; npx mix; npx mix watch

# 3. Nuovo Pc

Grazie al *package.json* che è la nostra ricetta e al modulo *npm* possiamo portarci il progetto dove vogliamo!

Se scarichiamo la nostra repository da git in un'altro pc facciamo attenzione ed eseguiamo questi comandi dopo averlo scaricato:

## 3.1. . 

Mi posiziono all'interno della *path* del progetto
   - cd my-app

## 3.2. . 

Installo il modulo npm nel progetto scaricato
   - npm install