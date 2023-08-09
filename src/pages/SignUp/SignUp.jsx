import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import signupanim from "../../assets/animations/signupanim.json";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password, data.name).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("https://bistro-boss-server-vert-three.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                // console.log('user profile updated');
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  // console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      {/* <div className="hero min-h-screen bg-base-200"> */}
      <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-5 w-full p-10">
        <Lottie
          className="w-full max-w-[400px]"
          animationData={signupanim}
          loop={true}
        />

        <div className=" max-w-[400px] w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-base-100 p-6 shadow-2xl rounded-lg"
          >
            <p className="text-base">Name</p>

            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="border-2 rounded-md p-2 w-full"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}

            <p className="text-base">Photo URL</p>

            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="border-2 rounded-md p-2 w-full"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}

            <p className="text-base">Email</p>

            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="email"
              className="border-2 rounded-md p-2 w-full"
            />
            {errors.name && (
              <span className="text-red-600">Email is required</span>
            )}

            <p className="text-base">Password</p>

            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
              })}
              placeholder="password"
              className="border-2 rounded-md p-2 w-full"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-700">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-700">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxlength" && (
              <p className="text-red-700">Password must be 20 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-700">
                Password must have one uppercase, one lowercase, one number and
                one special character and less than 20 characters.{" "}
              </p>
            )}

            <label className="">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <input
              className="border-2 rounded-md p-2 w-full bg-[#9F7CE8] text-white"
              type="submit"
              value="Sign Up"
            />
            <p>
              <small>
                Already have an account{" "}
                <Link to="/login" className="text-[#9F7CE8] bold">
                  Login
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
