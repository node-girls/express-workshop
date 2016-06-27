# Step 2 - Installing Express

Before we write any code, you'll need to install the Express library. We're going to use the **[npm package manager](https://www.npmjs.com/)** to download it using the **`npm install`** command.

As we install Express, we'll need to update the `package.json` to add Express as a dependency. We do this so that other people working on the project will know to install Express before running any of the code. This can be done by adding **`--save`** to the end of your command.

Run the following command in your terminal:

`$ npm install express --save`

Express should now be installed. Check your `package.json` file to make sure it has been added as a dependency. It will look like this:

![package.json screenshot](https://cloud.githubusercontent.com/assets/10683087/16382664/be35f0b4-3c79-11e6-82b6-ae9e4a037c3f.png)

### [Go to Step 3 >>>>](https://github.com/node-girls/express-workshop/blob/master/step03.md)

## Keywords

| Keyword | Explanation |
|--------|:-------------------------------:|
| `npm install [package-name]` | The terminal command used to install a package from npm. |
| `--save` | When added to the end of an `npm install` command, `--save` adds that npm package to the `package.json` file. |
