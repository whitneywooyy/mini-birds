# mini-birds
## Objectives
The purpose of this projet is to solidify your understanding of the MongoDB API.  By the end of the project, you should know how to perform CRUD operations in MongoDB and view your data (via command line or a GUI).

We are going to build a bird-sighting API.  Consumers (or, developers who use this API) will be able to:

 * Send requests to the API to report a bird sighting 
 * Send requests to the API to retrieve bird sightings in a specific area, or of a specific species
 * Send requests to change/edit/update a previously reported sighting
 * Send requests to delete/remove a previously reported sighting

We will need to set up our app, create a Node/Express API, and then hook the API up to our database.

## Step 1: Setting Up

Initialize your Node app and install the following packages:
 * `express`
 * `body-parser`
 * `cors`
 * `mongojs`

Install each module, require them at the top of your server file, and initialize your app.

After you have initialized your app, connect to your database via MongoJS.  This is where you will specify the name of your database and the names of your collections.  If you need some guidance, take a look at their [documentation](https://github.com/mafintosh/mongojs).

**Breakpoint:** At this point, you should be able to start your app (`node server.js`) and see that your app is listening, and have no errrors.  Your app should also be connected to your database, but we will test that functionality later on.

## Step 2: Create API

Create the following Express routes:

 * **POST** `/api/sighting`
 * **GET** `/api/sighting?region='some-region'&species='some-species'`
 * **PUT** `/api/sighting?id='09evasd09jhahs9d8h9vh'`
 * **DELETE** `/api/sighting?id='09evasd09jhahs9d8h9vh'`

**Breakpiont:** You should be able to hit these endpoints without error.  To make sure they're actually running correctly, put `console.log` in your functions and hit those endpoints with POSTMan see that they're running.  For the routes that take queries, `console.log` those queries and make sure you're getting them correctly.  We have not connected these routes to the database yet.  We will add that functionality in the next step.

## Step 3: Connect MongoDB
