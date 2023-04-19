const axios = require('axios');

const ALCHEMY_URL = "https://eth-sepolia.g.alchemy.com/v2/KvNO0aedSQjiGh6UbmgXMKxkmcSOmKvV";

axios.post(ALCHEMY_URL, {
	jsonrpc: "2.0",
	id: 1,
	method: "eth_getBlockByNumber",
	params: [
		"0xb443",
		false
	]
}).then(response => {
	console.log(response.data.result);
});
