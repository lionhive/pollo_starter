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

import * as form_utils from "../common/form_utils";
import { validate } from "../common/form_utils";

import styles from "../common/form_styles";

// This is a redux-forms stateless function documented here:
// http://redux-form.com/6.0.0-alpha.4/docs/api/Field.md/#usage
const renderInput = (props: any) => {
  const { input: { onChange, ...restInput } } = props;
  const { meta: { touched, error, warning } } = props;
  const { placeholder, secureTextEntry } = props;
  return (
    // TODO: Add a <vieW> wrapper around this.
    <View><TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      {...restInput} />
      {touched && ((error && <Text style={styles.error}>{error}</Text>) ||
        (warning && <Text style={styles.error}>{warning}</Text>))}</View>
  );
};

// Todo: Move error rendering outside the form, leave form to be form only.
const renderErrors = (errors: any) => (
  <View >
    {errors.map((error: string, index: any) => <Text style={styles.error} key={index}>{error}</Text>)}
  </View>
);

interface IProps extends React.Props<SignUpForm> {
  signingIn: boolean;
  errors: any;
  // handleSubmit calls onSubmit internally.
  onSubmit: any;
  handleSubmit?: any;
};
interface IState {
};

class SignUpForm extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }
  public render() {
    const { handleSubmit } = this.props;
    // Copy data injected into Props to local variables.
    const errors = this.props.errors <= 0 ? null : renderErrors(this.props.errors);
    const signingIn = this.props.signingIn ? <Text style={styles.error}>Logging in...</Text> : <Text />;

    return (
      <View style={styles.container} >
        <Text>Username:</Text>
        <Field name="username" placeholder="username" component={renderInput} />
        <Text>Email::</Text>
        <Field name="email" placeholder="email@gmail.com" component={renderInput} />
        <Text>Passsword:</Text>
        <Field name="password" secureTextEntry={true} placeholder="password" component={renderInput} />
        <Text>Phone:</Text>
        <Field name="phone" placeholder="555-123-4567" normalize={form_utils.normalizePhone} component={renderInput} />
        <Text>Date of birth:</Text>
        <Field name="date_of_birth" placeholder="01/01/1999" component={renderInput} />
        <Text>Driver's License #:</Text>
        <Field name="age" placeholder="ABCD*1234" component={renderInput} />
        <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.input}>Submit</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
};

export default reduxForm({
  form: "login", // unique identifier
  validate, // validation function
})(SignUpForm);
