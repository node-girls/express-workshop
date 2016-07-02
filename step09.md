# Step 9 - Displaying your blog posts

So now we're saving the blog posts to the server.  Time to get them and display them on the page!

If you look inside `public/script.js`, there's a whole bunch of JavaScript code in there.  Don't worry about what all the code means, just know that it's responsible for sending a request to GET old blog posts and display them on the page underneath "Recent Posts".

`script.js` is trying to load existing posts by making a GET request. Look inside `script.js` and see if you can find any useful endpoints.


Your `script.js` file will want to receive the JSON containing your blog posts.  Your job is to make that happen!

Express has a handy method called `res.sendFile()` that makes it easy to send files back to the client.  Feel free to use this with your JSON.


If all goes well, you should have a fully functional CMS!

## Congratulations!! 😍

## [**Want more? <br> Try out some stretch goals >>>**](stretch-goals.md)
