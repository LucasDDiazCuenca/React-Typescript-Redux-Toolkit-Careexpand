import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

//componentes
import SideBar from "./components/SideBar";
import Doctors from "./components/Doctors";
import UnderConstruction from "./components/UnderConstruction";
import CreateDoctor from "./components/CreateDoctor";
import UpdateDoctor from "./components/UpdateDoctor";

function App() {
	const status = useSelector((state: RootState) => state.ui);

	return (
		<>
			<div className="h-screen w-screen flex">
				<SideBar></SideBar>
				{status.isDoctorModalOpen && <Doctors></Doctors>}
				{status.isUnderConstructionModalOpen && <UnderConstruction></UnderConstruction>}
				{status.isCreateDoctorModalOpen && <CreateDoctor></CreateDoctor>}
				{status.isUpdateDoctorModalOpen && <UpdateDoctor></UpdateDoctor>}
			</div>
		</>
	);
}

export default App;
