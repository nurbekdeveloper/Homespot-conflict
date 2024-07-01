import { configureStore } from '@reduxjs/toolkit'
import TypeHomeSlice from './slice/typehome.slice'
import Modal from "./slice/modal.slice"

export default configureStore({
  reducer: {
    typelink: TypeHomeSlice ,
    modal:Modal
  },
})