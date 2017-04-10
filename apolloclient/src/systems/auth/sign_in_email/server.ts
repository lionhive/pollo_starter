// GraphQl server queries.
"use strict";
import {serverMutate} from "../../..//utils/apollo_direct";
import {authenticateUserMutation} from "./queries";

// Signs in with graphql.
export function signIn(client: any, variables: any) {
  return serverMutate(client, authenticateUserMutation, variables);
}
