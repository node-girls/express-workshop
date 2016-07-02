# Step 8 - Saving your blog post

Right now, your precious blog posts aren't being saved anywhere, which is a bit of a shame.  Let's do something about that.

### JSON - the handy data format

You'll note that in the data folder there's a new file called `posts.json`.

JSON is a type of file for structuring data in a readable way. It is also a really popular format for sending data across the web.

JSON is a string representation of a Javascript object. JSON objects convert really easily to Javascript objects, and vice versa, with JSON.parse() and JSON.stringify().

(If you're not sure about Javascript objects, have a chat with your mentor and your team.)

If you look at `posts.json` will see there's already one blog post there. The format is:

```js
{
    [timestamp]: [blog post message]
}
```

We've used a timestamp as the key so that the blog posts are listed in chronological order. Also, it's a record of when the blog post was created.

### Writing to your hard drive

Anytime a blog post comes through to the server, we want to save the data on your computer's hard drive.  To do this, we need to use a built-in Node module: `fs`, which stands for 'file-system'.

Built-in Node modules (core Node modules) are rather like the built-in Express middleware functions.  Only difference is that where you need to have installed Express to use Express middleware functions, the core Node modules come automatically with Node itself.

To use `fs`, you'll need to require it at the top of your server file:

```js
var fs = require('fs');
```

The method we need to write to your hard drive is `fs.writeFile`.

```js
fs.writeFile('path/to/file', yourData, function (error) {
    // do something
});
```
Argument 1: the location of the file you want to write to
Argument 2: the data you want to write
Argument 3: the callback function

The 'path/to/file' will be replaced with the actual path to the file you want to write to.  If it doesn't exist, `fs.writeFile` cleverly creates one for you.  But we already have `posts.json`, so not to worry.


### Reading from your hard drive
To read data that's already there, you would use `fs.readFile`.  The way to use `fs.readFile` is very similar to `fs.writeFile`:

```js
fs.readFile('path/to/file', function (error, file) {
    // do something
});
```
Argument 1: the location of the file you want to write to
Argument 2: the callback function


You'll notice that `fs.readFile`'s callback function takes a second argument.  That argument would be the file you're reading.



Let's read the data from the `posts.json` file.  Make sure you've `require`d the `fs` core Node module at the top of your server file somewhere.

Add this code to your server (put it anywhere after the `require`s for now):

```js
fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    console.log(file);
});
```


(`__dirname` is a Node global object that gives you a path to current working directory. It's handy if we want to avoid writing the whole path out in full.)


You'll probably see something like this:
```bash
<Buffer 7b 0a 20 20 20 20 22 31 34 36 37 33 39 30 33 35 36 32 39 31 22 3a 20 22 54 68 69 73 20 69 73 20 6d 79 20 76 65 72 79 20 66 69 72 73 74 20 62 6c 6f 67 ... >
```
This is actually the contents of your `posts.json` file, but in a format called a **buffer**.  To make it a bit more human-readable, you can console.log the file to a string, like this:

```js
console.log(file.toString());
```

`file` is in JSON format right now.  If we want to access the blog post message inside `file`, we need to parse it from JSON back to a JavaScipt object.

Add this next bit of code to your `fs.readFile`'s callback function:
```js
var parsedFile = JSON.parse(file);
```

Now `parsedFile` is a normal JavaScript object, and we can access the data inside it.


Ok, so we've talked about JSON and we've talked about reading and writing files.  You now have the power to save new blog post data to your hard drive!  Work with your partner and your mentor to see if you can figure the next steps out on your own.

Here's a breakdown of what you want to achieve:
* When new blog post data comes through, read from `posts.json` to access its contents
* Add your new blog post data to the old ones.
* Write your new combined data back to the `posts.json` file.

### Things to remember
* `fs.writeFile()` normally overwrites the target file you've given it.  Chances are you don't want to lose all your old blog posts every time you get a new one, so think about how you can combine `fs.readFile()` and `fs.writeFile()` to prevent overwriting.

* You will need to convert between JSON and a JavaScript object several times.  `JSON.parse()` and `JSON.stringify()` are what you need.

Oh by the way, if you want to get the current timestamp, use the JavaScript `Date.now()` method.

Good luck!

## [**Go to step 9 >>>**](step09.md)

| Keyword | Explanation |
|--------|:-------------------------------:|
| `JSON` | A format for storing and transporting data. Read more [here](http://www.w3schools.com/js/js_json.asp). |
| `fs` | A core Node.js module for interacting with the file system on your computer.  Read more [here](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_file_system) |
| `fs.readFile()` | Asynchronously reads the entire contents of a file |
| `fs.writeFile()` | Asynchronously writes data to a file |
