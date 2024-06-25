import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserList from "./components/Users/UserList/UserList";
import Counter from "./components/Counter/Counter";
import {Timer} from "./components/Timer/Timer";
import Timer2 from "./components/Timer/Timer2";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Master from "./pages/Master/Master";
import UserAdd from "./components/Users/UserAdd/UserAdd";
import UserEdit from "./components/Users/UserEdit/UserEdit";
import ChangePassword from "./components/Password/ChangePassword";
import ViewInfo from './ViewInfo';
import EditProfile from './EditProfile';
function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Master/>} >
                    <Route path={"/users"} element={<UserList/>} />
                    <Route path={"/users/create"} element={<UserAdd/>} />
                    <Route path={"/users/:id/edit"} element={<UserEdit/>} />
                    <Route path={"/components/Password/ChangePassword"} element={<ChangePassword/>}/>
                    <Route path={"/edit-profile"} element={<EditProfile/>}/>
                    <Route path={"/view-info"} element={<ViewInfo/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
