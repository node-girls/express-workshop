# Stretch goals!

If you finish early, or want to keep working on this as a side project after the workshop, here's some ideas on how to upgrade your creation.

It would be a great idea to create a new branch on Git for yourself, so you can experiment and not have to worry about ruining your previous code.

### Append new posts to posts.json

Reading every line in your posts.json file just to append a few more at the end isn't very efficient. Try changing it with this structure for the data file:

```js
{
    "date": "1467390356291",
    "content": "This is my very first blog post!"
}
```

Now in `app.post` you can create a Javascript object, stringify it, and append it to the file preceded by `',\n'`. You can use this `fs` function:

```js
fs.appendFile('path/to/file', ',\n', function (error) {});
```

You'll also need to alter `app.get`, because this file is no longer a proper JSON object so `script.js` won't be able to parse it as one. You'll have to wrap the text in square brackets before using `JSON.Parse`, like this

```js
fs.readFile(filename, function(error, file) {
    var json = JSON.Parse('[' + file.toString() + ']');
});
```
The variable `json` is now a Javascript array of objects with two properties, date and content, which you can send as the response message, using `res.send(message);`.

Finally, in `script.js` change line 7 to

```js
data.forEach(function(blogPost) {
```

line 15

```js
postText.innerHTML = blogPost.content;
```

and close the brackets properly in line 22!

### Display individual posts with URL parameters and templating

Try some more of express's features by adding a page for individual blog posts using express's URL
parameters and templating stuff. [Tutorial here :)](extension-templating.md).

### Display the date
 Edit `script.js` so that the timestamps for the previous blog posts are displayed in a human-readable way.

 * [Javascript date functions](http://www.w3schools.com/jsref/jsref_obj_date.asp)


### Use a database
Instead of writing to a file on your hard drive, you could save your blog posts in a database, which would be much quicker in terms of performance if there was a lot of data.

A really simple, quick-to-setup database is Firebase, by Google.  Go to their website [here](https://firebase.google.com/docs/) and check out their Web Get Started guide.

### Host your blog online!
Heroku is a what we call a *Platform as a Service*.  You upload your code to them and it will live on one of their servers, meaning you can access it on the general internet from anywhere!

Heroku is good because they have a lot of free options for small-scale apps, like yours.

* [Heroku](https://www.heroku.com/platform)

## Extra reading
There's great resources out there for continuing your Node.js journey.  Here they are:

* [NodeSchool](nodeschool.io) have really great interactive tutorials for all sorts of Node technologies.
* [Error Handling](http://thenodeway.io/posts/understanding-error-first-callbacks/)
