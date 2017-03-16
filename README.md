# AngularJS-Typescript-Grunt seed
This is starter project for AngularJS/Typescript application.

## Technologies
- [AngularJS](https://angularjs.org/)
- [Typescript](http://www.typescriptlang.org/) 
- [LESS](http://lesscss.org/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Jasmine](http://jasmine.github.io/)
- [Karma](https://karma-runner.github.io)
- [Protractor](http://www.protractortest.org/)

## Getting Started
### Clone the repository
Clone the repository using [git](http://git-scm.com/):

```
git clone https://github.com/vladanp/angularjs-typescript-grunt-seed.git
cd angularjs-typescript-grunt-seed
```

### Install dependencies
1. Install [NodeJS](https://nodejs.org/) to get the Node Package Manager (npm)

2. Install [Grunt CLI](http://gruntjs.com/getting-started) plugin for creating Grunt projects

        $ npm install -g grunt-cli@1.2.0

3. Install [Bower](http://bower.io/) for app specific dependencies
 
        $ npm install -g bower@1.7.9

4. Now we can install all the node and bower modules we need for our project

        $ cd path/to/project
        $ npm install
        $ bower install

> **Note:** You should find that you have some new folders in your project:
> * `node_modules` - contains the npm packages for the tools
> * `app/bower_components` - contains app specific dependencies

## Development
The project is configured with a simple development web server. To compile application and start the server use:
```
grunt serve
```
This will also run a watch task which is going to:
* Detect any changes to app scripts or static content and recompile them
* Reload browser every time a file is saved

## Testing
### Unit tests with Karma
To run unit tests, run the following command:
```
grunt unit
```
This will run all unit tests.

#### Debug unit tests
To debug unit tests you can use command with debug parameter:
```
grunt unit:debug
```
#### Coverage
To generate coverage you can use command with coverage parameter:
```
grunt unit:coverage
```
> This will create _coverage_ folder.

### E2E tests
To run e2e tests, run the following command:
```
grunt test:protractor
```  
This will run protractor e2e tests.

> The provided Protractor configuration file to run them is protractor.conf.js

## Build
To run production build, run the following command:
```
grunt build
```
This will generate a zip file with application ready for deployment.

## Adding third party library
Use bower to add third party libraries.

*Example:*
```
bower install angular-translate --save
```  
### Installing typings
To install typings use npm.

*Example:*
```
npm install @types/angular-translate --save-dev
```

**NOTE:** After installation we need to add typing to tsconfig.json in "types" array.
