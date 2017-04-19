// Example of nicelyistyled form.  See form.tsx for a simpler variation.
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
  Select,
} from 'react-native-clean-form'
import {
  Input,
  Switch
} from 'react-native-clean-form/redux-form'
import { View, Text } from 'react-native'

import * as form_utils from "../common/form_utils";
import { validate } from "../common/form_utils";

// Todo: Move error rendering outside the form, leave form to be form only.
import styles from "../common/form_styles";
const renderErrors = (errors) => (
  <View >
    {errors.map((error, index) => <Text style={styles.error} key={index}>{error}</Text>)}
  </View>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }
  render() {
    const errors = this.props.errors <= 0 ? null : renderErrors(this.props.errors);
    const { handleSubmit, submitting } = this.props;
    console.log("printing props.errors and errors");
    console.log(this.props.errors);
    console.log(errors);
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="name" label="Name" placeholder="John" />
            <Input name="username" label="Username" placeholder="jdoe" />
            <Input name="email" label="Email" placeholder="something@domain.com" keyboardType="email-address" returnKeyType="next" blurOnSubmit={false} />
            <Input name="password" label="Password" placeholder="secret" secureTextEntry={true} returnKeyType="next" blurOnSubmit={true} />
            <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" dataDetectorTypes="phoneNumber" keyboardType="phone-pad" />
            <Input name="message" label="Message" placeholder="" multiline={true} numberOfLines={2} inlineLabel={false} />
          </Fieldset>
          <Fieldset label="Home Location" last>
            <Input name="address" label="Address" placeholder="Hejrevej 33" />
            <Input name="city" label="City" placeholder="Copenhagen" />
            <Input name="zip" label="ZIP Code" placeholder="2400" />

            <Switch label="Save my details" border={false} name="save_details" />
          </Fieldset>
        </FieldsContainer>
        <View>
        {errors}
        </View>
        <ActionsContainer>
          <Button onPress={handleSubmit} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}
// To add icon use:
// <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>

export default reduxForm({
  form: "login", // unique identifier
  validate, // validation function
})(SignUpForm);