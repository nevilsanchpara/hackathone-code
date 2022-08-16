import React, {useState, useEffect} from "react";
import "./AddUser.css";
import axios from "axios";
import {useFormik} from "formik";
import * as yup from "yup";
import {ToastContainer, toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const defaultValue = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  phone: "",
  pincode: "",
  village: "",
  district: "",
  state: "",
  taluka: "",
};
const AddUser = () => {
  let history = useHistory();

  const phoneRegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const pincodeRegExp = /^[1-9][0-9]{5}$/;

  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter firstname"),
    lastName: yup.string().required("Please enter lastname"),
    address: yup.string().required("Please enter address"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter email"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number must have length 10"),
    pincode: yup.string().matches(pincodeRegExp, "Pincode must be valid"),
    village: yup.string().required("Please enter village"),
    district: yup.string().required("Please enter district"),
    state: yup.string().required("Please enter state"),
    taluka: yup.string().required("Please enter taluka"),
  });

  // useEffect(() => {
  // console.log(localStorage.getItem("type"));
  // if (localStorage.getItem("type") === "supervisor") {
  //   setRoldId(3);
  // } else {
  //   setRoldId(2);
  // }
  // }, []);

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =
    useFormik({
      initialValues: defaultValue,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
        console.log(localStorage.getItem("type"));
        let roleId;
        if (localStorage.getItem("type") === "supervisor") {
          roleId = 3;
        } else {
          roleId = 2;
        }
        console.log(roleId);
        console.log(values);
        values.roleId = roleId;
        axios
          .post(
            "https://heroku-backend-hackathone.herokuapp.com/api/user/adduser",
            values
          )
          .then((res) => {
            console.log(res);
            console.table(values);
            toast.success("User Added successfully!");
            // setTimeout(() => {
            //   history.push("/user/dashboard");
            // }, 2000);
          })
          .catch((e) => console.log(e));
      },
    });
  return (
    <>
      <div className='container-fluid pb-4 container-5'>
        <div className='row'>
          <div className='col-lg-2 col-sm-12 col-xs-12 mt-4'></div>
          <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4'>
            <div className='row'>
              <div className='col-12'>
                <span className='display8'>Basic Information</span>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display9'>Name</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='First Name'
                    // onChange={(e) => setFirstName(e.target.value)}
                    name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName && (
                    <p className='form_error'>{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='Last Name'
                    // onChange={(e) => setLastName(e.target.value)}
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && (
                    <p className='form_error'>{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display9'>
                  Contact
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='Email'
                    // onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className='form_error'>{errors.email}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='number'
                    id='typeText'
                    className='display10'
                    placeholder='Mobile Number'
                    // onChange={(e) => setPhone(e.target.value)}
                    name='phone'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <p className='form_error'>{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display9'>
                  Personal Address
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 pt-2'>
                <div>
                  <textarea
                    className='display11'
                    placeholder='Personal Address'
                    // onChange={(e) => setAddress(e.target.value)}
                    name='address'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows='3'></textarea>
                  {errors.address && touched.address && (
                    <p className='form_error'>{errors.address}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display9'>
                  Working Address
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='Village'
                    // onChange={(e) => setVillage(e.target.value)}
                    name='village'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.village && touched.village && (
                    <p className='form_error'>{errors.village}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='Taluka'
                    // onChange={(e) => setTaluka(e.target.value)}
                    name='taluka'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.taluka && touched.taluka && (
                    <p className='form_error'>{errors.taluka}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='District'
                    name='district'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onChange={(e) => setDistrict(e.target.value)}
                  />
                  {errors.district && touched.district && (
                    <p className='form_error'>{errors.district}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display10'
                    placeholder='State'
                    // onChange={(e) => setState(e.target.value)}
                    name='state'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.state && touched.state && (
                    <p className='form_error'>{errors.state}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='number'
                    id='typeText'
                    className='display10'
                    placeholder='Pincode'
                    // onChange={(e) => setPincode(e.target.value)}
                    name='pincode'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.pincode && touched.pincode && (
                    <p className='form_error'>{errors.pincode}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-lg-2 col-md-2'>
                <div>
                  <button
                    type='submit'
                    className='btn display12'
                    onClick={handleSubmit}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 col-xs-12 mt-4'></div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddUser;
