# Step 7 - Sending your blog post to your server

So far we have been requesting data from our server.  But we can also *send* data to the server to be stored somewhere.  

### HTTP request methods
All requests use one of the HTTP methods. The main ones are: `GET, POST, PUT, DELETE`.


`app.get` deals with requests that use the `GET` HTTP method.  

### The `POST` http request method

When sending data to the server, we use the `POST` http request method, instead of `GET`.  To understand the difference, follow the "POST vs GET" link in the keywords section below.

Let's try `POST`ing some text to the server.

We're going to add a form to the `index.html` page, so that you can write your blogposts from there.

Open up the `index.html` file in your text editor.  If you have a look, you should see this:

```html
<div class="entry-container">
    <!--PASTE YOUR CODE HERE!! -->
</div>
```

**Replace the greyed-out comment with this code snippet:**

```html
<h3>Create a blog post</h3>
<form action="/create-post" method="POST">
    <textarea name="blogpost" rows="10" cols="14"></textarea>
    <button type="submit">Send</button>
</form>
```

* This form has a text area and a Send button.  
* The `action` attribute is the endpoint form data will be sent to.
* The `name` attribute will be used later to reference the data.

When you hit Send, the form will send a `POST` request to the server, using whatever is in the `action` attribute as the endpoint.  In our case it's `/create-post`.

### Receiving the blog post on the server

* Data doesn't come through the server in one go; it flows to the server in a **stream**.  Think of a stream as water flowing from a tap into a bucket.  Your job is to collect this water in the server.

* If we were writing a pure Node server, we would have to think about how to collect the stream of data properly.  But luckily for us, Express handles all of that stuff under the hood.  

* All you need to do is define a route to deal with requests that come through on the `/create-post` endpoint.

Let's remind ourselves of a simple `GET` route in Express:
```js
app.get('/my-lovely-endpoint', function (req, res) {
    res.send('Hello there!');
});
```

This time we want to define a route to deal with a `POST` request.  What do you think you would need to do differently?  Experiment and see if you can define a route for the `/create-post` endpoint!

For now, make your `/create-post` handler simply do this: `console.log('/create-post')`.

---

### Extracting the blog post

Now the contents of your blogpost is hidden in your `req` object somewhere.  Normally you would extract it using `req.body`.  Try to console.log `req.body` now.

Getting `undefined`?  Not to worry, that's normal.  When data has been `POST`ed to the server, we need to do things slightly differently to access the data that's come through in the request.

We need another middleware function: `body-parser`.  `body-parser` does what it says on the tin, it will **parse** the data in the request and make it available to you when you do `req.body`.

This time though, `body-parser` is not built-in, we need to explicitly install it.

**In your terminal, install body-parser**
```bash
npm install body-parser --save
```

`require` body-parser so you can use it in your code:
```js
var bodyParser = require('body-parser');
```

Now add this towards the top of your server, after your `require`s and before your `/create-post` endpoint:
```js
app.use(bodyParser.urlencoded({ extended: true }));

```
(Don't worry too much about the `{ extended:true }` bit.  If you're curious, you can read about it [here](https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions))

Refresh your server and have another go at writing a blogpost.

You should now see an object in the console.  The key should be `blogpost`, just like the name attribute in the form.  The value of `blogpost` will be your message!


### Redirecting your page

So you may have noticed that when you hit Send on the form, the browser sort of hangs.  It's because it's trying to navigate to the `/create-post` page.  Of course, there is no such page.

There's an easy fix for this.  In the response, you need to let the browser know that after it's finished with receiving the blogpost, you want it to reload the same page, and not try to go to fake page '/create-post'.  

At the end of your `/create-post` handler, add this line of code:

```js
res.redirect('/');
```

This means: "please redirect to the `/` endpoint."  This little trick will refresh the page!
## [**Go to step 8 >>>**](step08.md)

---
| Keyword | Explanation |
|--------|:-------------------------------:|
| `GET` | An HTTP method for fetching data. Read more [here](http://www.w3schools.com/tags/ref_httpmethods.asp). |
| `POST` | An HTTP method for sending data. Read more [here](http://www.w3schools.com/tags/ref_httpmethods.asp). |
| `middleware` | Functions in Express that run before the final request handler.  A nice article explains in more depth [here](https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified) |
| `body-parser` | An Express middleware function that parses (reads) data from the request.  Documentation on it [here](https://github.com/expressjs/body-parser)|
