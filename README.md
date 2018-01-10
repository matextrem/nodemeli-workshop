<img src="https://blog.keycdn.com/blog/wp-content/uploads/2017/10/nodejs-banner.png">


# Express Workshop

## What is this?

This is an introductory workshop to Node.js and Express. You'll be building your own platform to write, publish and save blog posts (a basic content management system, or CMS).

## Why?

[Express](http://expressjs.com/) is one of the most widely-used frameworks for Node.js. It simplifies base features of Node.js, making it easier and faster to build your application's backend. Learning Express gives you a great foundation for becoming a Node.js developer :sparkles:

## Workshop Structure

This workshop is divided into a number of steps. We suggest you follow along with the tutorial online, and write your code in a separate repository.

You will see code snippets throughout the walkthrough. Try to resist the urge to copy and paste - you will learn much more if you get into the habit of typing things out. If you want to test out small bits of code before adding them to your project, [repl.it](https://repl.it/) is a useful tool.

Throughout each step, we have **bolded** any jargon that you may or may not be familiar with. These terms are explained in the [Keywords](https://github.com/node-girls/express-workshop/#keywords) section at the bottom of each page. You'll also find a link to our cheatsheets under [Useful Links](https://github.com/node-girls/express-workshop/#useful-links).

The steps start off introducing you to how Node and Express work.  In the last two steps, there are some mini challenges, requiring some problem-solving.  But you'll definitely have all the knowledge you need to complete it!

Feel free to chat to a mentor, or collaborate with your neighbour whenever you need.

## Before you Start

#### 1. Install Node

You will need Node.js installed. Download it from the Node.js website [here](https://nodejs.org/en/).

#### 2. Fork and clone this repository

Fork this repository to your own GitHub account.  Instructions for doing this can be found [here](https://help.github.com/articles/fork-a-repo/).

Then, clone your forked version of the repository to your desktop in the terminal. Instructions for doing this can be found [here](https://help.github.com/articles/cloning-a-repository/), or run the command below.

`$ git clone https://github.com/YOUR-USERNAME/express-workshop`

# Step 1 - Setting up your project

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

# Step 3 - Building the server

The first thing we need to do is build our server. You will always need to build a server when writing back-end code. A server can be built in pure Node.js, but Express gives us simpler syntax to work with.

## What is a server?

Servers are computer programs that receive requests from other programs, the *clients* and send back a response e.g share data, information or hardware and software resources.

### ...and what is a server in plain English?

A server is a computer program. Its job is to send and receive data.

Let's take a website for example.  A website is just a collection of HTML and CSS files, images, maybe some javascript files. When you type a website address in your browser's address bar, the browser (client) sends a **request** to the server that lives at that address. The browser asks the server to give it the files it needs to display the website properly.


![Server flow](https://image.ibb.co/moiSCG/meli.png)

## 1. Create a `server.js` file

Let's build our server! Before we do anything, let's create a new file called `server.js`. This is where all our server code is going to live.

## 2. `require` the `express` library

We already installed Express in Step 2, but we need to make sure it is included in this file specifically so we can make use of its methods. In Node.js, when you want to access the functionality of a library or module in another file, you `require` it.

To import Express, write the following inside `server.js`:

```js
var express = require('express');
```

## 3. Initialise the server

To initialise our server, we just need to call the `express()` function. This will create an Express application for us to work with.

Add the second line of code to your `server.js` file:

```js
var express = require('express');
var app = express();
```

## 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to. Think of a port as a door number; any requests that come to the server will come via that door. Setting a port will allow us to find where our server is running.

We use the **`app.listen`** method to do this. This method takes two arguments: a **port** and a **callback function** telling it what to do once the server is running. Need clarification? Read more about the `app.listen` method in the [Express documentation](http://expressjs.com/en/4x/api.html#app.listen).

We're going to run our server on port `3000`, and run a simple `console.log` as our callback function. Update your `server.js` file, calling the `app.listen` method:

```js
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
```

## 5. Switch the server on!

You've built your server, but it isn't running yet. We need to run a command in the terminal to do this. We are going to use the `node` keyword to run the server file.

Type the following command in your terminal:
```
$ node server.js
```

If you see this, congratulations! You have built yourself a server!

![success](https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step2-server02.png)


# Step 4 - Communicating with the server

Now that we've built the server, we need to communicate with it. We're going to control the server with **handler functions**.

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the handler function. The handler function is just a function which receives requests and handles them, hence the name.

The handler function always takes a `request` and `response` object, and sends the response back to the client along with some information. You can decide what to send back in your response.

### What does a handler function look like in Express?

The `get()` method is used to define a handler function in Express. It takes two parameters: the **endpoint** at which to trigger an action (we'll explain more about this in the next step), and the handler function that tells it exactly what to do. Here's a simple "Hello World!" example:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});
```

 Here, we are telling our server to respond with "Hello World!" when someone tries to access the webpage.

## 1. Create your own handler function.

We are now making a handler function with a custom message in our response. You can write any message you want.

Update your `server.js` file with an empty `app.get()` function:


```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {

});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

Try to `console.log` the `req` object inside the handler function. Restart your server, refresh the browser, then go to your terminal to see what it looks like. You should see a lot of data come through.

## 2. Tell your handler function what to do

We want our handler function to send back a message to the client. To do that, we're going to use the Express `send()` method. This will update the response object with the message.

Update your handler function like so:

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Oi Melicidade!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
```

## 3. Check it out in your browser

Quit your server in the terminal with `ctrl + c`. Then restart it to run your new changes.

```
$ node server.js
```

Now, open your favourite browser (we like Chrome), and navigate to `http://localhost:3000`. If you see your message in the browser, congratulations! You just sent your first response from the server.

# Step 5 - Routing

At the moment our server only does one thing. When it receives a request from the `/` endpoint, it sends back the same response: "Oi Melicidade!".

Want to check? Try typing http://localhost:3000/nodemeli-workshop and see what happens.

However by making use of endpoints, we can make the server send different responses for different requests. This concept is called **routing**.

### What is an endpoint?

An endpoint is the part of the URL which comes after `/`. For example: `/chocolate` is the "chocolate" endpoint. It's the URL to which you send a request.

## 1. Create your own endpoints and send different responses

We're going to try sending different responses at different endpoints. Remember the `app.get()` method? To set up routing in your server, we just need to repeat this method with different endpoints.

For example:

```js
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});
```

*Challenge:* Add some code so that your server sends one message when the endpoint is `/node` and another one when it's `/meli`.

# Step 6 - Serving static files

So we know how to send back a simple message. But what if you want to send back a whole HTML page, or an image?

Things like HTML files, images etc are known as **static assets**. If you want your server to "serve" static assets back to the browser, you need to do something different than just using the `res.send()` method.

To be able to send any file from the server we need a special, built-in **middleware** function that comes with Express: `express.static()`. Read more about it [here](http://expressjs.com/en/starter/static-files.html).

Say we want to serve all the static assets in our "public" folder. The `express.static()` function will look like this:

```js
app.use(express.static("public"));
```

## 1. Serve static files from your server

Comment all your `app.get` endpoint functions, and replace them with the line of code above. Restart your server, refresh your browser and see what happens! If you see a Node Meli CMS, then your static assets have been successfully served.

# Step 7 - Sending your blog post from/to your server
Our App will be a posts App. We will create a variable posts and we will send it back as a response in /posts endpoint.

So far we have been requesting data from our server.  But we can also *send* data to the server to be stored somewhere.  

### HTTP request methods
All requests use one of the HTTP methods. The main ones are: `GET, POST, PUT, DELETE`.


`app.get` deals with requests that use the `GET` HTTP method.  

### The `POST` http request method

When sending data to the server, we use the `POST` http request method, instead of `GET`.  To understand the difference, follow the "POST vs GET" link in the keywords section below.

Let's try `POST`ing some text to the server.

- First of all we will need to create our handle function that will handle our post request to /posts. At first, just add a res.send("sending posts"); 

When you hit Send, the form will send a `POST` request to the server, using whatever is in the `action` attribute as the endpoint.  In our case it's `/posts`.

### Receiving the blog post on the server

* All you need to do is define a route to deal with requests that come through on the `/posts` endpoint.

Let's remind ourselves of a simple `GET` route in Express:
```js
app.get('/my-lovely-endpoint', function (req, res) {
    res.send('Hello there!');
});
```

This time we want to define a route to deal with a `POST` request.  What do you think you would need to do differently?  Experiment and see if you can define a route for the `/posts` endpoint!

For now, make your `/posts` handler simply do this: `console.log('/posts'); res.send("sending posts");`.

---

### Extracting the blog post

Now the contents of your blogpost is hidden in your `req` object somewhere.  Normally you would extract it using `req.body`.  Try to console.log `req.body` now.

You should now see an object in the console.  The keys should be `title` and `desc`, just like the data that we've sent.

# Step 8 - Saving your blog post

📣 Ok, so now it's time for a mini challenge.  Steps 8 and 9 will require a little bit of your problem-solving skills.  But don't worry, these mini challenges are 100% doable with the things you've learnt so far!

As always, chat with a mentor or collaborate with your neighbour if you need to.

---

Right now, your precious blog posts aren't being saved anywhere, which is a bit of a shame.  Let's do something about that.



## Congratulations!! :dog:

| Keyword | Explanation |
|--------|:-------------------------------:|
| `JSON` | A format for storing and transporting data. Read more [here](http://www.w3schools.com/js/js_json.asp). |
| `fs` | A core Node.js module for interacting with the file system on your computer.  Read more [here](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_file_system) |
| `fs.readFile()` | Asynchronously reads the entire contents of a file |
| `fs.writeFile()` | Asynchronously writes data to a file |

---
| Keyword | Explanation |
|--------|:-------------------------------:|
| `GET` | An HTTP method for fetching data. Read more [here](http://www.w3schools.com/tags/ref_httpmethods.asp). |
| `POST` | An HTTP method for sending data. Read more [here](http://www.w3schools.com/tags/ref_httpmethods.asp). |
| `middleware` | Functions in Express that run before the final request handler.  A nice article explains in more depth [here](https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified) |
| `express-formidable` | An Express middleware function that parses (reads) form and file data from the request.  Documentation on it [here](https://www.npmjs.com/package/express-formidable)|

| Keyword | Explanation |
|--------|:-------------------------------:|
| static assets | Files such as HTML, CSS and JavaScript documents or images that you want to appear in the browser. |
| middleware | A function (or functions) that are invoked by Express before your final request handler is executed. Middleware sits between a raw request and its final intended route. |
| `use()` | The method that tells Express to use a certain piece of middleware. |
| `express.static()` | The built-in Express middleware function that makes it possible to serve static assets. |

| Keyword | Explanation |
|--------|:-------------------------------:|
| routing | The definition of application endpoints and how they respond to client requests. |

| Keyword | Explanation |
|--------|:-------------------------------:|
| handler function | A function that receives requests and tells the server how to respond to them. |
| endpoint | The part of the URL which comes after `/`. For example: `/chocolate` is the "chocolate" endpoint. |
| `get()` | The Express method used to set up a handler function in Express. Takes two parameters: the endpoint, and the handler function. |
| `send()` | The Express method used to send information back to the client from the server. Updates the response object. |

## Keywords

| Keyword | Explanation |
|--------|:-------------------------------:|
| server | A web server is a software application which handles HTTP requests sent by the client, like web browsers, and returns web pages and information in response. |
| client | A client requests services and information from the server. Typically, a client is a computer application, such as a web browser. |
| request | A request is the message sent via HTTP from the client to the server, asking for information. |
| response | A response is the data sent back to the client from the server after an HTTP request is made. |
| `require()` | Require is used in Node.js to import functionality from another file or an external module. |
| module | A module is a bit of reusable code, written by you or someone else, that can be imported into a Node.js project using require. |
| method | Method is another name for a function. |
| port | A port is a number that serves as an endpoint, determining where you can access your web application. |

## Keywords

| Keyword | Explanation |
|--------|:-------------------------------:|
| `npm install [package-name]` | The terminal command used to install a package from npm. |
| `--save` | When added to the end of an `npm install` command, `--save` adds that npm package to the `package.json` file. |


## Keywords

| Keyword | Explanation |
|--------|:-------------------------------:|
| `package.json` | A `package.json` is the file used to store information about a Node.js project, such as its name and its dependencies. Read more [here](http://browsenpm.org/package.json). |
| npm | npm is a "package manager" for Node.js, meaning it allows you to easily install external modules (or chunks of code) published by others and use them in your project. |
| dependencies | Dependencies are external code modules that are required to run your project. |

## Useful Links

* [What is Node?](https://github.com/node-girls/what-is-node)
* [Node cheatsheet](https://github.com/node-girls/cheatsheets/blob/master/node-cheatsheet.md)
* [Command line cheatsheet](https://github.com/node-girls/cheatsheets/blob/master/command-line-cheatsheet.md)

### Credits
 * Aldo Sorbara (aldo.sorbara@mercadolibre.com)
 * Sebastian Gonzalez (sebastian.sgonzalez@mercadolibre.com)
 * Matias Dastugue (matias.dastugue@mercadolibre.com)
