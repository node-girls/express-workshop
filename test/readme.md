# Express Workshop - Testing Your Endpoints

### What?
You've probably finished the Node workshop and are now wondering how to test your endpoints. Firstly, well done on completing the workshop! Secondly, kudos for wanting to test those new endpoints you've built.

### Why should we test?
Testing helps us write better code. It's is a great way to make sure our code is doing what it is supposed to do.

It is super easy to introduce bugs into our codebase. Testing gives us the confidence to make changes in our code with the knowledge that our tests will tell us if something has gone wrong.

Testing also helps us find the issues faster and more accurately than if we were to try and find those bugs manually.

One approach to testing is called [TDD](https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c) (Test Driven Development). This approach follows 3 steps:
- Write a test that fails: This prevents false positives, so you know what you wrote made it pass.
- Make the test pass: Write the code to make it pass!
- Refactor your code (if neccessary): Now you have a passing test, you can change your code confidently.


### So how is testing helpful? 
Say for example we want to create an endpoint `/we-love-cake`. The test might look something like this:

```
it('should return a 200 status from the /we-love-cake endpoint', async done => {
    const response = await request.get('./we-love-cake')
    
    expect(response.status).toEqual(200)

    done()
})
```

Then someone else writes the endpoint like this,

```
app.get('/we-love-muffins', (req,res) => {
    res.send('We love cake!')
})
```

Can you spot the issue here?

Yep the endpoint `/we-love-muffins` is incorrect.

This is a contrived example, but you get the point. Testing can ensure we are writing code that produces the expected results, whether it is the correct endpoint or ensuring we are using the correct HTTP verb (ie: a `GET` instead of a `POST`).


### How?
We will be using [Jest](https://jestjs.io/docs/en/getting-started.html) and [Supertest](https://www.npmjs.com/package/supertest).

What is Jest and why are we using it? 
- Jest is a library that tests JavaScript
- It is super easy to setup
- It is used by most companies today

What is Supertest?
- Supertest is a library written to test HTTP requests to a Node server (perfect for what we are doing!)