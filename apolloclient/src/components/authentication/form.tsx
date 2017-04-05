"use strict";
// React-redux form example with validation and normalization.
// In the future switch to react-redux-clean-form, comess with nice styling but is broken now.
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Field, reduxForm } from "redux-form";

// This is a redux-forms stateless function documented here:
// http://redux-form.com/6.0.0-alpha.4/docs/api/Field.md/#usage
const renderInput = (props: any) => {
  const { input: { onChange, ...restInput } } = props;
  const { meta: { touched, error, warning } } = props;
  const { placeholder, secureTextEntry } = props;
  return (<View>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      {...restInput} />
    {touched && ((error && <Text style={styles.error}>{error}</Text>) ||
      (warning && <Text style={styles.error}>{warning}</Text>))}
  </View>);
};

// Todo: Move error rendering outside the form, leave form to be form only.
const renderErrors = (errors: any) => (
  <View >
    {errors.map((error: string, index: any) => <Text style={styles.error} key={index}>{error}</Text>)}
  </View>
);

interface IProps extends React.Props<Form> {
  signingIn: boolean;
  errors: any;
  // handleSubmit calls onSubmit internally.
  onSubmit: any;
  handleSubmit?: any;
};
interface IState {
};

class Form extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }
  public render() {
    const { handleSubmit } = this.props;
    // Copy data injected into Props to local variables.
    const errors = this.props.errors <= 0 ? null : renderErrors(this.props.errors);
    const signingIn = this.props.signingIn ? <Text style={styles.error}>Logging in...</Text> : <Text />;
    console.log("rendering signingIn: " + this.props.signingIn)
    return (
      <View style={styles.container}>
        <Text>Email:</Text>
        <Field name="username" placeholder="username" component={renderInput} />
        <Field
          name="phone"
          placeholder="555-123-4567"
          normalize={normalizePhone}
          component={renderInput}
        />
        <Text>Password:</Text>
        <Field secureTextEntry={true} placeholder="password" name="password" component={renderInput} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        <Text></Text>
        {errors}
        {signingIn}
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
  if (values.password && values.password.length < 8) {
    //errors.password = 'Password must be 8 charaters long.';
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

const styles = StyleSheet.create({
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
});

export default reduxForm({
  form: "login", // unique identifier
  validate, // validation function
})(Form);
