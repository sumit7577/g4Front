import React from 'react';
import Body from "./body";
import Upload from "./upload";
import water from "../static/water.svg";

export default function Root() {
    return (
        <div className="App">
            <img src={water} className="background" alt="background" style={{ zIndex: -1 }} />
            <Body />
            <Upload />
        </div>
    )
}
