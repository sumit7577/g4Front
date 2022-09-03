import React, { useRef, useState } from 'react';
import "../static/upload.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import edit from '../networking/api';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
const MainDiv = styled("div")(({ theme }) =>
({
    [theme.breakpoints.up("md")]: {
        marginLeft: "42%",
    },
    [theme.breakpoints.only("820")]: {
        marginLeft: "40%",
        marginTop: 300,
    },
    [theme.breakpoints.down("md")]: {
        marginLeft: "15%",
        marginTop: 320,
    },
}));

export default function Upload() {
    const openUpload = () => {
        uploadRef.current.click();
    }
    const uploadRef = useRef(null);
    
    const Upload = () => {
        setUpload(true);
        (async () => {
            try {
                const response = await edit(fileName);
                console.log(response);
                setUpload(false);
                setResp(response);
            }
            catch (error) {
                setUpload(false);
                console.log(error);
            }
        })();
    }
    const [fileName, setfileName] = useState(() => {
        return ""
    });
    const [res, setResp] = useState(() => {
        return null;
    })
    const [upload, setUpload] = useState(false);
    console.log(fileName);
    return (
        <MainDiv>
            <div className="contaminent" >
                {res === null ? <div className='card'>
                    <form>
                        <div className="content">
                            <h2 className="h11">01</h2>
                            <h4 className="h33">Frozen Store</h4>
                            <p className="pp">Video Meta Data Provider</p>
                            <label className="card-a btn" onClick={openUpload}>{fileName ? fileName.name : "Upload"}</label>
                            <input onChange={() => setfileName(() => {
                                return uploadRef.current.files[0];
                            })} ref={uploadRef} type="file" style={{ visibility: "hidden" }} accept="video/mp4,video/x-m4v,video/*" />
                            <ColorButton variant="contained" onClick={Upload}>Submit</ColorButton>
                        </div>
                    </form>
                </div> :
                    <div style={{ maxWidth: "40%", marginRight: 10 }}>
                        {res.success ?
                            <>
                                <h2> Fps: {res.fps}</h2>
                                <h2> Bitrate: {res.bitrate}</h2>
                                <h2> Resolution: {res.resolution}</h2>
                                <h2> Filename: {res.filename}</h2>
                                <h2> MD5: {res.md5}</h2>
                                <h2> Timestamp: {fileName?.lastModified}</h2>
                                <h2> Path: {window.URL.createObjectURL(fileName)}</h2>
                                <ColorButton variant="contained" onClick={() => {
                                    window.location.reload();
                                }}>Re-Upload</ColorButton>
                            </> :
                            <>
                                <h2>Something! Went Wrong Please Try Agin Later</h2>
                                <ColorButton variant="contained" onClick={() => {
                                    window.location.reload();
                                }}>Re-Upload</ColorButton>
                            </>
                        }

                    </div>
                }

                {upload && <div style={{ display: "flex", alignItems: "center", marginLeft: "8%" }}>
                    <CircularProgress />
                    <h2 style={{ marginLeft: 10 }}>Uploading...</h2>
                </div>}

            </div >
        </MainDiv >
    )
}
