import React from 'react';
import Body from "./body";
import Upload from "./upload";
import water from "../static/water.svg";
import Header from './header';

export default function Root() {
    return (
        <div className="App">
            <Header />
            <img src={water} className="background" alt="background" />
            <Body />
        </div>
    )
}
