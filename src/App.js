import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ArrowKeyNavigation from 'boundless-arrow-key-navigation';

class App extends Component {

    state = {
        items: [ 'lorem', 'ipsum', 'dolor' ],
    }

    render() {

        const videos = [
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=1"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=2"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=3"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=4"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=5"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=6"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=7"
            },
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                imageUrl: "http://lorempixel.com/214/317/?t=8"
            }
        ]

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, use the tab key to move to the item and then use the arrows keys (left and right).
                </p>
                <div>
                    <h2>ArrowKeyNavigation Horizontal Mode Only</h2>
                    <section>
                        <ArrowKeyNavigation mode={ArrowKeyNavigation.mode.HORIZONTAL}>
                            {this.state.items.map((item) => <span key={item}>{item}</span>)}
                        </ArrowKeyNavigation>
                    </section>
                    <br></br>
                    <section>
                        <ArrowKeyNavigation mode={ArrowKeyNavigation.mode.HORIZONTAL} className="video-thumbnail">
                            {videos.map((video, i) => (
                                <div key={i}>
                                    <video src={video.mediaUrl} poster={video.imageUrl} alt={video.description} />
                                </div>
                            ))}
                        </ArrowKeyNavigation>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
