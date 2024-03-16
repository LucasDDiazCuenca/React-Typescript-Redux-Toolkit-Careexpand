/**
 * This function retrieves a doctor's information by their ID from a specified API endpoint.
 * @param {number} doctorId - The `retrieveDoctorByDoctorId` function is designed to retrieve a
 * doctor's information by their `doctorId`. The function makes a GET request to
 * `http://localhost:3002/doctors/` to fetch the data. The `doctorId` parameter is expected
 * to be a number
 * @returns The function `retrieveDoctorByDoctorId` is returning a Promise that resolves to the JSON
 * data fetched from the endpoint `http://localhost:3002/doctors/` using a GET request.
 */

export default function retrieveDoctorByDoctorId(doctorId: number) {
	if (!doctorId) {
		throw new Error("Missing doctorId");
	}

	return (async () => {
		const res = await fetch(`http://localhost:3002/doctors/${doctorId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return res.json();
	})();
}
