import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { openDoctorModal, openUnderConstructionModal } from "../redux/uiStateSlice";
import { clearDoctorId } from "../redux/doctorSlice";

interface SideBarMenuItemProps {
	menuItemName: string;
}

const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({ menuItemName }) => {
	const status = useSelector((state: RootState) => state.ui);
	const dispatch = useDispatch();

	const handleNavigation = (menuItemName: string) => {
		if (menuItemName === "Doctors") {
			dispatch(clearDoctorId());
			dispatch(openDoctorModal());
		} else {
			dispatch(openUnderConstructionModal());
		}
	};

	return (
		<a href="#" className="flex gap-2 items-center" onClick={() => handleNavigation(menuItemName)}>
			<img
				src={`/menu-icons/${menuItemName}.png`}
				alt={`icon of ${menuItemName}`}
				className={`${menuItemName === "Patients" || menuItemName === "Visits" ? "w-9" : "w-8"} h-8 p-2`}
			/>
			<p
				className={`hover:border-b  hover:border-slate-100 
            ${status.isDoctorModalOpen && menuItemName === "Doctors" ? "border-b" : ""}
            `}
			>
				{menuItemName}
			</p>
		</a>
	);
};

export default SideBarMenuItem;
