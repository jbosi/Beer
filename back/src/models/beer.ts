import { Schema } from 'mongoose';

const beer = new Schema({
	id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	type: String,
	volume: Number,
	brewery: String,
	description: String,
	prices: [{
		quantity: Number,
		priceBeer: Number,
		volume: Number
	}]
});