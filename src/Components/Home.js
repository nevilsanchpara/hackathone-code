import React from "react";
import "./Home.css";
import {useState} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useFormik} from "formik";
import * as yup from "yup";
import img from "./image1.png";

const defaultValue = {
  email: "",
  password: "",
};
const Home = () => {
  let history = useHistory();
  const [isLoading, setIsloading] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string("Please enter email")
      .email("Please enter valid email")
      .required("Please enter email"),
    password: yup.string().required("Please enter password"),
  });
  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =
    useFormik({
      initialValues: defaultValue,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
        setIsloading(true);
        axios
          .post(
            "https://heroku-backend-hackathone.herokuapp.com/api/user/login",
            values
          )
          .then((response) => {
            console.log("hi inside axios");
            console.log(response);
            if (response.data.status === 200) {
              setIsloading(false);
              toast.success("Login successfully done!");
              setTimeout(() => {
                if (response.data.data.roleId === 1) {
                  localStorage.setItem("type", "admin");
                  localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                  );
                } else {
                  localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                  );
                  localStorage.setItem("type", "supervisor");
                }
                history.push("/user/dashboard");
                // nav("/admin-dashboard");
              }, 2000);
            } else {
              toast.error("Enter valid credentials!");
            }
          })
          .catch((e) => console.log(e));
      },
    });

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // axios
  //   .post("https://heroku-backend-hackathone.herokuapp.com/api/user/login", {
  //     email,
  //     password,
  //   })
  //   .then((response) => {
  //     console.log("hi inside axios");
  //     console.log(response);
  //     if (response.data.status === 200) {
  //       toast.success("Login successfully done!");
  //       setTimeout(() => {
  //         if (response.data.data.roleId === 1) {
  //           localStorage.setItem("type", "admin");
  //           localStorage.setItem("user", JSON.stringify(response.data.data));
  //         } else {
  //           localStorage.setItem("user", JSON.stringify(response.data.data));
  //           localStorage.setItem("type", "supervisor");
  //         }
  //         // nav("/admin-dashboard");
  //       }, 2000);
  //     } else {
  //       toast.error("Enter valid credentials!");
  //     }
  //   })
  //   .catch((e) => console.log(e));
  //   console.log("hi");
  // };

  return (
    <>
      <img src={img} className='bg-img' alt='...' />
      <div className='loginbox'>
        <h1 style={{color: "black"}}>Login Here</h1>
        <form method='post' action='#'>
          <p>Email</p>
          <input
            type='text'
            placeholder='Enter Email'
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
            onBlur={handleBlur}
            name='email'
          />
          {errors.email && touched.email && (
            <p className='form_error mb-2'>{errors.email}</p>
          )}
          <div className='mt-4'>
            <p>Password</p>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={handleChange}
              onBlur={handleBlur}
              name='password'
            />
            {errors.password && touched.password && (
              <p className='form_error'>{errors.password}</p>
            )}
          </div>
          {isLoading ? (
            <input
              className='mt-4'
              type='submit'
              value='Loading...'
              onClick={handleSubmit}
              disabled
            />
          ) : (
            <input
              className='mt-4'
              type='submit'
              value='Login'
              onClick={handleSubmit}
            />
          )}
          <Link to='#'>Lost your password?</Link>
          <br />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
