// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
		  "id": 1,
		  "quantity": 2
		},
		{
		  "id": 5,
		  "quantity": 2
		},
	  ]
}
// orders api POST - /api/v1/orders Creating a shopping cart

test('POST test 1 Creating a shopping cart status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});
//response body should validate the courier service 
test('POST test 2 Creating a shopping cart response body should contain order and go', async () => {
	let actualResponsebody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponsebody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponsebody["courierService"]).toBe("Order and Go");
});