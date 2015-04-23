# mini-birds
===============
## Objectives
The purpose of this projet is to solidify your understanding of the MongoDB API.  By the end of the project, you should know how to perform CRUD operations in MongoDB and view your data (via command line or a GUI).

We are going to build a bird-sighting API.  Consumers (or, developers who use this API) will be able to:

 * Send requests to the API to report a bird sighting 
 * Send requests to the API to retrieve bird sightings in a specific area, or of a specific species
 * Send requests to change/edit/update a previously reported sighting
 * Send requests to delete/remove a previously reported sighting

We will need to set up our app, create a Node/Express API, and then hook the API up to our database.

## Step 1: Setting Up

First, initialize the Node app and install the following packages:
 * `express`
 * `body-parser`
 * `cors`
 * `mongojs`

Install each module, require them at the top of your server file, and initialize your app.

After you have initialized your app, connect to your database via MongoJS.  This is where you will specify the name of your database and the names of your collections.  If you need some guidance, take a look at their [documentation](https://github.com/mafintosh/mongojs)
