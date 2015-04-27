var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoJS = require('mongojs');

var app = express();
var db = mongoJS('birds', ['sightings']);
var port = 9001;

app.use(bodyParser.json());
app.use(cors());

/*
 * ROUTES
 */

app.post('/api/sighting', function(req, res){
	db.sightings.save(req.body, function(err, response){
		if(err) return res.status(500).json(err);
		else return res.json(response);
	});
});

app.get('/api/sighting', function(req, res){

	var query = {}

	if(req.query.bird) query.bird = { name: req.query.bird };
	if(req.query.region) query.region = req.query.region;
	if(req.query.id) query._id = mongoJS.ObjectId( req.query.id);

	db.sightings.find(query, function(err, response){
			if(err) res.status(500).json(err);
			else res.json(response);
	});

});

app.put('/api/sighting', function(req, res){
	if(!req.query.id) return res.status(418).send('request query \'id\' required');
	db.sightings.findAndModify({ 
			query: {
				_id: mongoJS.ObjectId(req.query.id) 
			},
			update: {
				$set: req.body
			}
		},
		function(err, response){
			console.log(err, response);
			if(err) return res.status(500).json(err);
			res.json(response);
		});
});

app.delete('/api/sighting', function(req, res){
	db.sightings.remove({ _id: mongoJS.ObjectId(req.query.id) }, function(err, response){
		console.log(err, response);
		if(err) return res.status(500).json(err);
		return res.json(response);
	});
});



app.listen(port, function(){
	console.log('Now listening on port: ', port);
});
