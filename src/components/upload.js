import React, { useRef, useState } from "react";
import "../static/upload.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import { edit, home } from "../networking/api";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import UploadIcon from "@mui/icons-material/Upload";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const MainDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginLeft: "35%",
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
  const uploadRef = useRef(null);
  const [homeResp, setHomeResp] = useState(() => {
    return [];
  });
  const [id, setId] = useState(() => {
    return null;
  });
  const [flavour, setFlavour] = useState(() => {
    return null;
  });
  const [language, setLanguage] = useState(() => {
    return null;
  })
  React.useEffect(() => {
    (async () => {
      try {
        const homeData = await home();
        if (homeData.Success === true) {
          setHomeResp(homeData.message);
        } else {
          window.alert("There is Some Server Issue! Please Try Again Later");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const Upload = () => {
    if (fileName !== "" && flavour!= null && language !=null && id != null) {
      setUpload(true);
      (async () => {
        try {
          const response = await edit(fileName,language,id,flavour);
          console.log(response);
          setUpload(false);
          setResp(response);
        } catch (error) {
          setUpload(false);
          console.log(error);
        }
      })();
    } else {
      window.alert("Please Select a Valid File!");
    }
  };
  const [fileName, setfileName] = useState(() => {
    return "";
  });
  const [res, setResp] = useState(() => {
    return null;
  });
  const [upload, setUpload] = useState(false);
  return (
    <MainDiv>
      <div className="contaminent">
        {res === null ? (
          <div className="cards">
            <Card variant="outlined" sx={{ maxWidth: "35%", p: 2 }}>
              <Box>
                <Typography
                  align="center"
                  sx={{ fontWeight: "700", fontSize: 18 }}
                >
                  Upload Video
                </Typography>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={homeResp[0]?.Flavour}
                  onChange={(event) => {
                    setId(() => {
                      return event.target.value;
                    })
                  }}
                  helperText="Please select your Video Flavour Id"
                  sx={{ mt: 2 }}
                >
                  {homeResp[0]?.Flavour.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.id}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={homeResp[0]?.Flavour}
                  sx={{ mt: 2 }}
                  onChange={(event) => {
                    setFlavour(() => {
                      return event.target.value;
                    })
                  }}
                  helperText="Please select your Video Flavour"
                >
                  {homeResp[0]?.Flavour.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      {data.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-select-currency"
                  select
                  sx={{ mt: 2 }}
                  label="Select"
                  value={homeResp[0]?.Languages}
                  onChange={(event) => {
                    setLanguage(() => {
                      return event.target.value;
                    })
                  }}
                  helperText="Please select your Video Language"
                >
                  {homeResp[0]?.Languages.map((data, index) => (
                    <MenuItem key={index} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </TextField>

                <Box
                  sx={{
                    border: "1px dashed grey",
                    height: 40,
                    marginBottom: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <input
                    ref={uploadRef}
                    onChange={() => {
                      setfileName(() => {
                        return uploadRef.current.files[0];
                      });
                    }}
                    accept="video/mp4,video/x-m4v,video/*"
                    style={{ display: "none", width: "100%" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  {fileName == "" ? (
                    <>
                      <label
                        htmlFor="raised-button-file"
                        style={{
                          marginLeft: "30%",
                          fontFamily: "Rubik",
                          fontSize: 12,
                          color: "#2196f3",
                        }}
                      >
                        Browse Files:
                        <UploadIcon
                          sx={{ pr: 1, fontSize: 15, mt: 1, marginLeft: 0.5 }}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <label
                        htmlFor="raised-button-file"
                        style={{
                          marginLeft: "30%",
                          fontFamily: "Rubik",
                          fontSize: 12,
                          color: "#2196f3",
                        }}
                      >
                        {fileName.name}
                        <UploadIcon
                          sx={{ pr: 1, fontSize: 15, mt: 1, marginLeft: 0.5 }}
                        />
                      </label>
                    </>
                  )}
                </Box>

                <Button
                  onClick={Upload}
                  disabled={homeResp.length < 1 ? true : false}
                  size="large"
                  sx={{
                    backgroundColor: "#2196f3",
                    color: "white",
                    fontFamily: "Rubik",
                    "&:hover": {
                      backgroundColor: "#2196f3",
                    },
                    textTransform: "none",
                    width: "100%",
                  }}
                >
                  UPLOAD
                </Button>
              </Box>
            </Card>
          </div>
        ) : (
          <div style={{ maxWidth: "40%", marginRight: 10 }}>
            {res.success ? (
              <>
                <h2> Fps: {res.fps}</h2>
                <h2> Bitrate: {res.bitrate}</h2>
                <h2> Resolution: {res.resolution}</h2>
                <h2> Filename: {res.filename}</h2>
                <h2> MD5: {res.md5}</h2>
                <h2> Timestamp: {fileName?.lastModified}</h2>
                <h2> Path: {window.URL.createObjectURL(fileName)}</h2>
                <ColorButton
                  variant="contained"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Re-Upload
                </ColorButton>
              </>
            ) : (
              <>
                <h2>Something! Went Wrong Please Try Agin Later</h2>
                <ColorButton
                  variant="contained"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Re-Upload
                </ColorButton>
              </>
            )}
          </div>
        )}

        {upload && (
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "8%" }}
          >
            <CircularProgress />
            <h2 style={{ marginLeft: 10 }}>Uploading...</h2>
          </div>
        )}
      </div>
    </MainDiv>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px",
  },
};
