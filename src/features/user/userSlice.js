import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user:null,
};


export const registerUser =  createAsyncThunk(
    'user/registerUser',
     async (user, thunkAPI) => {
    console.log(`Register User: ${user}`)
});

export const loginUser =  createAsyncThunk(
    'user/loginUser',
     async (user, thunkAPI) => {
    console.log(`Login User: ${user}`)
});
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