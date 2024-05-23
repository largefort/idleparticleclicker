// Install required packages: express, body-parser, and @square/connect
const express = require('express');
const bodyParser = require('body-parser');
const { Client, Environment, ApiError } = require('square');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
    environment: Environment.Sandbox,
    accessToken: 'YOUR_ACCESS_TOKEN'
});

app.post('/process-payment', async (req, res) => {
    const { nonce, amount } = req.body;

    const paymentsApi = client.paymentsApi;
    const requestBody = {
        sourceId: nonce,
        amountMoney: {
            amount: amount,
            currency: 'USD'
        },
        idempotencyKey: require('crypto').randomBytes(12).toString('hex')
    };

    try {
        const { result } = await paymentsApi.createPayment(requestBody);
        res.json({ success: true, payment: result });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
