"use strict";
import React, { Component } from 'react';
import { View, ViewStyle, Text, TextInput, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


interface Props {}  // empty.
interface State {
  name: string;
}  // empty.class 

class President extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      name: 'George Washington',
    }
    this.updateName = this.updateName.bind(this)
  }
  updateName(name: string) {
    this.setState({
      name
    })
  }
  render () {
    const query = gql`query PresidentQuery($name: String!) { 
      president(name: $name) {
        name
        term
        party
      }
    }`

    const PresidentElem = ({ data }: { data: any }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data.president && data.president.name}</Text>
        <Text>Party: {data.president && data.president.party}</Text>
        <Text>Term: {data.president && data.president.term}</Text>
      </View>
    )
    
    const ViewWithData: any = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(PresidentElem)

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
        <TextInput
          onChangeText={this.updateName}
          style={styles.input} />
        <ViewWithData />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,
  input: {
    backgroundColor: '#dddddd',
    height: 50,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  } as ViewStyle
})

export default President;