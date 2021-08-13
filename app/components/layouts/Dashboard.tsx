import React, { useState } from "react";
import Meta from '../Meta';
import Sidebar from "../dashboard/Sidebar/Sidebar";
import Header from "../dashboard/Header/Header";
import WelcomeBanner from "../dashboard/partials/WelcomeBanner";


const Dashboard: React.FC<{}> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Meta />
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" style={{ background: '#F4F7FC'}}>
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            {/* Welcome banner */}
                            <WelcomeBanner />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Dashboard
