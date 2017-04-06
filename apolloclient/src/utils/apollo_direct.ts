"use strict";
// Library for calling graphql requests directly from redux reducers.
// client: redux client
// gql: gql ` string
import gql from "graphql-tag";
function generateMutationObject(gql: any, variables: any) {
    return {
        mutation: gql,
        variables,
    };
};
function generateQueryObject(gql: any, variables: any) {
    return {
        query: gql,
        variables,
    };
};

export function serverMutate(client: any, gql: any, variables: any) {
  return client.mutate(generateMutationObject(gql, variables));
}

export function serverQuery(client: any, gql: any, variables: any) {
  return client.query(generateQueryObject(gql, variables));
}