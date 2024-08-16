import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  notification : null,
  hamburgerIsToggled : false,
  loginPopup : false
}

const uiSlice = createSlice({
  name : "ui",
  initialState: initialUiState,
  reducers : {
    showNotification(state, action) {
      state.notification = {
        status : action.payload.status,
        message : action.payload.message,
        type : action.payload.type
      }
    },
    hideNotification(state, action) {
      state.notification = null
    },
    hamburgerToggler(state, action) {
      state.hamburgerIsToggled = !state.hamburgerIsToggled
    },
    loginToggler(state, action) { 
      state.loginPopup = !state.loginPopup
    }
  }
})

export const { showNotification, hideNotification, hamburgerToggler, loginToggler } =  uiSlice.actions;
export default uiSlice.reducer;