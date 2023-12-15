// eslint-disable-next-line no-undef
const config = require('../config');

//Order API GET - Getting a kit by id & checking response code validation [​/api​/v1​/kits​/{id}]
test('return 200 response code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

//validating response body to contain a item of choice in the selected kit
test('body should contain for picnic', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.name).toBe("For picnic");
	
});
