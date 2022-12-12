import createDataContext from "./createDataContext";
import wandererApi from "../api/Wanderer";
import * as SecureStore from "expo-secure-store";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signIn":
      return { token: action.payload, errorMessage: "" };
    default: {
      return state;
    }
  }
};

const signup = (dispatch) => {
  return async ({ name, email, password, cpassword }) => {
    console.log("Auth", name, email, password, cpassword);
    try {
      const response = await wandererApi.post("/api/users/register", {
        name,
        email,
        password,
        cpassword,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with SignUp",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await wandererApi.post("/api/users/login", {
        email,
        password,
      });
      console.log(JSON.stringify(response.data));
      await SecureStore.setItemAsync(
        "Current_User",
        JSON.stringify(response.data)
      );
      dispatch({
        type: "signIn",
        payload: JSON.stringify(response.data),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
