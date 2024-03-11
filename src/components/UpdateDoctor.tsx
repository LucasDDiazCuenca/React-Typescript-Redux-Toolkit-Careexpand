import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import React, { useEffect, useState } from "react";
import { DoctorType } from "../interfaces/interfaces";
import retrieveDoctorByDoctorId from "../logic/doctors/retrieveDoctorByDoctorId";
import { closeUpdateDoctorModal, openDoctorModal } from "../redux/uiStateSlice";
import updateDoctor from "../logic/doctors/updateDoctor";

const UpdateDoctor = () => {
  const doctorId = useSelector((state: RootState) => state.doctor.id);
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
  }, []);

  const handleUpdateDoctor = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const temporalNameInput = form.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const temporalLastNameInput = form.querySelector(
      'input[name="lastname"]'
    ) as HTMLInputElement;
    const temporalDateInput = form.querySelector(
      'input[name="date"]'
    ) as HTMLInputElement;
    const temporalPhoneInput = form.querySelector(
      'input[name="phone"]'
    ) as HTMLInputElement;
    const temporalEmailInput = form.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const temporalUrlInput = form.querySelector(
      'input[name="url"]'
    ) as HTMLInputElement;

    try {
      (async () => {
        await updateDoctor(doctorId, {
          name: temporalNameInput.value,
          lastname: temporalLastNameInput.value,
          birthdate: temporalDateInput.value,
          phone: temporalPhoneInput.value,
          email: temporalEmailInput.value,
          urlimage: temporalUrlInput.value,
        });
      })();
      (event.target as HTMLFormElement).reset();
      dispatch(openDoctorModal());
    } catch (error) {
      console.log(error);
    }

    dispatch(closeUpdateDoctorModal());
  };

  const handleCancelButton = () => {
    dispatch(closeUpdateDoctorModal());
  };

  return (
    <>
      <div className="w-full px-8 pt-16 mb-16">
        <h2 className="text-2xl mb-20">Update a doctor </h2>

        <form className="w-full" onSubmit={handleUpdateDoctor}>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col w-5/12">
              <label htmlFor="name">First name*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="name"
                name="name"
                type="text"
                defaultValue={doctor?.name}
                required
              />
            </div>
            <div className="flex flex-col w-5/12">
              <label htmlFor="lastname">Last name*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="lastname"
                name="lastname"
                type="text"
                defaultValue={doctor?.lastname}
                required
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="date">Date of birth*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="date"
                name="date"
                type="date"
                defaultValue={doctor?.birthdate}
                required
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="phone">Phone number*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="phone"
                name="phone"
                type="number"
                defaultValue={doctor?.phone}
                required
              />
            </div>

            <div className="flex flex-col w-5/12">
              <label htmlFor="email">Email*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="email"
                name="email"
                type="email"
                defaultValue={doctor?.email}
                required
              />
            </div>

            <div className="flex flex-col w-10/12">
              <label htmlFor="url">URL image:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="url"
                name="url"
                type="text"
                defaultValue={doctor?.urlimage}
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-10 mt-10">
            <button
              className="border border-[#A2C730] px-8 py-2 rounded-lg hover:border-2"
              onClick={() => handleCancelButton}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#A2C730] px-8 py-2 rounded-lg hover:bg-[#91ad3f]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateDoctor;
