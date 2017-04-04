"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Text, TextInput, View } from "react-native";


const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = (touched && error) ? "has-danger" : "";
  return (
    <div className={`form-group ${hasError}`}>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && error && <div className="form-control-feedback">{error}</div>}
      </div>
    </div>
  );
};
