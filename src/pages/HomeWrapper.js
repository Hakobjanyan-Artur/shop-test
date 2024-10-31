import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/munu/Menu";
import Navbar from "../components/navbar/Navbar";


export default function HomeWrapper() {
    return (
        <>
            <Navbar />
            <Menu />
            <Outlet />
        </>
    )
}