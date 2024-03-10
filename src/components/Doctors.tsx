import { useEffect, useState } from "react";
import retrieveDoctors from "../logic/doctors/retrieveDoctors.ts";
import { DoctorType, DoctorsResponse } from "../interfaces/interfaces.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store.ts";
import { openCreateDoctorModal } from "../redux/uiStateSlice.ts"

// Components
import Doctor from "./Doctor.tsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal.tsx";
import DoctorDetailModal from "./DoctorDetailModal.tsx";

const Doctors = () => {
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const status = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleOpenCreateDoctorModal = () => {
    dispatch(openCreateDoctorModal());
  }

  useEffect(() => {
    (async () => {
      try {
        const response: DoctorsResponse = await retrieveDoctors(page);
        setDoctors(response.data);
        setTotalPages(response.pages);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, doctors]);


  return (
    <>
      <div className={`${status.isDeleteConfirmationModalOpen || status.isDoctorDetailModalOpen ? "overlay" : ""}`}></div>
      <div className={`w-full`}>
        <div className="w-full flex justify-between px-8 pt-16 mb-16">
          <h1 className="text-2xl">Doctors</h1>
          <button
            className="bg-[#2c9bcf] text-white p-1 rounded-md px-8"
            onClick={() => handleOpenCreateDoctorModal()}
          >
            + Add doctor
          </button>
        </div>
        <div>
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="w-full flex justify-center py-8">
          <button
            className="bg-[#2c9bcf] text-white p-1 rounded-md px-5 mr-4"
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            <span className="pr-4">&lt;</span> Previous page
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                className={`bg-[#2c9bcf] text-white p-1 rounded-md px-5 mr-4 ${
                  pageNum === page ? "bg-[#123456]" : ""
                }`}
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </button>
            )
          )}
          <button
            className="bg-[#2c9bcf] text-white p-1 rounded-md px-5"
            onClick={() => setPage((old) => Math.min(old + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next page <span className="pl-4">&gt;</span>
          </button>
        </div>
      </div>
     { status.isDeleteConfirmationModalOpen && <DeleteConfirmationModal />}
     { status.isDoctorDetailModalOpen && <DoctorDetailModal />}
    </>
  );
};

export default Doctors;
