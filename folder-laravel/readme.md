# Istruzioni per la corretta installazione di Laravel

[Stand-alone-projects-laravel](https://laravel-mix.com/docs/6.0/installation#stand-alone-projects)

1. Mi posiziono all'interno della *path* del progetto
   - cd my-app
2. Init npm
   - npm init -y
3. Install Laravel
   - npm install laravel-mix --save-dev
4. Creo il file webpack (ni per windows)
   - ni webpack.mix.js 
5. All'interno del file *webpack.mix.js* descriviamo a Laravel cosa deve compilare e dove salvare
    
    let mix = require( 'laravel-mix' );
    mix.js( 'src/app.js', 'dist/' ).sass( 'src/app.scss', 'dist/' );

6. creiamo una cartella denominata **src** con al suo interno un file denominato **app.js** e un'altro **app.scss**
    - mkdir src 
    - cd src 
    - ni app.js
    - ni app.scss
    >Ricorda di tornare nella *path* principale -cd..-

7. compiliamo
    - npx mix
    >Attenzione alla fine ci richiede di compilare nuovamente
    *Finished. Please run Mix again.*

8. Per mantenere in ascolto laravel ad ogni nostra modifica nel css
   - npx mix watch

## installazione laravel Windows scorciatoia

1. npm init -y; npm install laravel-mix --save-dev; ni webpack.mix.js
2. All'interno del file *webpack.mix.js* descriviamo a Laravel cosa deve compilare e dove salvare

let mix = require( 'laravel-mix' );
mix.js( 'src/app.js', 'dist/' ).sass( 'src/app.scss', 'dist/' );

3. mkdir src; cd src; ni app.js; ni app.scss;cd..;
4. npx mix; npx mix
5. Per mantenere in ascolto laravel ad ogni nostra modifica nel css
   - npx mix watch

## Nuovo Pc

Grazie al *package.json* che è la nostra ricetta e al modulo *npm* possiamo portarci il progetto dove vogliamo!

Se scarichiamo la nostra repository da git in un'altro pc facciamo attenzione ed eseguiamo questi comandi dopo averlo scaricato:

1. Mi posiziono all'interno della *path* del progetto
   - cd my-app
2. istallo il modulo npm nel progetto scaricato
   - npm install