import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout";
import bag from "../../Assets/Images/Asset 17@2x 1.svg";
const EmptyBag = () => {
  return (
    <>
      <Grid
        container
        md={12}
        lg={12}
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
          display: { xs: "none", sm: "flex", md: "flex" },
          //   mt: "20vh",
        }}
      >
        <Grid
          item
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "260px",
              height: "51px",
              position: "absolute",
              top: "15vh",
              left: "40vw",
              color: "#7A628F",
              fontFamily: "poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "34px",
              lineHeight: "51px",
            }}
          >
            Shopping Bag
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              //   background: "url(Asset 17@2x.png)",
              position: "absolute",
              width: "348px",
              height: "318px",
              left: "36vw",
              top: "30vh",
              //   backgroundImage: { bag },
            }}
          >
            <img src={bag} alt="emptybag"></img>
          </Box>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "466px",
              height: "36px",
              position: "absolute",
              top: "80vh",
              left: "33vw",
              color: "#3C3C3C",
              fontFamily: "poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            Your Shopping Bag is Empty Right Now.
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A585C1",
              position: "absolute",
              width: "400px",
              height: "48px",
              left: "35vw",
              top: "90vh",
              color: "white",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        sm={12}
        xs={12}
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
          display: { xs: "flex", sm: "none", md: "none" },
        }}
      >
        <Grid
          item
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              //   background: "url(Asset 17@2x.png)",
              position: "absolute",
              width: "348px",
              height: "318px",
              left: "40vw",
              top: "30vh",
              //   backgroundImage: { bag },
            }}
          >
            <img src={bag} alt="emptybag"></img>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "60vw",
              height: "36px",
              position: "absolute",
              top: "45vh",
              left: "30vw",
              color: "#3C3C3C",
              fontFamily: "poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "30px",
              textAlign: "center",
            }}
          >
            Your Shopping Bag is Empty Right Now.
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A585C1",
              position: "absolute",
              width: "200px",
              height: "40px",
              left: "35vw",
              top: "80vh",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              textAlign: "center",
            }}
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout(EmptyBag);
