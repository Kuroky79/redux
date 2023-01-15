import React, {useState} from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";

const App = () => {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment(1))}>PLUS</button>
        </div>
    );
};

export default App;
