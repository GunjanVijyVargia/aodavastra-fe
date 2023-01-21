import React, { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "../Routes/Public";
import PrivateRoute from "../Routes/Private";
import { Grid } from "@mui/material";
import EmptyBag from "../Components/EmptyBag";
const AddedToCart = lazy(() => import('../Components/AddedToCart'));
const SignUpComponent = lazy(() => import("../Components/SignUp"));
const Login = lazy(() => import("../Components/Login"));
const RecoverComponent = lazy(() =>
  import("../Components/Login/recoverPassword")
);
const ConfirmPassword = lazy(() =>
  import("../Components/Login/ConfirmPassword")
);
const Home = lazy(() => import("../Components/Home"));
const Profile = lazy(() => import("../Components/Profile"));
const Orders = lazy(() => import("../Components/Orders"));
const OrdersDetails = lazy(() => import("../Components/Orders/ordersDetails"));
const UpdatePassword = lazy(() =>
  import("../Components/Profile/updatePassword")
);
const AddressAction = lazy(() =>
  import("../Components/Addresses/addressAction")
);
const Wishlist = lazy(() => import("../Components/Wishlist"));
const Address = lazy(() => import("../Components/Addresses"));

const masterComponent = () => {
  return (
    <>
      {/* <ErrorSnackbar ref={r => ToasterService._ref = r} /> */}
      <Suspense
        fallback={
          <Grid
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" size={200} thickness={1} />
          </Grid>
        }
      >
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute component={<SignUpComponent />} />}
          ></Route>
          <Route
            path="/login"
            element={<PublicRoute component={<Login />} />}
          ></Route>
          <Route
            path="/recover-password"
            element={<PublicRoute component={<RecoverComponent />} />}
          ></Route>
          <Route
            path="/password-reset-confirm/:token"
            element={<PublicRoute component={<ConfirmPassword />} />}
          ></Route>
          <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />} />}
          ></Route>
          <Route
            path="/orders"
            element={<PrivateRoute component={<Orders />} />}
          ></Route>
          <Route
            path="/wishlist"
            element={<PrivateRoute component={<Wishlist />} />}
          ></Route>
          <Route
            path="/address"
            element={<PrivateRoute component={<Address />} />}
          ></Route>
          <Route
            path="/change-password"
            element={<PrivateRoute component={<UpdatePassword />} />}
          ></Route>
          <Route
            path="/address/add"
            element={<PrivateRoute component={<AddressAction />} />}
          ></Route>
          <Route
            path="/address/edit/:id"
            element={<PrivateRoute component={<AddressAction />} />}
          ></Route>
          <Route
            path="/orders/:orderId"
            element={<PrivateRoute component={<OrdersDetails />} />}
          ></Route>
          <Route
            path="/emptybag"
            element={<PrivateRoute component={<EmptyBag />} />}
          ></Route>
          <Route
            path="/"
            element={<PrivateRoute component={<Home />} />}
          ></Route>
            <Route path="/list" element={<PrivateRoute component={<AddedToCart />} />}></Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
export default masterComponent;
