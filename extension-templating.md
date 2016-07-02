# Individual Blog Posts - extension

Add a page for individual blog posts using express's URL parameters and templating stuff.

## Step 1 - URL parameters

Rather than writing an express handler for every single possible URL you want to handle, express
lets you use URL parameters - these are similar to arguments being passed into a function.

Express's URL parameters look like this:

- `/users/:userId` - matches `/users/123`, `/users/node-girls`
- `/users/:userId/posts/:postId` - matches `/users/node-girls/posts/node-is-best`

Let's add a handler for serving individual blog posts:

```js
app.get('posts/:postId', function (req, res) {
    res.send('post id: ', req.params.postId);
});
```

When you go to http://localhost:3000/posts/abc123, you should see 'post id: abc123' shown in your browser.

## Step 2 - Reading from the file and sending the specific blog post

Just like with `/create-post`, you need to read your JSON file. Try and send the post content back to
the browser: `res.send(postContentHere)`

## Step 3 - rendering a template

Instead of just sending your raw blog post string, you probably want to jazz up your post with some
HTML and CSS. For this, we can use express's built in templating system. You can use any template
language you want (like jade, ejs, or handlebars), but we're going to use mustache (which is similar
to handlebars) in this example.

Run `npm install --save mustache-express`, then check the documentation for [mustache-express](https://www.npmjs.com/package/mustache-express)
and [express's templating](http://expressjs.com/en/guide/using-template-engines.html). You'll need to
create a template file in `views/post.mustache` like this:

```mustache
<!DOCTYPE html>
<html>
  <head>
    <title>Blog Post</title>
  </head>
  <body>
    <h1>yay blog post!</h1>
    <article>
      {{ post }}
    </article>
  </body>
</html>
```

If you get stuck, check out the [example solution](https://github.com/node-girls/express-workshop-complete/tree/templating) :)

## Even More Stretch Goals:
- Give your posts titles
- Add a post listing page
- Yay!
