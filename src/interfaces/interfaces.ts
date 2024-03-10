export interface DoctorType {
    id: number;
    name: string;
    lastname: string;
    birthdate: string;
    phone: string;
    email: string;
    urlimage: string;
}

export interface NewDoctorType {
    name: string;
    lastname: string;
    birthdate: string;
    phone: string;
    email: string;
    urlimage: string;
}

export interface DoctorsResponse {
    data: DoctorType[];
    pages: number;
}