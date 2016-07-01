# Step 5 - Routing

At the moment our server only does one thing. When it receives a request from the `/` endpoint, it sends back the same response - "Yay Node Girls!".

**If you don't believe try typing localhost:3000/chocolate and see what happens**

We can make the server send different responses for different requests.

### What is an endpoint?

An endpoint is the part of the url which comes after `/`, in above case it's `/chocolate`.


## 1. Create your own endpoints and send different responses.

Add some code so that your server sends one message when the endpoint is `/node` and another one when it's `/girls`.

Good luck :) Feel free to discuss it with your team or mentor.

## 2. Serving your files

So we know how to send back a simple message.  But what if you want to send back a whole html page, or an image?

Things like html files, images etc are known as **static assets**.  If you want your server to 'serve' static assets back to the browser, you need to do something different.

To be able to send any file from the server we need a special, built-in middleware function that comes with Express: `express.static`.

**Delete all your `app.get` endpoint functions.  Then add this one line of code:**

```js
app.use(express.static('public'));
```
Restart your server, refresh your browser and see what happens!

## [**next step >>>**](step06.md)

---
