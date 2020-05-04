### Setting up Supertest

Supertest is a library used to test HTTP requests to a Node server.t


First we need to install supertest:

```
npm install supertest --save-dev
```

To use supertest we need to require supertest and app into your test file, to do this add this to the top of your `server.test.js` file:

```
const supertest = require('supertest')
const app = require('../server')
const request = supertest(app)
```

The `request` is what will be going to your server, we will be checking the response that comes back.

Now that we've done this setup we can test GET POST PUT PATCH and DELETE requests!