('use strict');
const Express = require('express');
const Webhook = require('coinbase-commerce-node').Webhook;

// webhook shared secret from settings
const webhookSecret = '1d28bed7-8546-46b1-978a-b76eae37f333';
const bodyParser = require('body-parser');
const app = Express();
app.use(bodyParser.json());

// webhook that receives payments info
// subscribe different event in settings page of coinbase commerce

app.post('/', (req, res) => {
	let event;
	try {
		event = Webhook.verifyEventBody(
			JSON.stringify(req.body),
			req.headers['x-cc-webhook-signature'],
			webhookSecret
		);
	} catch (error) {
		console.log('Error occured', error.message);
		return res.status(400).send('Webhook Error:' + error.message);
	}
	console.log('Success', event);
	res.status(200).send('Signed Webhook Received: ' + event.id);
});

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});
