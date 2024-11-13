import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/munu/Menu";
import Navbar from "../components/navbar/Navbar";
import NavbarBottom from "./NavbarBottom";


export default function HomeWrapper() {
    return (
        <>
            <Navbar />
            <NavbarBottom />
            <Menu />
            <Outlet />
        </>
    )
}