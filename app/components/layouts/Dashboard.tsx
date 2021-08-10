import React from "react";
import Meta from '../Meta';

// components
import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";


const Dashboard: React.FC<{}> = ({ children }) => {
    return (
        <>
            <Meta />
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Dashboard
