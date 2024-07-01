import { createSlice } from '@reduxjs/toolkit'

export const TypeHomeSlice = createSlice({
  name: 'typehomeurl',
  initialState: {
    typehomeurl: "",
  },
  reducers: {
    changeUrl: (state,action) => {
        state.typehomeurl = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { changeUrl } = TypeHomeSlice.actions

export default TypeHomeSlice.reducer