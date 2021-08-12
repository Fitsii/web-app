import React, { Component } from 'react';
import Meta from '../Meta';

class Default extends Component {
    render() {
        return (
            <div className="flex flex-col h-screen">
                <Meta />
                <main className="flex-1 bg-white">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Default;
