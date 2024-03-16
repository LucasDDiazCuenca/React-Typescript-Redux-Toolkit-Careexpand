import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiType {
	isDeleteConfirmationModalOpen: boolean;
	isUnderConstructionModalOpen: boolean;
	isDoctorModalOpen: boolean;
	isDoctorDetailModalOpen: boolean;
	isUpdateDoctorModalOpen: boolean;
	isCreateDoctorModalOpen: boolean;
	errorMessage: string;
	isLoading: boolean;
}

const initialState: UiType = {
	isDeleteConfirmationModalOpen: false,
	isUnderConstructionModalOpen: false,
	isDoctorModalOpen: true,
	isDoctorDetailModalOpen: false,
	isUpdateDoctorModalOpen: false,
	isCreateDoctorModalOpen: false,
	errorMessage: "",
	isLoading: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		openDeleteConfirmationModal: (state) => {
			state.isDeleteConfirmationModalOpen = true;
			state.isUnderConstructionModalOpen = false;
			state.isDoctorModalOpen = true;
			state.isDoctorDetailModalOpen = false;
			state.isUpdateDoctorModalOpen = false;
			state.isCreateDoctorModalOpen = false;
		},
		closeDeleteConfirmationModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
		},
		openUnderConstructionModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
			state.isUnderConstructionModalOpen = true;
			state.isDoctorModalOpen = false;
			state.isDoctorDetailModalOpen = false;
			state.isUpdateDoctorModalOpen = false;
			state.isCreateDoctorModalOpen = false;
		},
		openDoctorModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
			state.isUnderConstructionModalOpen = false;
			state.isDoctorModalOpen = true;
			state.isDoctorDetailModalOpen = false;
			state.isUpdateDoctorModalOpen = false;
			state.isCreateDoctorModalOpen = false;
		},
		openDoctorDetailModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
			state.isUnderConstructionModalOpen = false;
			state.isDoctorModalOpen = true;
			state.isDoctorDetailModalOpen = true;
			state.isUpdateDoctorModalOpen = false;
			state.isCreateDoctorModalOpen = false;
		},
		closeDoctorDetailModal: (state) => {
			state.isDoctorDetailModalOpen = false;
		},
		openUpdateDoctorModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
			state.isUnderConstructionModalOpen = false;
			state.isDoctorModalOpen = false;
			state.isDoctorDetailModalOpen = false;
			state.isUpdateDoctorModalOpen = true;
			state.isCreateDoctorModalOpen = false;
		},
		closeUpdateDoctorModal: (state) => {
			state.isUpdateDoctorModalOpen = false;
			state.isDoctorModalOpen = true;
		},
		openCreateDoctorModal: (state) => {
			state.isDeleteConfirmationModalOpen = false;
			state.isUnderConstructionModalOpen = false;
			state.isDoctorModalOpen = false;
			state.isDoctorDetailModalOpen = false;
			state.isUpdateDoctorModalOpen = false;
			state.isCreateDoctorModalOpen = true;
		},
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		clearErrorMessage: (state) => {
			state.errorMessage = "";
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const {
	openDeleteConfirmationModal,
	closeDeleteConfirmationModal,
	openUnderConstructionModal,
	openDoctorModal,
	openDoctorDetailModal,
	closeDoctorDetailModal,
	openUpdateDoctorModal,
	closeUpdateDoctorModal,
	openCreateDoctorModal,
	setErrorMessage,
	clearErrorMessage,
	setIsLoading,
} = uiSlice.actions;

export default uiSlice.reducer;
