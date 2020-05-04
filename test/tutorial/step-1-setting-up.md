### Setting Up
First we need to install Jest, you can do this by running the following in your command line

```
npm install jest --save-dev
```

Next we need to configure our scripts in the `package.json` file.


### What are scripts?
This is an excellent question.
Scripts are just a way to automate repetitive tasks in your project. Scripts are specific to each project so they need to be configured every time you start a new project. 

They are usually run with `npm run [script]` command.

Let's run a script now, type `npm run test` in your terminal and hit enter.

You'll probably get a message that says:

```
Error: no test specified
```

Now if you go into your `package.json` file and update the `"test"` script like so:


```
"scripts": {
  "test": "jest"
}
```


Run `npm run test` again. You'll notice the message in your terminal is now different. This is beacuse you have just re-defined what `npm run test` does. 

Now, whenever we run `npm run test`, it will use Jest and run our tests.


### Where do we write our tests?
Tests are usually written in a folder called `test`. So go ahead and make a folder and name it test.

In that folder, we need to create a file to write our tests. 
So go ahead and create a file called `server.test.js` in the test folder. This makes it easy for us and others reading your code to identify these tests as your server tests!

Once you've done that you can move onto the next step.