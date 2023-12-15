// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 1
        }
    ]
}
// kits api - PUT request- Changing the kits items [/api/v1/kits/{id}]
test('PUT test 1 Changing the kit - status code should be 200 OK', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//response body should validate if items were added/changed in the kit
test('Put test 2 Changing the kit - response body should contain ok true ', async () => {
	let actualResponsebody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponsebody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponsebody["ok"]).toBe(true);
});
