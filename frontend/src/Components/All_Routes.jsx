import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Add_User from "../Pages/Add_User";
import Details from "../Pages/Details";
import Not_Found from "../Pages/Not_Found";
import Edit from "../Pages/Edit";
export default function All_Routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add_users" element={<Add_User />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/add_users/:id" element={<Edit />}></Route>
        <Route path="*" element={<Not_Found />}></Route>
      </Routes>
    </div>
  );
}
