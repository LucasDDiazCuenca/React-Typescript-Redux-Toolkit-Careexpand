import { DoctorType } from '../../interfaces/interfaces';


export default function updateDoctor(doctorId: number, { name, lastname, birthdate, phone, email, urlimage }: DoctorType) {
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