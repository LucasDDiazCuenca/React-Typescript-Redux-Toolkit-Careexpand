
export default function retrieveDoctorByDoctorId(doctorId: number) {
    if (!doctorId) {
        throw new Error('Missing doctorId');
    }

    return (async () => {
        const res = await fetch(`http://localhost:3002/doctors/${doctorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
    })();
}