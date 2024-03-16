/**
 * This TypeScript function retrieves a list of doctors from a specified page using a fetch request to
 * a local server.
 * @param {number} page - The `page` parameter in the `retrieveDoctors` function is used to specify the
 * page number of results to retrieve from the API. It is passed as a parameter to the function and
 * then used in the fetch request to specify which page of doctors' data to fetch.
 * @returns The `retrieveDoctors` function is returning a promise that fetches data from the specified
 * URL (`http://localhost:3002/doctors`) with query parameters `_page=&_per_page=5`. The
 * function makes a GET request with the specified headers and returns the JSON response from the fetch
 * request.
 */
export default function retrieveDoctors(page: number) {
	return (async () => {
		const res = await fetch(
			`http://localhost:3002/doctors?_page=${page}&_per_page=5`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return res.json();
	})();
}
