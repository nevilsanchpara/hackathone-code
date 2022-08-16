import axios from "axios";
import React, {useState} from "react";
import "./AddStreetLight.css";
import {ToastContainer, toast} from "react-toastify";
// import {Formik, Form, Field, ErrorMessage} from "formik";
import {useFormik} from "formik";
import * as yup from "yup";

const defaultValue = {
  streetId: "",
  longitude: "",
  pincode: "",
  district: "",
  taluka: "",
  village: "",
  latitude: "",
};
const AddStreetLight = () => {
  const pincodeRegExp = /^[1-9][0-9]{5}$/;

  const validationSchema = yup.object({
    streetId: yup.string().required("Please enter streetId"),
    latitude: yup.number().required("Please enter latitude"),
    longitude: yup.number().required("Please enter longitude"),
    pincode: yup.string().matches(pincodeRegExp, "Pincode must be valid"),
    district: yup.string().required("Please enter district"),
    taluka: yup.string().required("Please enter taluka"),
    village: yup.string().required("Please enter village"),
  });

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =
    useFormik({
      initialValues: defaultValue,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
        axios
          .post(
            "https://heroku-backend-hackathone.herokuapp.com/api/position/position",
            values
          )
          .then((res) => {
            console.log(res);
            toast("Street Light Added successfully!");
            // setTimeout(() => {
            //   nav("/admin");
            // }, 2000);
          })
          .catch((e) => console.log(e));
      },
    });

  const submitHandler = (values) => {
    // let l1 = parseFloat(latitude);
    // let l2 = parseFloat(longitude);
    const obj = {
      // streetId,
      // longitude: l2,
      // latitude: l1,
      // pincode,
      // district,
      // taluka,
      // village,
    };
    // axios
    //   .post(
    //     "https://heroku-backend-hackathone.herokuapp.com/api/position/position",
    //     obj
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     toast("Street Light Added successfully!");
    //     // setTimeout(() => {
    //     //   nav("/admin");
    //     // }, 2000);
    //   })
    //   .catch((e) => console.log(e));
  };

  return (
    <>
      <div className='container-fluid pb-4 container-6'>
        <div className='row'>
          <div className='col-lg-2 col-sm-12 col-xs-12 mt-4'></div>
          <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4'>
            <div className='row'>
              <div className='col-12'>
                <span className='display13'>Add New Street Light</span>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display14'>
                  Street Light ID
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display15'
                    placeholder='Street Light ID'
                    name='streetId'
                    // onChange={(e) => setStreetId(e.target.value)}
                    value={values.streetId}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div className='error_containers'>
                    {errors.streetId && touched.streetId && (
                      <p className='form_error'>{errors.streetId}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display14'>
                  Position
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='number'
                    id='typeText'
                    className='display15'
                    placeholder='Latitude'
                    // onChange={(e) => setLatitude(e.target.value)}
                    value={values.latitude}
                    name='latitude'
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.latitude && touched.latitude && (
                    <p className='form_error'>{errors.latitude}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='number'
                    id='typeText'
                    className='display15'
                    placeholder='Longitute'
                    value={values.longitude}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name='longitude'
                    // onChange={(e) => setLongitude(e.target.value)}
                  />
                  {errors.longitude && touched.longitude && (
                    <p className='form_error'>{errors.longitude}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='row pt-4'>
              <div className='col-12'>
                <span className='text-uppercase fw-bolder display14'>
                  Address
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display15'
                    name='village'
                    placeholder='Village'
                    // onChange={(e) => setVillage(e.target.value)}
                    value={values.village}
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    className='display15'
                    placeholder='Taluka'
                    value={values.taluka}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name='taluka'
                  />
                  {errors.taluka && touched.taluka && (
                    <p className='form_error'>{errors.taluka}</p>
                  )}
                  {/* <ErrorMessage name='taluka' /> */}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='text'
                    id='typeText'
                    className='display15'
                    placeholder='District'
                    name='district'
                    // onChange={(e) => setDistrict(e.target.value)}
                    value={values.district}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.district && touched.district && (
                    <p className='form_error'>{errors.district}</p>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-2'>
                <div>
                  <input
                    type='number'
                    id='typeText'
                    className='display15'
                    placeholder='Pincode'
                    // onChange={(e) => setPincode(e.target.value)}
                    value={values.pincode}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name='pincode'
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
                    className='btn display16'
                    onClick={handleSubmit}>
                    Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 col-xs-12 mt-4'></div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddStreetLight;
