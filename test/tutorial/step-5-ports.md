### Ports can only have one server listening on them at a time...

Notice how the error says

`listen EADDRINUSE: address already in use :::3000`

This is because our server is listening to one port, port 3000. Our tests need to also run on servers, since we have specifically required the `server.js` file in our test file, our tests are also trying to listen to the same port.

To get around this problem, we need to make our Express app in our `server.js` file less restrictive. So let's do that!

_____

First create a new file called `start.js` in the root of your project. Now we can get our `app` to listen to an explicit port in this file


```
// in your start.js file

const app = require('./server')

app.listen(3000, () => {
    console.log('Server is up and running on port 3000!')
})
```
____

Next delete the `app.listen` function from your `server.js` file and export the `app` by adding the following to the bottom of your `server.js` file

```
// in your server.js file

module.exports = app
```

_____

Next, we need to go into our `package.json` file and change the `"start"` script so it uses the `start.js` file instead of the generic app in the `server.js` file.

```
  "scripts": {
    "test": "jest",
    "start": "node start.js"
  },
  ```

  This should fix the port issue.

  Let's move onto the next step!