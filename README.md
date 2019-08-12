### Integrating coinbase commerce in the application to act as crypto payment gateway

```
npm i
node index.js
ngork http 3000
```

Enter ngork url in webhooks, then issue a charge/invoice with below code,

```
node charge.js
```

The response will be caught by the running index.js file, which is configured to be the webhook for transaction events.