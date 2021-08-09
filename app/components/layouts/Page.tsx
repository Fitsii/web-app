import React, { Component } from 'react';
import Meta from '../Meta';

import MainNav from '../Navbars/MainNav'
import MainFooter from '../Footers/MainFooter'

class Page extends Component {
    render() {
        return (
            <div className="flex flex-col h-screen">
                <Meta />
                <header>
                    <MainNav />
                </header>
                <main className="flex-1 bg-white">
                    {this.props.children}
                </main>
                <footer className="bg-gray-100">
                    <MainFooter />
                </footer>
            </div>
        );
    }
}

export default Page;
