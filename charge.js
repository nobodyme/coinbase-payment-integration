('use strict');
let coinbase = require('coinbase-commerce-node');
let Client = coinbase.Client;
let Charge = coinbase.resources.Charge;

// api key from settings
Client.init('e2912c40-2058-4c72-88dc-297ab75667f6');

let chargeData = {
	name: 'The Sovereign Individual',
	description: 'Mastering the Transition to the Information Age',
	local_price: {
		amount: '0.5',
		currency: 'USD'
	},
	pricing_type: 'fixed_price'
};

Charge.create(chargeData, (err, res) => {
	//save other attributes of charge and display below url for user to pay
	console.log(res.hosted_url);
});
