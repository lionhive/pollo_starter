"use strict";
import { AsyncStorage } from "react-native";

// Key used in local storage.
const storageKey:string = "auth_token";

// Tries to load token from local storage.
async function tryLoadToken() {
  try {
    const token = await AsyncStorage.getItem(storageKey);
    if (token) {
      console.log("Auth token loaded:");
      return token;
    } else {
      console.log("Auth token token not found.");
    }
  } catch (error) {
    console.log("Error loading auth token:" + error);
  }
};

// Write token to local storage.
async function saveToken(token: string) {
  AsyncStorage.setItem(storageKey, token);
}

// Deletes token from local storage.
async function clearToken() {
  AsyncStorage.removeItem(storageKey);
}

export {clearToken, saveToken, tryLoadToken};
