import { NewDoctorType } from '../../interfaces/interfaces';

const placeholderImage = 'https://via.placeholder.com/200/771796'

export default function createDoctor({ name, lastname, birthdate,phone,email,urlimage="" }: NewDoctorType) {
    //faltaria validadores de parametros, por parte de librerias o custom created un ejemplo ... 
    if (urlimage){
        validateUrl(urlimage);
    }

    if (!name || !lastname || !birthdate || !phone || !email) {
        throw new Error('Missing parameters');
    }

    if (urlimage === "") {
        urlimage = placeholderImage;
    }

    return (async () => {
        await fetch('http://localhost:3002/doctors', {
            method: 'POST',
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


export function validateUrl(url:string) {
    const avatarRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
    if (typeof url !== "string") throw new TypeError("url is not a string");
    if (!avatarRegex.test(url)) throw new Error('Image format invalid');
}