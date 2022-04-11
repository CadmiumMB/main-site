const { Schema } = require("mongoose");
module.exports = new Schema({
	_id: String,
	username: String,
	password: String,
	pfp: String,
	bio: String,
	titles: Array,
	Color: {
		type: Color,
		default: {}
	},
	settings: {
		type: Object,
		default: {}
	},
	projects: {
		type: Object,
		default: {}
	},
	joined: {
		type: Date,
		default: Date.now
	}
});