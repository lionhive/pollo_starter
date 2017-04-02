"use string";
import * as types from "../../components/authentication/action_types";
import { tryLoadToken } from "./utils_local_storage";

// Tries to load auth token from local storage and initializes redux store.
export default async function tryAutoLoginUser(store: any) {
  const token = await tryLoadToken();
  if (token) {
    // Update redux store and aupplication state.
    store.dispatch({ type: types.AUTH_SIGNIN });
  }
}
