# Setup

clone the repo and then run `npm install`.


## Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Start

Run the following command to run the project.

```js
adonis serve --dev
```
*Easier to start server in compare to express because its not necessary to install and configure nodemon

## Packages

```js
"dependencies": {
    "@adonisjs/ace": "^5.0.8",
    "@adonisjs/auth": "^3.0.7",
    "@adonisjs/bodyparser": "^2.0.5",
    "@adonisjs/cors": "^1.0.7",
    "@adonisjs/fold": "^4.0.9",
    "@adonisjs/framework": "^5.0.9",
    "@adonisjs/ignitor": "^2.0.8",
    "@adonisjs/lucid": "^6.1.3",
    "@adonisjs/mail": "^3.0.10",
    "moment": "^2.24.0",
    "pg": "^8.0.0"
  },
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.1",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1"
  },
```

## Adonis useful tips

Run the following command to create both migration, controller and model

```js
adonis make:model migrationcontrollername -m -c
```

## General tips

Run the following command to install packages like npm install packagename
`npm i -g better-npm-install`

```js
ni packagename
```
