import React from "react";
import { useDispatch } from "react-redux";
import { openDoctorModal } from "../redux/uiStateSlice";
import createDoctor from "../logic/doctors/createDoctor";
import { validateUrl } from "../logic/doctors/createDoctor";

const CreateDoctor = () => {
  const dispatch = useDispatch();

  const handleCloseCreateDoctor = () => {
    dispatch(openDoctorModal());
  };
  const handleCreateDoctor = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const temporalNameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
    const temporalLastNameInput = form.querySelector('input[name="lastname"]') as HTMLInputElement;
    const temporalDateInput = form.querySelector('input[name="date"]') as HTMLInputElement;
    const temporalPhoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
    const temporalEmailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    const temporalUrlInput = form.querySelector('input[name="url"]') as HTMLInputElement;

    if(temporalUrlInput.value !== ""){
    validateUrl(temporalUrlInput.value);
    }

    try {
        (async() => {
            await createDoctor({
                name: temporalNameInput.value,
                lastname: temporalLastNameInput.value,
                birthdate: temporalDateInput.value,
                phone: temporalPhoneInput.value,
                email: temporalEmailInput.value,
                urlimage: temporalUrlInput.value
            });
        })();
        (event.target as HTMLFormElement).reset();
        dispatch(openDoctorModal());
    } catch (error) {
        console.log(error)
    }

    
  };

  return (
    <>
      <div className="w-full px-8 pt-16 mb-16">
        <h2 className="text-2xl mb-20">Create a doctor </h2>

        <form className="w-full" onSubmit={handleCreateDoctor}>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col w-5/12">
              <label htmlFor="name">First name*:</label>
              <input
                className="bg-[#D9D9D9] text-[#818181] rounded-lg p-2"
                id="name"
                name="name"
                type="text"
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
              />
            </div>
          </div>
          <p className="mt-3 text-[#818181] font-light">
            All fields maked with "*" are mandatorys
          </p>

          <div className="flex justify-end gap-10 mt-10">
            <button
              className="border border-[#A2C730] px-8 py-2 rounded-lg hover:border-2"
              onClick={handleCloseCreateDoctor}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#A2C730] px-8 py-2 rounded-lg hover:bg-[#91ad3f]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateDoctor;
