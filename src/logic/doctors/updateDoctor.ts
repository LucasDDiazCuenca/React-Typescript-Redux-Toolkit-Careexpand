/**
 * The function `updateDoctor` updates a doctor's information by sending a PATCH request to a specified
 * endpoint with the provided data.
 * @param {number} doctorId - The `doctorId` parameter is the unique identifier for the doctor that you
 * want to update in the database. It is a number that specifies which doctor's information you are
 * modifying.
 * @param {NewDoctorType}  - The `updateDoctor` function takes in a `doctorId` of type number and an
 * object of type `NewDoctorType` as parameters. The `NewDoctorType` interface likely includes
 * properties such as `name`, `lastname`, `birthdate`, `phone`, `email`, and `urlimage
 * @returns The `updateDoctor` function is returning a Promise. Inside the function, it makes a PATCH
 * request to update a doctor's information by sending the provided data (name, lastname, birthdate,
 * phone, email, urlimage) to the specified endpoint (`http://localhost:3002/doctors/`).
 * Once the request is completed, it returns without any specific value.
 */
import { NewDoctorType } from '../../interfaces/interfaces';


export default function updateDoctor(doctorId: number, { name, lastname, birthdate, phone, email, urlimage }: NewDoctorType) {
    if (!doctorId) {
        throw new Error('Missing doctorId');
    }
    if (!name || !lastname || !birthdate || !phone || !email || !urlimage) {
        throw new Error('Missing parameters');
    }

    return (async () => {
        await fetch(`http://localhost:3002/doctors/${doctorId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                lastname,
                birthdate,
                phone,
                email,
                urlimage
            })
        })

        return
    })();
}