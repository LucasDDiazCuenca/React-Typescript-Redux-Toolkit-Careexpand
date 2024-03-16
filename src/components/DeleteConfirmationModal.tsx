import { useDispatch, useSelector } from "react-redux";
import { closeDeleteConfirmationModal } from "../redux/uiStateSlice";
import { clearDoctorId } from "../redux/doctorSlice";
import deleteDoctor from "../logic/doctors/deleteDoctor";
import { RootState } from "../redux/store";

const DeleteConfirmationModal = () => {
	const doctor = useSelector((state: RootState) => state.doctor);
	const dispatch = useDispatch();

	const handleCancelClick = () => {
		dispatch(clearDoctorId());
		dispatch(closeDeleteConfirmationModal());
	};
	const handleDeleteClick = () => {
		try {
			(async () => {
				await deleteDoctor(doctor.id);
			})();
			dispatch(clearDoctorId());
			dispatch(closeDeleteConfirmationModal());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-12">
				<p>Are you sure you want to delete this item?</p>
				<div className="flex gap-10 justify-center mt-10">
					<button
						className="border border-[#A2C730] px-8 py-2 rounded-lg hover:border-2"
						onClick={() => handleCancelClick()}
					>
						Cancel
					</button>
					<button
						className="bg-[#A2C730] px-8 py-2 rounded-lg hover:bg-[#91ad3f]"
						onClick={() => handleDeleteClick()}
					>
						Delete
					</button>
				</div>
			</div>
		</>
	);
};

export default DeleteConfirmationModal;
