import { apiV1 } from "./API";

const userService = {
  tryAutoSignIn: async () => {
    const response = await apiV1().get(`/users/auth`);
    return response;
  },
  fetchSignUpUser: async credentials => {
    const response = await apiV1().post(`/users/signup`, credentials);
    return response;
  },

  fetchSignInUser: async credentials => {
    const response = await apiV1().post(`/users/signin`, credentials);
    return response;
  },
  fetchClickLog: newsDigestId => {
    apiV1().post(`/users/preference-logs/news/${newsDigestId}`);
  }
};

export default userService;
