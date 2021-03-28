const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const catSchema = new Schema({
// 	name: String,
// 	age: {
// 		type: Number,
// 		min: [0, 'time cat?'],
// 		max: [42, 'record breaker?']
// 	},
// 	genre: {
// 		type: String,
// 		enum: ['male', 'female', 'robot']
// 	}
// })

const stationSchema = new Schema({
	title: String,
	town: String,
	addressline1: String,
	stateorprovince: String,
	postcode: Number,
	location: {
			type: String,
			coordinates: [{
				0: String,
				1: String,
			}]
	},
	connections: [{
		quantity: Number,
		connectiontype: {
			formalname: String,
			title: String
		},
		currenttype: {
			description: String,
			title: String
		},
		leveltype: {
			title: String,
			comments: String,
			isfastchargecapable: Boolean
		}
	}]
})

module.exports = mongoose.model('Station', stationSchema);