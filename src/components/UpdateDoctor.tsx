import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { DoctorType } from "../interfaces/interfaces";
import retrieveDoctorByDoctorId from "../logic/doctors/retrieveDoctorByDoctorId";


const UpdateDoctor = () => {
    const doctorId = useSelector((state:RootState) => state.doctor.id);
    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState<DoctorType>();

    useEffect(() => {
        try {
            (async () => {
                const response = await retrieveDoctorByDoctorId(doctorId);
                setDoctor(response);
                console.log(doctor);
            })();
        } catch (error) {
            console.log(error);
        }
    });


    return (
        <>
      <div className="w-full px-8 pt-16 mb-16">
        <h2 className="text-2xl mb-20">Update a doctor </h2>

        <form className="w-full" onSubmit={() => console.log("hola")}>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col w-5/12">
              <label htmlFor="name">First name*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div className="flex flex-col w-5/12">
              <label htmlFor="lastname">Last name*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="lastname"
                name="lastname"
                type="text"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="date">Date of birth*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="date"
                name="date"
                type="date"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="phone">Phone number*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="phone"
                name="phone"
                type="number"
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="email">Email*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="email"
                name="email"
                type="email"
              />
            </div>

            <div className="flex flex-col w-10/12">
              <label htmlFor="url">URL image:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="url"
                name="url"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-end gap-10 mt-10">
            <button
              className="border border-[#A2C730] px-8 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#A2C730] px-8 py-2 rounded-lg"
            >
              Update
            </button>
          </div>

        </form>
      </div>
    </>
    );
}

export default UpdateDoctor;