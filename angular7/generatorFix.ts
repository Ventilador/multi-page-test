/// <reference path="node_modules/typescript/lib/lib.d.ts"/>
/// <reference path="node_modules/typescript/lib/lib.dom.d.ts"/>
/// <reference path="node_modules/typescript/lib/lib.es2016.full.d.ts"/>
/// <reference path="node_modules/@types/node"/>
// ts-lint:disable
import *as _fs from 'fs';
import { promisify } from 'util';
const fs = {
  stat: promisify(_fs.stat),
  writeFile: promisify(_fs.writeFile),
  readFile: promisify(_fs.readFile),
  rename: promisify(_fs.rename),
  copy: promisify(_fs.copyFile)
};


const args = JSON.parse(process.env.npm_config_argv).original as string[];;
if (args[0] === 'run') {
  args.splice(0, 1);
}
args.splice(0, 1);
Promise.all([
  fixFolder(args[0]),
  fixAngularJson(args[0])
])
  .catch(console.error);

function fixFolder(folderName: string) {
  return fs.rename('project/' + folderName, folderName).then(_ => createFiles(folderName));
}

function createFiles(folderName: string) {
  return Promise.all([
    fs.copy(folderName + '/src/index.html', 'workbench/src/index.html'),
    // TODO create loaderModule
    fs.writeFile(folderName + '/src/index.html', ``)
  ])
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
      "build:self": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          "outputPath": "dist/${folderName}",
          "index": "${folderName}/src/index.html",
          "main": "${folderName}/src/main.ts",
          "tsConfig": "${folderName}/tsconfig.lib.json",
          "assets": [
            "${folderName}/src/favicon.ico",
            "${folderName}/src/assets"
          ],
          "styles": [
            "${folderName}/src/styles.css"
          ],
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
          "browserTarget": "${folderName}:build"
        },
        "configurations": {
          "production": {
            "browserTarget": "${folderName}:build:production"
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


