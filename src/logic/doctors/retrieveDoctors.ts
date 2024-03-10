export default function retrieveDoctors(page: number) {
    return (async () => {
        const res = await fetch(`http://localhost:3002/doctors?_page=${page}&_per_page=5`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return res.json();
    })();
}