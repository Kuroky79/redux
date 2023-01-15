import React, {useEffect, useState} from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

const App = () => {
    // const {count} = useAppSelector(state => state.userReducer)
    // const {increment} = userSlice.actions;
    const {users ,isLoading, error } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])
    return (
        <div className='App'>
            {isLoading && <h3>Идет загрузка...</h3>}
            {error && <h3>{error}</h3>}
            {JSON.stringify(users, null,2)}
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={()=>dispatch(increment(1))}>PLUS</button>*/}
        </div>
    );
};

export default App;
