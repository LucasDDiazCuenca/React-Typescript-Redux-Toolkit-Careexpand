
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