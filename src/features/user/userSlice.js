import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user:null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleSidebarOpen:(state) =>{
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser:(state)=>{
            state.user = null
            state.isSidebarOpen = false
        }
    }
});




export default userSlice.reducer

export const {toggleSidebarOpen, logoutUser} = userSlice.actions