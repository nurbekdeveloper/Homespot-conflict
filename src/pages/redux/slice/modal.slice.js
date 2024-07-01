import { createSlice } from '@reduxjs/toolkit'

export const Modal = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    changeModal: (state,action) => {
        state.modal = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { changeModal } = Modal.actions

export default Modal.reducer