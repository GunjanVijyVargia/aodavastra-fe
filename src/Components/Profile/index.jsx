import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  useTheme,
  OutlinedInput,
} from "@mui/material";

import Layout from "../Layout";
import { LeftNavbar } from "../Leftbar";
import themes from "../../Assets/Styles/theme";
import userLogo from "../../Assets/Images/user_logo.png";
import closet from "../../Assets/Images/closet.svg";
import nextButton from "../../Assets/Images/next_button.svg";
import post1 from "../../Assets/Images/post-1.png";
import post2 from "../../Assets/Images/post-2.png";
import post3 from "../../Assets/Images/post-3.png";
import "../index.scss";
import { BecomeInfluencer } from "../Dialog/becomeInfluencer";

const Profile = () => {
  const theme = useTheme();
  const [disabled, setDisabled] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isProfile, setProfile] = useState(true);
  const [isFollowing, setFollowing] = useState(false);
  const [isPosts, setPosts] = useState(false);
  const [isBecomeInfluencer, setBecomeInfluencer]=useState(false)

  const handleFollower = () => {
    setFollowing(true);
    setProfile(false);
  };
  const handlePosts = () => {
    setPosts(true);
    setProfile(false);
  };
  const handleEdit = () => {
    setIsEdit(true);
    setDisabled(false);
  };

  return (
    <>
      <Box
        className="container_div"
        sx={{
          marginTop: "8pc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            // maxWidth: "1280px",
          }}
        >
          <Grid
            container
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            <Grid
              item
              md={4}
              lg={4}
              className="profile_div"
              sx={{ display: "flex", justifyContent: "end"}}
            >
              <LeftNavbar />
            </Grid>
            {isProfile && (
              <Grid item sx={{ width: "466px" }}>
                <Box
                  sx={{
                    width: "100%",
                    [theme.breakpoints.down("md")]: {
                      display: "flex,",
                      alignItems: "center",
                      justifyContent: "center",
                      width: " 100%",
                    },
                  }}
                >
                  <Box sx={{ width: "144px", height: "144px", margin: "auto" }}>
                    <img src={userLogo} alt="user_logo" />
                  </Box>
                </Box>
                {!isEdit ? (
                  <Grid sx={{ display: "flex", margin: "22px 0px 24px 0px" }}>
                    <Box
                      onClick={handleFollower}
                      sx={{
                        display: "flex",
                        width: "50%",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginRight: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        157
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginLeft: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        Following
                      </Typography>
                    </Box>
                    <Box onClick={handlePosts} sx={{ display: "flex",cursor: "pointer", }}>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginRight: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        5
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginLeft: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        Liked Posts
                      </Typography>
                    </Box>
                  </Grid>
                ) : (
                  <Grid
                    item
                    className="semi-outlined-button"
                    variant="outlined"
                    sx={{
                      width: "50%",
                      margin: "24px auto",
                      cursor: "pointer",
                    }}
                  >
                    Change Picture
                  </Grid>
                )}
                <Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                      Name
                    </Typography>
                    {!isEdit && (
                      <Typography
                        sx={{
                          fontSize: "14.8",
                          fontWeight: "600",
                          textDecorationLine: "underline",
                          color: themes.primaryColor,
                          cursor: "pointer",
                        }}
                        onClick={handleEdit}
                      >
                        Edit Profile
                      </Typography>
                    )}
                  </Grid>
                  <OutlinedInput
                    disabled={disabled}
                    placeholder="Anjali Verma"
                    size="small"
                    fullWidth
                    name="name"
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          opacity: 0.7,
                          fontSize: "19px",
                        },
                      },
                    }}
                  />
                  <Grid sx={{ marginTop: "19px" }}>
                    <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                      Bio
                    </Typography>
                    <OutlinedInput
                      placeholder="In a world where you can be anyone, be yourself 👑"
                      size="small"
                      disabled={disabled}
                      fullWidth
                      name="bio"
                      multiline
                      inputProps={{
                        sx: {
                          "&::placeholder": {
                            opacity: 0.7,
                            fontSize: "19px",
                          },
                        },
                      }}
                      rows={4}
                    />
                  </Grid>

                  {!isEdit ? (
                    <Grid className="become_creator" onClick={()=>setBecomeInfluencer(true)}>
                      <img
                        src={closet}
                        width="38"
                        height="24"
                        alt="become_logo"
                      />
                      <Typography>Become a ModaVastra creator</Typography>
                      <img src={nextButton} alt="next_logo" />
                    </Grid>
                  ) : (
                    <Grid className="save_changes">Save Changes</Grid>
                  )}
                </Grid>
              </Grid>
            )}
            {isFollowing && (
              <Grid item md={4} lg={4}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    margin: "0px 0px 8px 26px",
                  }}
                >
                  Followings
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "113.91px",
                    background: themes.lightBackground,
                    borderRadius: "5.1px",
                    display: "flex",
                    margin: "8.4px 0px",
                  }}
                >
                  <Box
                    sx={{
                      width: "93px",
                      height: "93px",
                      borderRadius: "50px",
                      padding: "10.35px",
                    }}
                  >
                    <img src={userLogo} alt="demo_img" height={"100%"} />
                  </Box>
                  <Box className="follwer_user">
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                        padding: "10.35px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "23.3px",
                          lineHeight: "35px",
                        }}
                      >
                        Sonali
                      </Typography>
                      <Box className="unfollow_button">Unfollow</Box>
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "18.1px",
                        padding: "0px 10.35px",
                      }}
                    >
                      In a world where you can be a king...
                    </Grid>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "113.91px",
                    background: themes.lightBackground,
                    borderRadius: "5.1px",
                    display: "flex",
                    margin: "8.4px 0px",
                  }}
                >
                  <Box
                    sx={{
                      width: "93px",
                      height: "93px",
                      borderRadius: "50px",
                      padding: "10.35px",
                    }}
                  >
                    <img src={userLogo} alt="demo_img" height={"100%"} />
                  </Box>
                  <Box className="follwer_user">
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                        padding: "10.35px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "23.3px",
                          lineHeight: "35px",
                        }}
                      >
                        Sonali
                      </Typography>
                      <Box className="unfollow_button">Unfollow</Box>
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "18.1px",
                        padding: "0px 10.35px",
                      }}
                    >
                      In a world where you can be a king...
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            )}
            {isPosts && (
              <Grid item md={6} lg={6}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    margin: "0px 0px 8px 26px",
                  }}
                >
                  Liked Posts
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Grid sx={{ height: "240px", width: "240px" }}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={post1}
                      alt="post"
                    />
                  </Grid>
                  <Grid sx={{ height: "240px", width: "240px" }}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={post2}
                      alt="post"
                    />
                  </Grid>
                  <Grid sx={{ height: "240px", width: "240px" }}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={post3}
                      alt="post"
                    />
                  </Grid>
                  <Grid sx={{ height: "240px", width: "240px" }}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={post3}
                      alt="post"
                    />
                  </Grid>
                </Box>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Box>
      <BecomeInfluencer open={isBecomeInfluencer} handleClose={()=>setBecomeInfluencer(false)}/>
    </>
  );
};
export default Layout(Profile);
