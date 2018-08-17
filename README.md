# VendingHomework

You are provided with a JSON file containing 8 fruits that can be
dispensed from your vending machine. This is a company perk so there
is not a cost associated with the fruit and purchasing an item is as
simple as clicking a "Buy" button. Each fruit element contains the name,
description, image and quantityAvailable.

The UI should consist of at least two parts. The first part should display a
view with all available fruits. Include the name, available quantity and the
first 75 characters of the description. Order the items alphabetically by
the name of the fruits. There should be two buttons, one to go to the
details page and another to "Buy" the fruit (for this example it should
just decrement the available quantity). If there are no more fruit left to
dispense then an "Out of Stock" message should replace the "Buy" text
and the button disabled.

The second part will be a details page that has the full description and
an image (please make all images the same size). This page will also
include two buttons, one to go back to the list view and another to "Buy"
the fruit. Once more, if there are no more fruit left to dispense then an
"Out of Stock" message should replace the "Buy" text aand the button
disabled. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
