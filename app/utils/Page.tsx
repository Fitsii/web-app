import React, { Component } from 'react';
import Meta from './Meta';

import MainNav from '../components/Navbars/MainNav'
import MainFooter from '../components/Footers/MainFooter'

class Page extends Component {
    render() {
        return (
            <div className="flex flex-col h-screen">
                <Meta />
                <header>
                    <MainNav />
                </header>
                <main className="flex-1">
                {this.props.children}
                </main>
                <footer>
                    <MainFooter />
                </footer>
            </div>
        );
    }
}

export default Page;
