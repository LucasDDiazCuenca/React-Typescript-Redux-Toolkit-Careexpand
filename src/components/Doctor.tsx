import React from "react";
import { DoctorType } from "../interfaces/interfaces.ts";
import { useDispatch } from "react-redux";
import { openDeleteConfirmationModal, openDoctorDetailModal, openUpdateDoctorModal } from "../redux/uiStateSlice";
import { setDoctorId } from "../redux/doctorSlice.ts";

interface DoctorProps {
  doctor: DoctorType;
}

const Doctor: React.FC<DoctorProps> = ({ doctor }) => {
  const dispatch = useDispatch();

  const handleDeleteDoctor = () => {
    dispatch(setDoctorId(doctor.id));
    dispatch(openDeleteConfirmationModal());
  };

  const handleEditDoctor = () => {
    dispatch(setDoctorId(doctor.id));
    dispatch(openUpdateDoctorModal());
  };

  const handleDoctorDetailModal = () => {
    dispatch(setDoctorId(doctor.id));
    dispatch(openDoctorDetailModal());
  }

  return (
    <>
      <div className="flex justify-between items-center px-5 py-4">
        <div className="flex gap-8 items-center">
          <img
            src={doctor.urlimage}
            alt="Doctor Image"
            width={80}
            className="rounded-full cursor-pointer"
            onClick={() => handleDoctorDetailModal()}
          />
          <div>
            <p
              className="font-bold p-1 cursor-pointer"
              onClick={() => handleDoctorDetailModal()}
            >
              {doctor.name} {doctor.lastname}{" "}
            </p>
            <p className="font-light p-1">{doctor.email}</p>
          </div>
        </div>
        <div className="flex gap-10 mr-4">
          <button>
            <img
              src="/doctor-component/delete.png"
              alt="icon of delete"
              onClick={handleDeleteDoctor}
            />
          </button>
          <button>
            <img
              src="/doctor-component/update.png"
              alt="icon of update"
              onClick={handleEditDoctor}
            />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Doctor;
