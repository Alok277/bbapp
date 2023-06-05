import axios from "axios";
class ApiAuthServices {
  static getInstance() {
    return new ApiAuthServices();
  }
  signup = async (credentials) => {
    try {
      console.log(credentials, 2);
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu3Zfyjmzs_P0XrBonviv9i240VYnTNpU",
        {
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }
      );
      return response;
    } catch (data) {
      let errorMessage = "Sign up failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      console.log(errorMessage);
    }
  };
  signin = async (credentials) => {
    try {
      console.log(credentials, "in");
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu3Zfyjmzs_P0XrBonviv9i240VYnTNpU",
        {
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (data) {
      let errorMessage = "Sign in failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      console.log(errorMessage);
    }
  };
  getData = async () => {
    const idToken = localStorage.getItem("idToken");
    console.log(idToken);
    try {
      console.log("getdata");
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAu3Zfyjmzs_P0XrBonviv9i240VYnTNpU",
        {
          idToken: idToken,
        }
      );
      return response.data;
    } catch (data) {
      let errorMessage = "get data failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      console.log(errorMessage);
    }
  };
}

export const apiAuthServices = ApiAuthServices.getInstance();
