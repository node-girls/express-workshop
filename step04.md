# Step 4 - Communicating with the server

Now that we've built the server, we need to communicate with it. We're going to control the server with **handler functions**.

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the **handler** function. The handler function is just a function which receives requests and handles them, hence the name.

In Express, we attach handler functions to **routes**. This allows us to send back different responses at different **endpoints**. An endpoint consists of a **URI** (or path), and an HTTP request method (**GET**, **POST**, and so on).

The handler function always takes a `request` and `response` object, and sends the response back to the client along with some information. You can decide what to send back in your response.

Here's a simple "Hello World!" handler function:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});
```

In this example, our endpoint is "/", using the GET request method. We are telling our server to respond with "Hello World!" when someone accesses the homepage.

Want to send that response back at "/hello"? It'll look like this:

```js
app.get("/hello", function (req, res) {
  res.send("Hello World!");
});
```

## 1. Create your own handler function.

We are now making a handler function with a custom message in our response. You can write any message you want.

Update your `server.js` file with an empty handler function. We want it to handle requests at the "/" endpoint, using the GET method.


```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {

});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

Try `console.log`-ing the `req` object in your terminal to see what it looks like.

## 2. Tell your handler function what to do

We want our handler function to send our message in a response. To do that we will use one of the method of `response` object, which is: ```response.write()```. You can find more about `response.write()` [here](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_response_write_chunk_encoding_callback)

Every response has a header, which contains information about the response. We can add information to the header using `response.writeHead()`. The `writeHead` takes
2 parameters: status code and header object.

**Add these line to the handler function**

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

## 3. Rerun your server and go to your favourite browser

**Rerun your server by typing again**


```
node server.js
```

**Type in your browser** `localhost:3000`

If you see your message in the browser, **congratulations** you just sent your first response from the server.

## [**next step >>>**](step5.md)
---
### Keywords:
* handler function
* status code
* response.writeHead()
