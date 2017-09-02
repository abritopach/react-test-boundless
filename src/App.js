import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ArrowKeyNavigation from 'boundless-arrow-key-navigation';

class App extends Component {

    state = {
        items: [ 'lorem', 'ipsum', 'dolor' ],
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <section>
                    <h6>Horizontal-only</h6>
                    <ArrowKeyNavigation className='demo-loose-list' mode={ArrowKeyNavigation.mode.HORIZONTAL}>
                        {this.state.items.map((item) => <span key={item}>{item}</span>)}
                    </ArrowKeyNavigation>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
