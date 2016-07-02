# Step 4 - Communicating with the server

Now that we've built the server, we need to communicate with it. We're going to control the server with **handler functions**.

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the handler function. The handler function is just a function which receives requests and handles them, hence the name.

The handler function always takes a `request` and `response` object, and sends the response back to the client along with some information. You can decide what to send back in your response.

### What does a handler function look like in Express?

The `get()` method is used to define a handler function in Express. It takes two parameters: the **endpoint** at which to trigger an action (we'll explain more about this in the next step), and the handler function that tells it exactly what to do. Here's a simple "Hello World!" example:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});
```

 Here, we are telling our server to respond with "Hello World!" when someone tries to access the webpage.

## 1. Create your own handler function.

We are now making a handler function with a custom message in our response. You can write any message you want.

Update your `server.js` file with an empty `app.get()` function:


```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {

});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

Try to `console.log` the `req` object in your terminal to see what it looks like. You should see a lot of data come through.

## 2. Tell your handler function what to do

We want our handler function to send back a message to the client. To do that, we're going to use the Express `send()` method. This will update the response object with the message.

Update your handler function like so:

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Yay Node Girls!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

## 3. Check it out in your browser

Quit your server in the terminal with `ctrl + c`. Then restart it to run your new changes.

```
$ node server.js
```

Now, open your favourite browser (we like Chrome), and navigate to `http://localhost:3000`. If you see your message in the browser, congratulations! You just sent your first response from the server.

### [Go to Step 5 >>>>](step05.md)

| Keyword | Explanation |
|--------|:-------------------------------:|
| handler function | A function that receives requests and tells the server how to respond to them. |
| endpoint | The part of the URL which comes after `/`. For example: `/chocolate` is the "chocolate" endpoint. |
| `get()` | The Express method used to set up a handler function in Express. Takes two parameters: the endpoint, and the handler function. |
| `send()` | The Express method used to send information back to the client from the server. Updates the response object. |
