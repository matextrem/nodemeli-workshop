## Before you Start

#### 1. Install Node

You will need Node.js installed. Download it from the Node.js website [here](https://nodejs.org/en/).

# Step 2 - Setting up your project

When creating a Node.js project, you will be installing a lot of different things along the way. If you want to share your project with others, you need to have a list of the things you installed, so that other people know what to install in order to run the project.

In Node.js, this 'list' file is called a `package.json`. The 'things you've installed' are referred to as **dependencies**. Creating this file is the first step in setting up your Node.js project.

## 1. Make a `package.json` file

Let's start by creating the `package.json` file. We can add things to it as the project grows. The `package.json` file is easy to create from the command line. Type the following command into your terminal to get started:

```
$ npm init
```

This command will initialise a step-by-step process for creating the `package.json`. You should see something like this:

![starting npm init](https://image.ibb.co/iFepNG/Screen_Shot_2017_12_29_at_13_51_37.png)

It will ask you the following questions:

#### `name`
* npm suggests a default name for your project in brackets. If you want to give it your own name, just type it next to the brackets and press `Enter`.
* If you're happy with the name in brackets, simply press `Enter`.

#### `version`
* This is your first project, so it will be version 1.0.0! Nothing to change here, so just press `Enter`.

#### `description`
* A simple description of your project. Write whatever you want and press `Enter`.

#### `entry point`
* This file will be the starting point for your whole project.
* Let's change this from `(index.js)` to `server.js`, as we will be building a server later on!
* Type `server.js` and press `Enter`.

#### `test command`
* Skip this one for now...press `Enter`.

#### `git repository`
* This is where your project would live on GitHub.  Press `Enter`.

#### `keywords`
* (Optional) You can add keywords to help people find your project if they search for it.

#### `author`
* It's your project, so write your name! You can use your GitHub name or your actual name.

#### `license`
* You can add a license, but we'll skip this.

You will see a confirmation of your `package.json`. If you're happy with it, press `Enter` to finalise its creation.

![package.json confirmation](https://image.ibb.co/gswsbb/Screen_Shot_2017_12_29_at_13_54_59.png)

Great! You should now see a new file called `package.json` in your project's folder.

# Step 2 - Installing Express

Before we write any code, you'll need to install the Express library. We're going to use the **[Node Package Manager (npm)](https://www.npmjs.com/)** to download it using the **`npm install`** command.

NPM is the place to go to download other Node code written by other people.  There are thousands of open-source, 3rd-party Node modules (also known as "packages") by other people that you can download and use in your own projects. 

As we install Express, we'll need to update the `package.json` to add Express as a dependency. We do this so that other people working on the project will know to install Express before running any of the code. This can be done by adding **`--save`** to the end of your command.

Run the following command in your terminal:

`$ npm install express --save`

Express should now be installed. Check your `package.json` file to make sure it has been added as a dependency. It will look like this:

![package.json screenshot](https://cloud.githubusercontent.com/assets/10683087/16382664/be35f0b4-3c79-11e6-82b6-ae9e4a037c3f.png)