import React, { useEffect, useState } from "react";
import { Outlet, Link, redirect, useNavigate } from "react-router-dom";
import EmailInput from "../../components/FormComponents/EmailInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../../components/HomeButtons";
import Slides from "../../components/FormComponents/SlideComponent";
import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { Authentication } from "../../firebase";

const auth = getAuth();
auth.languageCode = "it";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setemailError] = useState("");

  const [passwordError, setpasswordError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/experiences");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail !== "" || userPassword !== "") {
      const result = await axios.post("http://localhost:3000/login", {
        email: userEmail,
        password: userPassword,
      });
      if (result.status == 200) {
        console.log(result);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userFullName", result.data.data.fullName);
        localStorage.setItem("token", result.data.token);
        navigate("/experiences");
      } else {
        alert("Please provide email and password");
      }
    } else {
      userEmail === ""
        ? setemailError("Please provide email")
        : userPassword === ""
        ? setpasswordError("Please provide Password")
        : "";
    }
  };

  const authUserData = async (user) => {
    const result = await axios.post("http://localhost:3000/save-user", {
      fullName: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      uid: user.uid,
    });
    if (result.status == 200) {
      alert("User Logged in successfully");
    }
  };

  const googleHandler = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Authentication, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const idToken = await result.user.getIdToken(true);

        const user = result.user;
        console.log("user==...", user);

        if (user) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userEmail", user.email);
          localStorage.setItem("userFullName", user.displayName);
          localStorage.setItem("token", token);

          authUserData(user);

          navigate("/experiences");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("error=>", error);

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const facebookHandler = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
        console.log("user==...", user);
        if (user) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userData", JSON.stringify(user.email));
          authUserData(user);
          navigate("/experiences");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const appleHandler = async () => {
    console.log("apple clicked");
    const provider = new OAuthProvider("apple.com");
    getRedirectResult(auth)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        if (credential) {
          // You can also get the Apple OAuth Access and ID Tokens.
          const accessToken = credential.accessToken;
          const idToken = credential.idToken;
        }
        // The signed-in user info.
        const user = result.user;
        if (user) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userData", JSON.stringify(user.email));
          authUserData(user);
          navigate("/experiences");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = OAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="md:py-40 py-20">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <div className="p-8 ">
            {/* <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse pb-8"
            >
              <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" />
            </Link> */}
            <h1 className=" font-bold text-2xl lg:text-4xl">
              Welcome back! Glad to see you, Again!
            </h1>
            <form onSubmit={handleSubmit}>
              <EmailInput
                type={"email"}
                label={"Email Address"}
                value={userEmail}
                handleChange={(e) => setUserEmail(e.target.value)}
                name="email"
                userEmail={userEmail}
                required
                error={emailError}
              />
              <PasswordInput
                label={"Password"}
                value={userPassword}
                handleChange={(e) => setUserPassword(e.target.value)}
                name="password"
                required
                error={passwordError}
              />
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="form-checkbox h-4 w-4 text-goldenrod dark:text-goldenrod"
                    />

                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="#"
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              {/* <Link to={"/experiences"}> */}
              <HomeButtons_Solid
                className=" mt-16 px-10 w-full"
                // onClick={() => handleSubmit()}
                // onClick={()=>alert("Please enter your")}
              >
                Login
              </HomeButtons_Solid>
              {/* </Link> */}
            </form>
            <div className="mt-8 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <Link to="#" className="text-xs text-center text-gray-500">
                or continue with
              </Link>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="flex justify-center gap-4">
              <HomeButtons_Hollow
                className="py-1 px-1 mt-10 flex justify-around font-medium items-center fw-lighter w-40"
                onClick={facebookHandler}
              >
                <img src="/fb.png"></img>
                <span className="hidden lg:block">Facebook</span>
              </HomeButtons_Hollow>
              {/* <HomeButtons_Hollow
                className="py-1 px-4 mt-10 flex justify-around font-medium items-center fw-lighter w-36 "
                onClick={appleHandler}
              >
                <img src="/apple.png"></img>
                <span className="hidden lg:block">Apple</span>
              </HomeButtons_Hollow> */}
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 fw-lighter font-medium flex justify-around w-36"
                onClick={googleHandler}
              >
                <img src="/google.png"></img>
                <span className="hidden lg:block">Google</span>
              </HomeButtons_Hollow>
            </div>
          </div>
          <div className=" text-center pt-10">
            <p>
              Already have an account?{" "}
              <Link to={"/signup"}>
                <span className="text-Primarycolor">Register Now</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-between  pt-20 pb-16 px-6 mt-10 bg-Graybg text-TextFooterLogin ">
            <p>splitstay.com © 2024</p>
            <Link to={""}>Privacy Policy</Link>
          </div>
        </div>
        <div className="relative hidden lg:block lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/login_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter:
                "brightness(60%) contrast(120%) sepia(10%) hue-rotate(-20deg)",
              boxShadow: "rgb(209 60 10 / 20%) 0px 0px 0px 1000px inset",
            }}
          ></div>
          <Slides
            text={{
              heading: "Chat & Connect Seamlessly",
              description:
                "Built-in text, voice, video & calendar synchronization.",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
