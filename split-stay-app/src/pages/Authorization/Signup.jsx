import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import EmailInput from "../../components/FormComponents/EmailInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../../components/HomeButtons";
import Slides from "../../components/FormComponents/SlideComponent";
import axios from "axios";
import { Authentication } from "../../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const auth = getAuth();
auth.languageCode = "it";

const SignupPage = () => {
  const [userfullName, setUserFullName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setuserConfirmPassword] = useState();
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userfullName !== "" ||
      userEmail == !"" ||
      (userPassword == !"" && userPassword == userConfirmPassword)
    ) {
      const result = await axios.post("http://localhost:3000/register", {
        fullName: userfullName,
        email: userEmail,
        password: userPassword,
      });
      if (result.status == 200) {
        alert("Registration Successfull");
        navigate("/authemail");
      } else {
        alert("Provide correct details");
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
      alert("User sucessfully Register");
    }
  };

  const googleHandler = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Authentication, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const idToken = await Authentication.currentUser.getIdToken();
        const user = result.user;
        console.log("user==...", user);
        if (user) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userData", JSON.stringify(user.email));
          authUserData(user);
          navigate("/authemail");
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
          navigate("/authemail");
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
          navigate("/authemail");
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
    <div className="md:py-40 py-32">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <div className="p-0 px-10">
            {/* <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse pb-8"
            >
              // {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            {/* </Link> */}
            <h1 className=" font-bold text-2xl lg:text-4xl">
              Welcome back! Glad to see you, Again!
            </h1>
            <form onSubmit={handleSubmit}>
              <EmailInput
                type={"name"}
                label={"Full Name"}
                value={userfullName}
                handleChange={(e) => setUserFullName(e.target.value)}
                name="userfullName"
                required
              />
              <EmailInput
                type={"email"}
                label={"Email Address"}
                value={userEmail}
                handleChange={(e) => setUserEmail(e.target.value)}
                name="userEmail"
                error={emailError}
                required
              />
              <PasswordInput
                label={"Password"}
                value={userPassword}
                handleChange={(e) => setUserPassword(e.target.value)}
                name="userPassword"
                error={passwordError}
                required
              />
              <PasswordInput
                label={"Confirm Password"}
                value={userConfirmPassword}
                handleChange={(e) => setuserConfirmPassword(e.target.value)}
                name="userConfirmPassword"
                required
              />
              <div className="mt-4">
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
              <HomeButtons_Solid className=" mt-8 px-10 w-full">
                Agree and Register
              </HomeButtons_Solid>
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
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 flex justify-around font-medium items-center fw-lighter w-36 "
                onClick={appleHandler}
              >
                <img src="/apple.png"></img>
                <span className="hidden lg:block">Apple</span>
              </HomeButtons_Hollow>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 fw-lighter font-medium flex justify-around w-36"
                onClick={googleHandler}
              >
                <img src="/google.png"></img>
                <span className="hidden lg:block">Google</span>
              </HomeButtons_Hollow>
            </div>
          </div>
          <div className=" text-center pt-4">
            <p>
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-Primarycolor">Log in now</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-between flex-row pt-20 pb-16 px-6 mt-10 bg-Graybg text-TextFooterLogin ">
            <p>splitstay.com © 2024</p>
            <Link>Privacy Policy</Link>
          </div>
        </div>
        <div className="relative hidden lg:block lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/signup_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter:
                "brightness(60%) contrast(120%) sepia(10%) hue-rotate(-20deg)",
              boxShadow: "rgb(255 183 147 / 20%) 0px 0px 0px 1000px inset",
            }}
          ></div>
          <Slides
            text={{
              heading: "Welcome to Splitstay",
              description:
                "A trusted marketplace and social network for shared lodging ",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
