# AngularSnowpackDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Snowpack

This project is used to demo [angular-snowpack-plugin](https://www.npmjs.com/package/angular-snowpack-plugin). Changes required to convert a fresh `ng new <project_name>` project can be seen in the commits of this repository.

### Important notes

If facing strange errors while running `snowpack dev`, please run `snowpack build` first, and determine if the same errors happen on the built version.
If errors only happen in `snowpack dev`, try running `snowpack --reload` to clear development cache.

This is because `ngcc` has to build @angular packages that your project uses into ivy compatible, and `snowpack dev` converts these packages into web_modules before they were run through `ngcc` by the plugin, and `snowpack dev` does not clear cache even after `ngcc` finishes.

## Development server

Run `npm start` for a dev server. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
