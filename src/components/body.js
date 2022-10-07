import React from 'react';
import android from "../static/2.jpeg";
import { styled } from '@mui/material/styles';

const Image = styled("div")(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        height: "50%",
        marginLeft: 150,
    },

}));

export default function Body() {
    return (
        <div style={{ position: "absolute", top: "4rem" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div>
                    <img src={android} alt="logo" style={{ width: "50%", height: "50%", marginLeft: 10 }} />
                    <Image>
                        <h2>Frozen Store</h2>
                    </Image>
                </div>
                <div style={{position:"absolute",top:"2rem"}}>
                    <h3 style={{fontSize:30}}>Flavour Managment</h3>
                </div>
                <div className="text" style={{ marginLeft: 8 }}>
                    <h1>How it works?</h1>
                    <p>Just upload the video and it will provide you All the video details and its metadata.</p>
                    <a className="more" style={{ backgroundColor: "white" }}>Read More</a>
                </div>
            </div>
        </div>
    )
}
