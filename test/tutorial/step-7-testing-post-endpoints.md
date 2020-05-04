### Testing POST endpoints

If we remember in our Express Workshop, the `POST` request is quite different to a `GET` request.

In a `POST` we are sending some data to the server.

The sending of data needs to be replicated in our test. You can do this by adding a `.send()` to the request object.

For example:

```
const response = request.post('your-endpoint').send('your-data')
```

There are also a number of assertions on the [Jest Documentation](https://jestjs.io/docs/en/expect) which might be useful.

_______

With this information can you figure out how to test your `POST` endpoint?

Here's a breakdown of what we want to acheive:

1. Test the status code is 200
2. Test the returned response is as expected

Can you think of any other test cases? If so, get testing!

Well Done! You now have the tools to be able to test endpoints! 😍
