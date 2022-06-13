# INSTRUCCIONES
- Te clonas el proyecto.
- Instalar NodeJS y NPM
- Tenes que actualizar la version de CLI ANGULAR que es la 14.0.1 con este comando
`npm install -g @angular/cli@latest`, si te da conflicto es probable que primero desinstales una version que ya tengas con 
`npm uninstall -g @angular/cli` o si no hay que borrar el cache con `npm cache clean --force`
- Luego hay que dar `npm install` para que instale las librerias y depencias que se usan
- Luego si todo anda bien pues, `ng serve -o` para levantar el proyecto
- Si quieres que se vea el proyecto en otros dispositivos pues `ng serve -o --host 0.0.0.0` luego desde cualquier dispositivo pegado a tu misma red
  va a poder conectarse a traves de tu IP.v4 y con el puerto por ejemplo `192.168.1.23:4200` si no te sale es que hay que modificar el firewall para darle chance.

# Telefonica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
