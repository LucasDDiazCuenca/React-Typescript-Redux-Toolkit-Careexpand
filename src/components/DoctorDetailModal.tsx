import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { clearDoctorId } from "../redux/doctorSlice";
import { closeDoctorDetailModal } from "../redux/uiStateSlice";
import { DoctorType } from "../interfaces/interfaces";
import retrieveDoctorByDoctorId from "../logic/doctors/retrieveDoctorByDoctorId";

const DoctorDetailModal = () => {
    const doctorId = useSelector((state:RootState) => state.doctor.id);
    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState<DoctorType>();

    useEffect(() => {
        try {
            (async () => {
                const response = await retrieveDoctorByDoctorId(doctorId);
                setDoctor(response);
            })();
        } catch (error) {
            console.log(error);
        }
    });

    const handleCloseModal = () => {
        dispatch(clearDoctorId());
        dispatch(closeDoctorDetailModal());
    }

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 bg-white w-7/12 h-4/6 flex rounded-2xl">
            <div className="bg-[#BAC791] w-2/6 rounded-l-2xl flex flex-col items-center pt-16">
                <img src={doctor?.urlimage} alt="" className="rounded-full mb-10" width={190} />
                <p className="cursor-pointer mb-2">Future action 1</p>
                <p className="cursor-pointer mb-2">Future action 2</p>
                <p className="cursor-pointer mb-2">Future action 3</p>
            </div>
            <div className="w-8/12">
                <div className="w-full flex justify-between mt-5 px-5 mb-10">
                    <h2 className="text-2xl">Doctor information</h2>
                    <button onClick={() => handleCloseModal()}><img src="/doctor-detail-modal/close.png" alt="icon of closing tag"/></button>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="flex flex-col w-5/12">
                        <label htmlFor="name">First name:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="name" type="text" value={doctor?.name} readOnly/>
                    </div>
                    <div className="flex flex-col w-5/12">
                        <label htmlFor="lastname">Last name:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="lastname" type="text" value={doctor?.lastname} readOnly/>
                    </div>

                    <div className="flex flex-col w-5/12">
                        <label htmlFor="date">Date of birth:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="date" type="text" value={doctor?.birthdate} readOnly/>
                    </div>

                    <div className="flex flex-col w-5/12">
                        <label htmlFor="phone">Phone number:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="phone" type="text" value={doctor?.phone} readOnly/>
                    </div>

                    <div className="flex flex-col w-11/12">
                        <label htmlFor="email">Email:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="email" type="text" value={doctor?.email} readOnly/>
                    </div>

                    <div className="flex flex-col w-11/12">
                        <label htmlFor="url">URL image:</label>
                        <input className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2" id="url" type="text" value={doctor?.urlimage} readOnly/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDetailModal;