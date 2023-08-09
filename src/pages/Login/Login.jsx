import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import signinanim from "../../assets/animations/login.json";
import Lottie from "lottie-react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Logged In Successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-5 w-full p-10">
        <Lottie
          className="w-full max-w-[400px]"
          animationData={signinanim}
          loop={true}
        />

        <div className=" max-w-[400px] w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col bg-base-100 p-6 shadow-2xl rounded-lg"
          >
            <p className="text-base">Email</p>

            <input
              type="email"
              name="email"
              placeholder="email"
              className="border-2 rounded-md p-2 w-full"
            />

            <p className="text-base">Password</p>

            <input
              type="password"
              name="password"
              placeholder="password"
              className="border-2 rounded-md p-2 w-full"
            />

            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>

            {/* captcha */}

            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="type the captcha above"
              className="border-2 rounded-md p-2 w-full"
            />

            {/* // TODO make button disable for captcha */}

            <input
              disabled={disabled}
              className="border-2 rounded-md p-2 w-full bg-[#FFB946] text-white"
              type="submit"
              value="Login"
            />

            <p>
              <small>
                New Here?{" "}
                <Link to="/signup" className="text-[#FFB946] bold">
                  Create an account
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
