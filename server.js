var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

// SERVER VARIABLES
var app = express();

// mongodb
var mongoUri = 'mongodb://localhost:27017/birds';
var db = mongojs('birds', ['sightings']);
db.on('error', function(err){
	console.log('DB not connected, Error:', err);
})
db.on('ready', function(){
	console.log('Connected to db at ', mongoUri);
})
db.sightings.save({test: 'Testings'}, function(err, test) {
	console.log(test);
})

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname+'/public'));

//ENDPOINTS
app.get('/api/sightings', function(req, res){
	// GET APP.GET CODE FROM SOLUTION!
});	// End app.get

app.post('/api/sightings', function(req, res){
	console.log(req.body);
	var query = {};

	if (req.query.name) query.name = req.query.name;
	if (req.query.location) query.location = req.query.location;
	if (req.query.id) query.id = req.query.id;

	db.sightings.find(query, function(err, sighting){
		if (!err) {
			if (sightings[0]) return res.status(200).json(sightings);
			else return res.status(200).send('No results for that query');
		} else {
			res.status(500).json(err);
		}
	});
});	// End app.post

app.put('/api/sightings', function(req, res){
	if (!req.query.id) res.status(400).send('No UID sent');

	db.sightings.findAndModify({
		query: { _id: mongojs.ObjectId(req.query.id)},
		update: { $set: { location: req.query.location } },
		new: true
	}, function(err, updated) {
		if (!err) return res.status(200).json(updated);
		else return res.status(500).send('Document not updated');
	});
});	// End app.put

app.delete('/api/sightings', function(req, res){
	if (!req.query.id) res.status(400).send('No UID sent');

	db.sightings.remove({ _id: mongojs.ObjectId(req.query.id) }, function(err, removed){
		if (!err && removed.n > 0) {
			res.status(200).json(removed);
		} else {
			return res.status(500).send('Document not removed, check your query');
		}
	});
});	// End app.delete

// LISTENING
app.listen(9000);
console.log("listening on port", 9000);