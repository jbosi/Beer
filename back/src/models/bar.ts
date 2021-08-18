import { Schema } from 'mongoose';

const bar = new Schema({
	id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
})