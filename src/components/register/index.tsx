import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import textStyle from "../../textStyle/text.module.css";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slice/userSlice";
// import { Route } from "react-router-dom";

const inputStyle = () => {
  return `${textStyle.text2} placeholder:text-[#A9ACB5] p-2 my-2 rounded-lg border-[1px] border-solid border-[#D6BBFB] shadow-md w-full`;
};

export default function Register({
  userAction,
}: {
  userAction: "signup" | "login";
}) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const baseUrl = "https://reqres.in/api";
    let url = `${baseUrl}/${userAction === "signup" ? "register" : "login"}`;
    try {
      const data = await axios.post(url, {
        email: input.email,
        password: input.password,
      });
      dispatch(login(data.data));
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        setError(error.response?.data.error);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);
  return (
    <div className="flex min-h-screen justify-center flex-col items-center">
      <div className="border-[1px] border-solid border-[#EEEEEE] rounded-2xl shadow-md p-4 w-96">
        <div className="flex justify-start gap-4 items-center">
          <div className="w-[50px] h-[44px]">
            <img src={"/logo.svg"} className="w-full" />
          </div>
          <div className={`${textStyle.headline} text-[#4E5D78] `}>Stack</div>
        </div>
        <div className={`${textStyle.subtitle} text-[#404040] my-5`}>
          {userAction === "signup"
            ? "Sign up to join with Stack"
            : "Sign In to continue with Stack"}
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div id="email" className={`${textStyle.text1} text-[#344054] my-2`}>
            {" "}
            Email
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => handleChange(e)}
            className={inputStyle()}
            required
          />
          <div id="email" className={`${textStyle.text1} text-[#344054] my-2`}>
            {" "}
            Password
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => handleChange(e)}
            className={inputStyle()}
            required
          />
          {error && (
            <div
              className={`${textStyle.text2} text-white bg-red-600 p-2 my-2 rounded-md`}
            >
              {error}
            </div>
          )}
          <button
            type="submit"
            className={`${textStyle.text2} bg-[#6941C6] w-full text-white`}
          >
            {userAction === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className={`${textStyle.text3} text-[#B0B7C3] my-2`}>
          {userAction === "signup" ? (
            <>
              Already have an account?{"   "}
              <Link to="/login" className="text-[#377DFF]">
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{"   "}
              <Link to="/signup" className="text-[#377DFF]">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
