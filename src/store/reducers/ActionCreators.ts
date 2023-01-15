import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";




// export const fetchUsers = () => async (dispatch: AppDispatch) => { // не возвращфем сразу action а возвращаем функцию которая аргументом забирает dispatch
//     try{
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }catch (e){
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// }


export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI) =>{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)
