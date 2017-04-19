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
import styles2 from "../common/form_styles";
import styles from "../sign_in_email_fancy/styles";

import * as form_utils from "../common/form_utils";
import { validate } from "../common/form_utils";

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
            {errors}
            {signingIn}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default reduxForm({
  form: "login", // unique identifier
  validate, // validation function
})(SignInEmailForm);
