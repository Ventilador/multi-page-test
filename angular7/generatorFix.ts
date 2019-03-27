/// <reference path="node_modules/typescript/lib/lib.d.ts"/>
/// <reference path="node_modules/typescript/lib/lib.dom.d.ts"/>
/// <reference path="node_modules/typescript/lib/lib.es2016.full.d.ts"/>
/// <reference path="node_modules/@types/node"/>
// ts-lint:disable
import * as _fs from 'fs';
import { spawn } from 'child_process';
import { promisify } from 'util';
const fs = {
  stat: promisify(_fs.stat),
  writeFile: promisify(_fs.writeFile),
  readFile: promisify(_fs.readFile),
  rename: promisify(_fs.rename)
};


const args = (JSON.parse(process.env.npm_config_argv).original as string[])
  .filter(i => i !== 'run' && i !== 'library' && i !== 'create' && !i.startsWith('--'));



Promise.all([
  fixFolder(args[0]).then(_ => createFiles(args[0])),
  fixAngularJson(args[0])
])
  .catch(console.error);

function fixFolder(folderName: string) {
  return new Promise((res) => {
    spawn('move', ['projects\\' + folderName, folderName], {
      cwd: process.cwd(),
      shell: true,
      stdio: 'inherit'
    }).on('exit', res);
  });
}

function createFiles(folderName: string) {
  return Promise.all([
    fs.writeFile(folderName + '/src/index.html', generateHtml(folderName)),
    fs.writeFile(folderName + '/src/main.ts', generateMain()),
    fs.writeFile(folderName + '/src/loader.ts', generateLoader(folderName)),
    fs.writeFile(folderName + '/tsconfig.lib.json', updateTsConfig()),
    fs.writeFile(folderName + '/src/polyfills.ts', `import 'zone.js/dist/zone';`)
  ]);
}

function updateTsConfig() {
  return `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/lib",
    "target": "es2015",
    "module": "es2015",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "inlineSources": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "types": [],
    "lib": [
      "dom",
      "es2018"
    ]
  },
  "angularCompilerOptions": {
    "annotateForClosureCompiler": true,
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true,
    "enableResourceInlining": true
  },
  "exclude": [
    "src/test.ts",
    "**/*.spec.ts"
  ]
}`;
}
function generateLoader(folderName: string) {
  return `import { NgModule } from '@angular/core';
import { ${camelCase(folderName)}Module } from './lib/${folderName}.module';
import { ${camelCase(folderName)}Component } from './lib/${folderName}.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    ${camelCase(folderName)}Module,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [${camelCase(folderName)}Component]
})
export class AppModule { }
`;
}
function generateHtml(folderName: string) {
  return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Axioma Workbench</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body class="body container-inject">
  <app-${folderName}></app-${folderName}>
</body>

</html>`;
}
function generateMain() {
  return `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './loader';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
`;
}

function camelCase(name: string) {
  const slit = name.split('-');
  return slit.map(i => i[0].toUpperCase() + i.slice(1)).join('');
}

function fixAngularJson(folderName: string) {
  const content = JSON.parse(`{
    "root": "${folderName}/",
    "sourceRoot": "${folderName}/src",
    "projectType": "application",
    "prefix": "app",
    "schematics": {},
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-ng-packagr:build",
        "options": {
          "tsConfig": "${folderName}/tsconfig.lib.json",
          "project": "${folderName}/ng-package.json"
        }
      },
      "build-self": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          "polyfills": "${folderName}/src/polyfills.ts",
          "outputPath": "dist/${folderName}",
          "index": "${folderName}/src/index.html",
          "main": "${folderName}/src/main.ts",
          "tsConfig": "${folderName}/tsconfig.lib.json",
          "scripts": []
        },
        "configurations": {
          "production": {
            "optimization": true,
            "outputHashing": "all",
            "sourceMap": false,
            "extractCss": true,
            "namedChunks": false,
            "aot": true,
            "extractLicenses": true,
            "vendorChunk": false,
            "buildOptimizer": true,
            "budgets": [
              {
                "type": "initial",
                "maximumWarning": "2mb",
                "maximumError": "5mb"
              }
            ]
          }
        }
      },
      "serve": {
        "builder": "@angular-devkit/build-angular:dev-server",
        "options": {
          "browserTarget": "${folderName}:build-self"
        },
        "configurations": {
          "production": {
            "browserTarget": "${folderName}:build-self:production"
          }
        }
      }
    }
  }`);
  return fs.readFile('angular.json', 'utf8')
    .then(text => {
      const json = JSON.parse(text);
      json.projects[folderName] = content;
      return fs.writeFile('angular.json', JSON.stringify(json, null, '\t'));
    });
}


