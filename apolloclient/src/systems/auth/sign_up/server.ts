// GraphQl server queries.
"use strict";
import {serverMutate} from "../../..//utils/apollo_direct";
import {addUserAndAuthenticateMutation} from "./queries";

// Signs in with graphql.
export function signUp(client: any, variables: any) {
  return serverMutate(client, addUserAndAuthenticateMutation, variables);
}
