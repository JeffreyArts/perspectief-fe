# Perspective front-end repo


To get the project up and running, execute the following commands;

```
$ npm install
$ npm run dev

or

$ yarn install
$ yarn dev
```

Note: This project uses Greensock plugins that are not publicly available. In order to install this project completely, you will need to add `gsap-bonus.tgz` into the root of your project. This file can be obtained via https://greensock.com with a valid Club membership. In order to respect their license, this file is not included in this repo. More info can be found on how to get and install this file can be found [here](https://youtu.be/5nxNuVJxBaM?t=195).

## Configuration

Create a .env file with the following variables:
```
VITE_REST_API=
VITE_REST_AUTH_TOKEN=
```
This project communicates with the [jeff-api](https://github.com/JeffreyArts/jeffapi) backend. The `VITE_REST_API` variable should refer to the Strapi server endpoint. The `VITE_REST_AUTH_TOKEN` should contain the value of an API Token that you can create in the admin panel of jeff-api back-end. Create an API Token over here that has only access to the `find`, `findOne` & `create` for the **Perceptie message** content type, and set the token duration to unlimited.



To build the project for production, run the following command:
```
$ npm run build 

or 

$ yarn build
```
This will build the project, and output the files to the dist directory.


You can also customise the `deploy.sh` file with the correct (SSH) login credentials and the desired directory location. Than you can deploy the project easily with the following command:

```
$ npm run deploy 

or 

$ yarn deploy
```


## [License](https://github.com/JeffreyArts/create-jeff-backend/blob/master/LICENSE)

Copyright © 2023 <Jeffrey Arts>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
