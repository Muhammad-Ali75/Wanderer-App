import createDataContext from "./createDataContext";
import wandererApi from "../api/Wanderer";

const authReducer = (state, actions) => {
  switch (actions.type) {
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
      console.log(response.data);
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
  { isSignedIn: false }
);
