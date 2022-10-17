import React from 'react';
import android from "../static/2.jpeg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Upload from './upload';

const Image = styled("div")(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        height: "50%",
        marginLeft: 150,
    },

}));

export default function Body() {
    return (
        <div style={styles.container}>
            <Box flex={3}>
                <img src={android} style={{ height: window.innerHeight / 2, width: "100%" }} />
            </Box>
            <Box flex={4}>
                <Upload />
            </Box>
            <Box flex={3} justifyContent="center" style={{display:"flex",flexDirection:"column"}}>
                <h1>How it works?</h1>
                <p>Just upload the video and it will provide you All the video details and its metadata.</p>
                <a className="more" style={{ backgroundColor: "white",width:"20%" }}>Read More</a>
            </Box>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        bottom: window.innerHeight / 3
    }
}
