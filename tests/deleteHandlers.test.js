// eslint-disable-next-line no-undef
const config = require('../config');

//Deleting a set by id - /api/v1/kits/{id}
test('DELETE Test 1 checks that deleting an existing order returns a 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//response body should validate boolean value as true
test('DELETE test 2 body should contain "ok" true as the response for deleting an existing order', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});
