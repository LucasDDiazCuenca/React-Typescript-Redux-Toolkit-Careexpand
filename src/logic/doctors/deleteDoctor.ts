/**
 * The function `deleteDoctor` deletes a doctor by sending a DELETE request to a specific endpoint
 * using the doctor's ID.
 * @param {number} doctorId - The `deleteDoctor` function you provided is designed to delete a doctor
 * from a server by sending a DELETE request to the specified endpoint
 * (`http://localhost:3002/doctors/`). The function checks if the `doctorId` parameter is
 * provided and throws an error if it's missing.
 * @returns The `deleteDoctor` function is returning a promise. Inside the function, it makes an
 * asynchronous call to delete a doctor with the specified `doctorId` by sending a DELETE request to
 * the specified URL (`http://localhost:3002/doctors/`). Once the request is completed, it
 * returns without any specific value.
 */

export default function deleteDoctor(doctorId:number){
    if (!doctorId) {
        throw new Error('Missing doctorId');
    }

    return (async () => {
        await fetch(`http://localhost:3002/doctors/${doctorId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return
    })();
}