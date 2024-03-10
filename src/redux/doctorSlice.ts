import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorType {
    id: number;
    name: string;
    lastname: string;
    birthdate: string;
    phone: string;
    email: string;
    urlimage: string;
}

const initialState: DoctorType = {
    id: 0,
    name: "",
    lastname: "",
    birthdate: "",
    phone: "",
    email: "",
    urlimage: "",
};

const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        setDoctorId: (state, action:PayloadAction<number>) => {
            state.id = action.payload;
        },
        clearDoctorId: (state) => {
            state.id = 0;
        }
    },
});

export const { setDoctorId, clearDoctorId } = doctorSlice.actions;
export default doctorSlice.reducer;
