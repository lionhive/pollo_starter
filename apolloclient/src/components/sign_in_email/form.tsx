"use strict";
// React-redux form example with validation and normalization.
// In the future switch to react-redux-clean-form, comess with nice styling but is broken now.
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Field, reduxForm } from "redux-form";
import styles from "../login/styles";

const lockIcon = require("../../../resources/components/login/images/lock.png");
const personIcon = require("../../../resources/components/login/images/person.png");

// This is a redux-forms stateless function documented here:
// http://redux-form.com/6.0.0-alpha.4/docs/api/Field.md/#usage
const renderInput = (props: any) => {
  const { input: { onChange, ...restInput } } = props;
  const { meta: { touched, error, warning } } = props;
  const { placeholder, secureTextEntry } = props;
  return (
    // TODO: Add a <vieW> wrapper around this.
    <View style={styles2.flexed}><TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      {...restInput} />
      {touched && ((error && <Text style={styles2.error}>{error}</Text>) ||
        (warning && <Text style={styles2.error}>{warning}</Text>))}</View>
  );
};

// Todo: Move error rendering outside the form, leave form to be form only.
const renderErrors = (errors: any) => (
  <View >
    {errors.map((error: string, index: any) => <Text style={styles2.error} key={index}>{error}</Text>)}
  </View>
);

interface IProps extends React.Props<SignInEmailForm> {
  signingIn: boolean;
  errors: any;
  // handleSubmit calls onSubmit internally.
  onSubmit: any;
  handleSubmit?: any;
};
interface IState {
};

/* phone
        <Field
          name="phone"
          placeholder="555-123-4567"
          normalize={normalizePhone}
          component={renderInput}
        />
        */
class SignInEmailForm extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }
  public render() {
    const { handleSubmit } = this.props;
    // Copy data injected into Props to local variables.
    const errors = this.props.errors <= 0 ? null : renderErrors(this.props.errors);
    const signingIn = this.props.signingIn ? <Text style={styles2.error}>Logging in...</Text> : <Text />;
    console.log("rendering signingIn: " + this.props.signingIn);
    /*
    return (
      <View style={styles2.container}>
        <Text>Email:</Text>
        <Field name="username" placeholder="username" component={renderInput} />

        <Text>Password:</Text>
        <Field secureTextEntry={true} placeholder="password" name="password" component={renderInput} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles2.button}>Submit</Text>
        </TouchableOpacity>
        <Text></Text>
        {errors}
        {signingIn}
      </View>
    );
    */
    return (
      <View style={styles.wrapper} >
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={personIcon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Field name="username" placeholder="username" component={renderInput} />
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={lockIcon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Field secureTextEntry={true} placeholder="password" name="password" component={renderInput} />
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            {errors}
            {signingIn}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.password && values.password.length < 3) {
    errors.password = "Password must be 3 charaters long.";
  }
  return errors;
};

function containsSpecialCharacter(str: string) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

const warn = (values: any) => {
  interface IWarnings {
    password?: string;
  }
  const warnings: IWarnings = {};
  if (values.password && !containsSpecialCharacter(values.password)) {
    warnings.password = "Password should contain a number or special character.";
  }
  if (values.password && values.password.length < 8) {
    warnings.password = "Password must be 8 charaters long.";
  }
  return warnings;
};

const normalizePhone = (value: string, previousValue: string) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + "-";
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3) + "-";
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3);
  }
  return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, 6) + "-" + onlyNums.slice(6, 10);
};

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    //    textAlign: "center",
    width: 250,
  },
  container: {
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 37,
    width: 250,
  },
  error: {
    color: "red",
  },
  flexed: {
    flex: 1,
  }
});

export default reduxForm({
  form: "login", // unique identifier
  validate, // validation function
})(SignInEmailForm);
