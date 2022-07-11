const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/museum3', { //127.0.0.1 = localhost
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  path: String,
});


// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
/*
This sets up a REST API endpoint at /api/photos. A POST to this endpoint will first be given to the multer middleware.
It will expect to find a file labeled with the photo property.
This property should match what you used when creating the formData object.
The multer middleware will automatically upload this file and store it in the file system.
It will setup req.file to contain information about the uploaded file.
We check that the file was indeed uploaded and then return the full path to the file.
*/
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image
/*
This sets up a REST API endpoint at /api/items. A POST to this endpoint will setup req.body to contain the items sent in the POST request from the front end.
Notice that req.body.title and req.body.path match the title and path sent with axios in Admin.vue.
This function creates a new Item, then calls its save method to save it to the mongo database.
It sends the saved item back to the front end in 200 OK response.
If an error occurs, the function sends a 500 error response.
*/
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
/*
We use Item.find() to get the list of all of the items in the items collection, and then send them back to the browser.
Notice that since we use await we need to use async for this method.
We also use a try/catch block to catch any errors. If something goes wrong here, 
we assume it is a major error for our server, so we return a 500 error code.
*/
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Method to delete item from database
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Method to update the tittle of item
app.put('/api/items/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
